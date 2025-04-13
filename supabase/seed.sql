-- Insert guests and return their IDs for use in invites
with inserted_guests as (
  insert into guests (name, preferred_language, phone)
  values
    ('Alice Dupont', 'fr', '+33 612345678'),
    ('John Smith', 'en', '+44 7123456789'),
    ('Luca Bianchi', 'it', '+39 3341234567')
  returning id, name
)

-- Insert invites using the returned guest IDs
insert into invites (code, guest_id)
select
  case name
    when 'Alice Dupont' then 'alice2025'
    when 'John Smith' then 'john2025'
    when 'Luca Bianchi' then 'luca2025'
  end as code,
  id as guest_id
from inserted_guests;