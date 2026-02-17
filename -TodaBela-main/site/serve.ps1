Param(
    [int]$Port = 5500,
    [string]$BindHost = "localhost"
)

$prefix = "http://$BindHost`:$Port/"
Add-Type -AssemblyName System.Net.HttpListener
Add-Type -AssemblyName System.IO.Compression.FileSystem | Out-Null

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
try {
    $listener.Start()
} catch {
    Write-Host "Falha ao iniciar o servidor em $prefix"
    Write-Host $_.Exception.Message
    exit 1
}

Write-Host "Servindo $(Get-Location) em $prefix"

function Get-ContentType($path) {
    switch ([IO.Path]::GetExtension($path).ToLower()) {
        ".html" { "text/html" }
        ".htm"  { "text/html" }
        ".css"  { "text/css" }
        ".js"   { "application/javascript" }
        ".json" { "application/json" }
        ".png"  { "image/png" }
        ".jpg"  { "image/jpeg" }
        ".jpeg" { "image/jpeg" }
        ".gif"  { "image/gif" }
        ".svg"  { "image/svg+xml" }
        ".ico"  { "image/x-icon" }
        default { "application/octet-stream" }
    }
}

while ($true) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($localPath)) { $localPath = "index.html" }
        $fullPath = Join-Path (Get-Location) $localPath

        if (Test-Path $fullPath -PathType Leaf) {
            $bytes = [IO.File]::ReadAllBytes($fullPath)
            $response.ContentType = Get-ContentType $fullPath
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [Text.Encoding]::UTF8.GetBytes("Not Found")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }

        $response.OutputStream.Close()
    } catch {
        continue
    }
}
