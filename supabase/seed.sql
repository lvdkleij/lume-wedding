insert into invites (code, message) values
  ('abc123', 'Alice and Bob, we’d love to have you with us on our special day!'),
  ('smith-family', 'Dear Smith family, your presence would mean the world to us.'),
  ('invite42', 'We hope you can join us for a celebration full of love and joy!');

insert into invitees (invite_id, name) values
  ((select id from invites where code = 'abc123'), 'Alice'),
  ((select id from invites where code = 'abc123'), 'Bob'),
  ((select id from invites where code = 'smith-family'), 'Sarah Smith');