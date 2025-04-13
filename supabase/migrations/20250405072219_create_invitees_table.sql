create table invitees (
  id uuid primary key default gen_random_uuid(),
  invite_id uuid not null references invites(id) on delete cascade,
  name text not null
)