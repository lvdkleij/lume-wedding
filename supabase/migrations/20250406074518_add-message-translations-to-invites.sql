-- 1. Add the new JSONB column
alter table invites
add column message_translations jsonb;
-- 2. Migrate existing "message" content into the new field (English fallback)
update invites
set message_translations = jsonb_build_object('en', message)
where message is not null;
-- 3. Remove the old "message" column
alter table invites
drop column message;