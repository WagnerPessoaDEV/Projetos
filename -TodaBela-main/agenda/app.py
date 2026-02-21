from datetime import datetime

from db import init_db
from models import (
    add_client, list_clients,
    add_service, list_services,
    add_appointment, list_appointments_by_day, list_appointments_between,
    cancel_appointment, reschedule_appointment
)

def read_int(prompt: str) -> int:
    while True:
        try:
            return int(input(prompt).strip())
        except ValueError:
            print("Digite um número válido.")

def menu():
    print("\n=== AGENDA DO SALÃO ===")
    print("1) Cadastrar cliente")
    print("2) Listar clientes")
    print("3) Cadastrar serviço")
    print("4) Listar serviços")
    print("5) Agendar horário")
    print("6) Ver agenda do dia")
    print("7) Ver agenda por período")
    print("8) Cancelar agendamento")
    print("9) Remarcar agendamento")
    print("0) Sair")

def normalize_date_input(date_str: str) -> str:
    value = date_str.strip().lower()
    if value == "hoje":
        return datetime.now().strftime("%Y-%m-%d")
    for fmt in ("%Y-%m-%d", "%d/%m/%Y", "%d-%m-%Y"):
        try:
            return datetime.strptime(value, fmt).strftime("%Y-%m-%d")
        except ValueError:
            continue
    raise ValueError("Data inválida. Use YYYY-MM-DD ou DD/MM/YYYY.")

def show_clients():
    rows = list_clients()
    if not rows:
        print("Nenhum cliente cadastrado.")
        return
    for r in rows:
        print(f"[{r['id']}] {r['name']} - {r['phone'] or 'sem telefone'}")

def show_services():
    rows = list_services()
    if not rows:
        print("Nenhum serviço cadastrado.")
        return
    for r in rows:
        print(f"[{r['id']}] {r['name']} - {r['duration_minutes']} min - R$ {r['price']:.2f}")

def show_agenda_day():
    day_raw = input("Dia (YYYY-MM-DD ou DD/MM/YYYY, ou enter para hoje): ").strip()
    if not day_raw:
        day_raw = "hoje"
    try:
        day = normalize_date_input(day_raw)
    except ValueError as e:
        print(f"❌ {e}")
        return
    rows = list_appointments_by_day(day)
    if not rows:
        print("Sem agendamentos para esse dia.")
        return
    for r in rows:
        print(f"[{r['id']}] {r['start_at']} → {r['end_at']} | {r['professional']} | {r['client_name']} | {r['service_name']} | {r['status']}")

def show_agenda_between():
    start_raw = input("Data inicial (YYYY-MM-DD ou DD/MM/YYYY, ou enter para hoje): ").strip()
    end_raw = input("Data final (YYYY-MM-DD ou DD/MM/YYYY, ou enter para hoje): ").strip()
    if not start_raw:
        start_raw = "hoje"
    if not end_raw:
        end_raw = "hoje"
    try:
        start_day = normalize_date_input(start_raw)
        end_day = normalize_date_input(end_raw)
    except ValueError as e:
        print(f"❌ {e}")
        return
    rows = list_appointments_between(start_day, end_day)
    if not rows:
        print("Sem agendamentos nesse período.")
        return
    for r in rows:
        print(f"[{r['id']}] {r['start_at']} → {r['end_at']} | {r['professional']} | {r['client_name']} | {r['service_name']} | {r['status']}")

def main():
    init_db()
    while True:
        menu()
        op = input("Escolha: ").strip()

        try:
            if op == "1":
                name = input("Nome do cliente: ").strip()
                phone = input("Telefone (opcional): ").strip() or None
                add_client(name, phone)
                print("✅ Cliente cadastrado!")

            elif op == "2":
                show_clients()

            elif op == "3":
                name = input("Nome do serviço: ").strip()
                duration = read_int("Duração (minutos): ")
                price_str = input("Preço (ex: 80.00) (opcional): ").strip()
                price = float(price_str) if price_str else 0.0
                add_service(name, duration, price)
                print("✅ Serviço cadastrado!")

            elif op == "4":
                show_services()

            elif op == "5":
                print("\n--- Clientes ---")
                show_clients()
                client_id = read_int("ID do cliente: ")

                print("\n--- Serviços ---")
                show_services()
                service_id = read_int("ID do serviço: ")

                professional = input("Profissional (ex: Ana): ").strip()
                start_at = input("Início (YYYY-MM-DD HH:MM): ").strip()
                notes = input("Observações (opcional): ").strip() or None

                add_appointment(client_id, service_id, professional, start_at, notes)
                print("✅ Agendamento criado!")

            elif op == "6":
                show_agenda_day()

            elif op == "7":
                show_agenda_between()

            elif op == "8":
                appt_id = read_int("ID do agendamento: ")
                cancel_appointment(appt_id)
                print("✅ Agendamento cancelado!")

            elif op == "9":
                appt_id = read_int("ID do agendamento: ")
                new_start = input("Novo início (YYYY-MM-DD HH:MM): ").strip()
                reschedule_appointment(appt_id, new_start)
                print("✅ Agendamento remarcado!")

            elif op == "0":
                print("Até mais!")
                break

            else:
                print("Opção inválida.")

        except Exception as e:
            print(f"❌ Erro: {e}")

if __name__ == "__main__":
    main()