create table invites (
  id uuid primary key default gen_random_uuid(),
  code text unique not null, -- used in the URL
  message text,
  created_at timestamptz default now()
)