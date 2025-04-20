import { useTranslation } from 'react-i18next';
import { supabaseServer } from '~/utils/supabase.server';
import type { Route } from './+types/invite.$inviteCode';
import i18n from 'i18next';
import { SpotifyPlaylistManager } from '~/components/SpotifyPlaylistManager';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Mousewheel } from 'swiper/modules';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/mousewheel';

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
      guest:guest_id(name, preferredLanguage:preferred_language)`
    )
    .eq('code', inviteCode)
    .single();

  if (error || !invite) {
    throw new Response('Invite not found', { status: 404 });
  }

  const preferredLanguage = invite.guest.preferredLanguage;
  i18n.changeLanguage(preferredLanguage);

  return { invite };
}

export default function InvitePage({ loaderData }: Route.ComponentProps) {
  const { t, i18n } = useTranslation();
  const { invite } = loaderData;

  const preferredLanguage = invite.guest.preferredLanguage;
  if (i18n.language !== preferredLanguage) {
    i18n.changeLanguage(preferredLanguage);
  }

  const colours = ['#f1d9cc', '#c6d8e7', '#f0d1d0'];
  const transitionDuration = 1000; // 👈 Change this to control animation speed (in ms)

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioningTo, setTransitioningTo] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentColour = colours[activeIndex];
  const nextColour = transitioningTo !== null ? colours[transitioningTo] : null;

  useEffect(() => {
    if (transitioningTo !== null && transitioningTo !== activeIndex) {
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setActiveIndex(transitioningTo);
        setTransitioningTo(null);
        setIsAnimating(false);
      }, transitionDuration);
      return () => clearTimeout(timeout);
    }
  }, [transitioningTo, activeIndex, transitionDuration]);

  const handleSlideChange = (swiper: any) => {
    const next = swiper.activeIndex;
    if (next !== activeIndex) {
      setTransitioningTo(next);
    }
  };

  return (
    <>
      {/* 🌸 Background container */}
      <div className="fixed inset-0 -z-10">
        {/* Base background */}
        <div className="absolute inset-0" style={{ backgroundColor: currentColour }} />

        {/* Transition overlay */}
        {isAnimating && nextColour && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: nextColour,
              clipPath: 'circle(0% at 50% 50%)',
              animation: `radial-reveal ${transitionDuration}ms ease-in-out forwards`,
            }}
          />
        )}
      </div>

      {/* Swiper Slides */}
      <Swiper
        direction="vertical"
        modules={[Parallax, Mousewheel]}
        speed={1000}
        mousewheel={{ forceToAxis: true }}
        parallax={true}
        onSlideChange={handleSlideChange}
        style={{ width: '100vw', height: '100vh' }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div data-swiper-parallax="-100" className="h-full flex items-center justify-center text-4xl text-white">
            Welcome to the Wedding
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            data-swiper-parallax="-200"
            className="h-full flex flex-col items-center justify-center text-white text-center p-8"
          >
            <h1 className="text-3xl mb-4">{t('greeting')}</h1>
            <p className="text-xl">{t('inviteMessage')}</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div data-swiper-parallax="-150" className="h-full flex items-center justify-center text-white text-3xl">
            <SpotifyPlaylistManager />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes radial-reveal {
            from {
              clip-path: circle(0% at 50% 50%);
            }
            to {
              clip-path: circle(150% at 50% 50%);
            }
          }
        `}
      </style>
    </>
  );
}
