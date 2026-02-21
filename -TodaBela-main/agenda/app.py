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
    day = input("Dia (YYYY-MM-DD): ").strip()
    rows = list_appointments_by_day(day)
    if not rows:
        print("Sem agendamentos para esse dia.")
        return
    for r in rows:
        print(f"[{r['id']}] {r['start_at']} → {r['end_at']} | {r['professional']} | {r['client_name']} | {r['service_name']} | {r['status']}")

def show_agenda_between():
    start_day = input("Data inicial (YYYY-MM-DD): ").strip()
    end_day = input("Data final (YYYY-MM-DD): ").strip()
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