import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { supabaseServer } from '~/utils/supabase.server';
import type { Route } from './+types/invite.$inviteCode';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/mousewheel';
import { HeroSection } from '~/sections/HeroSection';
import { ScheduleSection } from '~/sections/ScheduleSection';
import { VenueSection } from '~/sections/VenueSection';
import { InviteMessage } from '~/sections/InviteMessage';
import { Overlay } from '~/components/Overlay';
import LanguageSwitcher from '~/components/LanguageSwitcher';

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
      guest:guest_id(id, name, preferredLanguage:preferred_language)`
    )
    .eq('code', inviteCode)
    .single();

  if (error || !invite) {
    throw new Response('Invite not found', { status: 404 });
  }

  return { invite };
}

export default function InvitePage({ loaderData }: Route.ComponentProps) {
  const { i18n } = useTranslation();
  const { invite } = loaderData;

  const preferredLanguage = invite.guest.preferredLanguage;

  useEffect(() => {
    if (i18n.language !== preferredLanguage) {
      i18n.changeLanguage(preferredLanguage);
    }
  }, [preferredLanguage, i18n]);

  return (
    <>
      <LanguageSwitcher />
      <Overlay />
      <HeroSection />
      <InviteMessage />
      <ScheduleSection />
      <VenueSection />
    </>
  );
}
