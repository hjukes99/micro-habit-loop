# TODO (next 24–48h)

1. [P0] Implement typed data model for HabitConfig and CheckIn records.
2. [P0] Build storage module for read/write JSON with safe file initialization.
3. [P0] Implement streak calculation utility (current + longest + last-14 map).
4. [P0] Add CLI command: `init` to create/update habit config.
5. [P0] Add CLI command: `checkin` to mark today complete idempotently.
6. [P1] Add CLI command: `status` to print streak + last 14 days grid.
7. [P1] Add input validation and friendly error messaging.
8. [P1] Add unit tests for streak logic edge cases (gaps, duplicates, timezone-safe date parsing).
9. [P1] Add tests for storage initialization and idempotent check-ins.
10. [P2] Improve README with usage examples and sample outputs.
