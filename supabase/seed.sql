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
insert into invites (code, message_translations, guest_id)
select
  case name
    when 'Alice Dupont' then 'alice2025'
    when 'John Smith' then 'john2025'
    when 'Luca Bianchi' then 'luca2025'
  end as code,
  case name
    when 'Alice Dupont' then '{"en": "Welcome Alice!", "fr": "Bienvenue Alice!"}'::jsonb
    when 'John Smith' then '{"en": "Hi John, you’re invited!"}'::jsonb
    when 'Luca Bianchi' then '{"it": "Ciao Luca, sei invitato!"}'::jsonb
  end as message_translations,
  id as guest_id
from inserted_guests;