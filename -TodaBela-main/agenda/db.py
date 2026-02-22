import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).resolve().parent / "agenda_salao.db"

def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
    CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        notes TEXT,
        created_at TEXT DEFAULT (datetime('now'))
    );
    """)

    cur.execute("PRAGMA table_info(clients)")
    columns = {row[1] for row in cur.fetchall()}
    if "notes" not in columns:
        cur.execute("ALTER TABLE clients ADD COLUMN notes TEXT")

    cur.execute("""
    CREATE TABLE IF NOT EXISTS services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        duration_minutes INTEGER NOT NULL,
        price REAL DEFAULT 0
    );
    """)

    cur.execute("""
    CREATE TABLE IF NOT EXISTS appointments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_id INTEGER NOT NULL,
        service_id INTEGER NOT NULL,
        professional TEXT NOT NULL,
        start_at TEXT NOT NULL,   -- ISO: YYYY-MM-DD HH:MM
        end_at TEXT NOT NULL,     -- ISO: YYYY-MM-DD HH:MM
        status TEXT NOT NULL DEFAULT 'ativo', -- ativo/cancelado
        notes TEXT,
        created_at TEXT DEFAULT (datetime('now')),
        FOREIGN KEY (client_id) REFERENCES clients(id),
        FOREIGN KEY (service_id) REFERENCES services(id)
    );
    """)

    conn.commit()
    conn.close()