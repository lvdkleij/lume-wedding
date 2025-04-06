insert into invites (code, message_translations) values
  (
    'abc123',
    jsonb_build_object(
      'en', 'Alice and Bob, we’d love to have you with us on our special day!',
      'fr', 'Alice et Bob, nous serions ravis de vous avoir avec nous en ce jour spécial !',
      'nl', 'Alice en Bob, we zouden het geweldig vinden als jullie erbij zijn op onze speciale dag!',
      'pt', 'Alice e Bob, adoraríamos ter vocês conosco neste dia tão especial!'
    )
  ),
  (
    'smith-family',
    jsonb_build_object(
      'en', 'Dear Smith family, your presence would mean the world to us.',
      'fr', 'Chère famille Smith, votre présence signifierait beaucoup pour nous.',
      'nl', 'Beste familie Smith, jullie aanwezigheid zou heel veel voor ons betekenen.',
      'pt', 'Querida família Smith, a vossa presença significaria muito para nós.'
    )
  ),
  (
    'invite42',
    jsonb_build_object(
      'en', 'We hope you can join us for a celebration full of love and joy!',
      'fr', 'Nous espérons que vous pourrez vous joindre à nous pour une célébration pleine d’amour et de joie !',
      'nl', 'We hopen dat je erbij kunt zijn voor een feest vol liefde en vreugde!',
      'pt', 'Esperamos que você possa se juntar a nós para uma celebração cheia de amor e alegria!'
    )
  );

insert into invitees (invite_id, name) values
  ((select id from invites where code = 'abc123'), 'Alice'),
  ((select id from invites where code = 'abc123'), 'Bob'),
  ((select id from invites where code = 'smith-family'), 'Sarah Smith');