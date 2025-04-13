drop table invites
drop table invitees

create table guests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  preferred_language text not null default 'en',
  phone text not null
);

create table invites (
  id uuid primary key default gen_random_uuid(),
  code text unique not null, -- used in the URL
  guest_id uuid unique not null references guests(id) on delete cascade,
  updated_at timestamptz default now(),
  created_at timestamptz default now()
);