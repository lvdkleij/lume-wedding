import { useTranslation } from 'react-i18next';
import { supabaseServer } from '~/utils/supabase.server';
import type { Route } from './+types/invite.$inviteCode';

export async function loader({ params }: Route.LoaderArgs) {
  const inviteCode = params.inviteCode;

  if (!inviteCode) {
    throw new Response('Invite code is required', { status: 400 });
  }

  const { data: invite, error } = await supabaseServer
    .from('invites')
    .select(
      `
      code, 
      messageTranslations:message_translations, 
      guest:guest_id(name, preferredLanguage:preferred_language)`
    )
    .eq('code', inviteCode)
    .single();

  if (error || !invite) {
    throw new Response('Invite not found', { status: 404 });
  }

  return {
    invite,
  };
}

export default function InvitePage({ loaderData }: Route.ComponentProps) {
  const { t, i18n } = useTranslation();
  const { invite } = loaderData;

  const preferredLanguage = invite.guest.preferredLanguage;

  i18n.changeLanguage(preferredLanguage);

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('inviteMessage')}</p>
    </div>
  );
}
