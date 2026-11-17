# Reusable skills

This project includes one reusable Codex skill:

- [`skills/fleetflow-build/SKILL.md`](skills/fleetflow-build/SKILL.md) — build or extend FleetFlow with role-aware authorization, Prisma transactions, shipment audit logs, tests, and documentation updates.

The skill is self-contained and includes [`references/schema.md`](skills/fleetflow-build/references/schema.md) for data-model and transition guidance.

## Local Collins driver configuration

- **Collins Ortese (Authentik)** — username `collins.ortese.driver`, email `collins.ortese.driver@fleetflow.local`, member of `FleetFlow Drivers`.
- The matching FleetFlow Prisma user is configured with the `DRIVER` role and appears in the admin shipment driver selector.
- The driver workspace is available at `/driver`; Collins can view assigned trips, update shipment status, and add audited delivery notes.
