from datetime import datetime, timedelta
from db import get_conn

DATETIME_FMT = "%Y-%m-%d %H:%M"

def parse_dt(dt_str: str) -> datetime:
    return datetime.strptime(dt_str, DATETIME_FMT)

def format_dt(dt: datetime) -> str:
    return dt.strftime(DATETIME_FMT)

# ---------- CLIENTES ----------
def add_client(name: str, phone: str, notes: str | None = None):
    phone_value = phone.strip()
    if not phone_value:
        raise ValueError("Telefone é obrigatório.")
    conn = get_conn()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO clients (name, phone, notes) VALUES (?, ?, ?)",
        (name.strip(), phone_value, notes)
    )
    conn.commit()
    conn.close()

def list_clients():
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT id, name, phone, notes FROM clients ORDER BY name")
    rows = cur.fetchall()
    conn.close()
    return rows

def get_client(client_id: int):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT * FROM clients WHERE id = ?", (client_id,))
    row = cur.fetchone()
    conn.close()
    return row

def update_client(client_id: int, name: str, phone: str, notes: str | None = None):
    name_value = name.strip()
    phone_value = phone.strip()
    if not name_value:
        raise ValueError("Nome é obrigatório.")
    if not phone_value:
        raise ValueError("Telefone é obrigatório.")
    conn = get_conn()
    cur = conn.cursor()
    cur.execute(
        "UPDATE clients SET name = ?, phone = ?, notes = ? WHERE id = ?",
        (name_value, phone_value, notes, client_id)
    )
    conn.commit()
    conn.close()

# ---------- SERVIÇOS ----------
def add_service(name: str, duration_minutes: int, price: float = 0.0):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO services (name, duration_minutes, price) VALUES (?, ?, ?)",
        (name.strip(), int(duration_minutes), float(price))
    )
    conn.commit()
    conn.close()

def list_services():
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT id, name, duration_minutes, price FROM services ORDER BY name")
    rows = cur.fetchall()
    conn.close()
    return rows

def get_service(service_id: int):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT * FROM services WHERE id = ?", (service_id,))
    row = cur.fetchone()
    conn.close()
    return row

# ---------- AGENDAMENTOS ----------
def has_conflict(professional: str, start_at: str, end_at: str, ignore_appointment_id: int | None = None) -> bool:
    """
    Conflito se existir agendamento ATIVO do mesmo profissional
    onde (novo_start < existente_end) AND (novo_end > existente_start)
    """
    conn = get_conn()
    cur = conn.cursor()

    params = [professional, start_at, end_at]
    sql = """
    SELECT 1
    FROM appointments
    WHERE professional = ?
      AND status = 'ativo'
      AND (? < end_at) AND (? > start_at)
    """
    if ignore_appointment_id is not None:
        sql += " AND id <> ?"
        params.append(ignore_appointment_id)

    cur.execute(sql, params)
    found = cur.fetchone() is not None
    conn.close()
    return found

def add_appointment(client_id: int, service_id: int, professional: str, start_at: str, notes: str | None = None):
    svc = get_service(service_id)
    if not svc:
        raise ValueError("Serviço não encontrado.")

    start_dt = parse_dt(start_at)
    end_dt = start_dt + timedelta(minutes=int(svc["duration_minutes"]))

    start_str = format_dt(start_dt)
    end_str = format_dt(end_dt)

    if has_conflict(professional.strip(), start_str, end_str):
        raise ValueError("Conflito: esse profissional já tem agendamento nesse horário.")

    conn = get_conn()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO appointments (client_id, service_id, professional, start_at, end_at, notes)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (client_id, service_id, professional.strip(), start_str, end_str, notes))
    conn.commit()
    conn.close()

def list_appointments_by_day(day: str):
    """
    day: YYYY-MM-DD
    """
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("""
        SELECT a.id, a.start_at, a.end_at, a.professional, a.status,
               c.name AS client_name,
               s.name AS service_name, s.price
        FROM appointments a
        JOIN clients c ON c.id = a.client_id
        JOIN services s ON s.id = a.service_id
        WHERE date(a.start_at) = date(?)
        ORDER BY a.start_at
    """, (day,))
    rows = cur.fetchall()
    conn.close()
    return rows

def list_appointments_between(start_day: str, end_day: str):
    """
    start_day/end_day: YYYY-MM-DD
    """
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("""
        SELECT a.id, a.start_at, a.end_at, a.professional, a.status,
               c.name AS client_name,
               s.name AS service_name, s.price
        FROM appointments a
        JOIN clients c ON c.id = a.client_id
        JOIN services s ON s.id = a.service_id
        WHERE date(a.start_at) BETWEEN date(?) AND date(?)
        ORDER BY a.start_at
    """, (start_day, end_day))
    rows = cur.fetchall()
    conn.close()
    return rows

def cancel_appointment(appointment_id: int):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("UPDATE appointments SET status = 'cancelado' WHERE id = ?", (appointment_id,))
    conn.commit()
    conn.close()

def reschedule_appointment(appointment_id: int, new_start_at: str):
    conn = get_conn()
    cur = conn.cursor()
    cur.execute("SELECT * FROM appointments WHERE id = ?", (appointment_id,))
    appt = cur.fetchone()
    conn.close()

    if not appt:
        raise ValueError("Agendamento não encontrado.")

    svc = get_service(appt["service_id"])
    if not svc:
        raise ValueError("Serviço do agendamento não encontrado.")

    new_start_dt = parse_dt(new_start_at)
    new_end_dt = new_start_dt + timedelta(minutes=int(svc["duration_minutes"]))
    new_start_str = format_dt(new_start_dt)
    new_end_str = format_dt(new_end_dt)

    if has_conflict(appt["professional"], new_start_str, new_end_str, ignore_appointment_id=appointment_id):
        raise ValueError("Conflito: esse profissional já tem agendamento nesse horário.")

    conn = get_conn()
    cur = conn.cursor()
    cur.execute("""
        UPDATE appointments
        SET start_at = ?, end_at = ?
        WHERE id = ?
    """, (new_start_str, new_end_str, appointment_id))
    conn.commit()
    conn.close()