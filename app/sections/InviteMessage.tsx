import type React from 'react';
import { LabeledLayout } from '~/components/LabeledLayout';

export const InviteMessage: React.FC = () => {
  return (
    <section className="u-container">
      <section className="u-grid">
        {/* <section className="col-start-1 sm:col-start-10 md:col-start-10 lg:col-start-4 col-span-full sm:col-span-10 md:col-span-8 lg:col-span-6 row-start-1">
          <h2 className="heading-2 flex flex-col ">
            <span>Friday</span>
            <span>June 12-14</span>
            <span>2026</span>
          </h2>
        </section> */}
        <section className="col-start-1 sm:col-start-17 md:col-start-16 lg:col-start-5 col-span-full sm:col-span-8 md:col-span-4">
          <h2 className="heading-2 flex -ml-[4rem] flex-col">
            <span>Dear Amandine</span>
            <span>join us</span>
            <span>in celebrating</span>
            <span>our marriage</span>
          </h2>
          <p className="body mt-[2rem]">
            We're getting married—and we'd love for you to be there. After years of shared dinners, long walks, and a
            few chaotic travel stories, Melisa and Lucas are tying the knot at Château de Lacoste in Dordogne. It's not
            going to be overly formal—just a weekend with the people we care about, good food, music, and hopefully some
            sunshine. We hope you'll join us to celebrate, catch up, and make some new memories together.
          </p>
        </section>
        {/* <LabeledLayout
          className="col-start-1 sm:col-start-10 md:col-start-10 lg:col-start-10 col-span-full sm:col-span-10 md:col-span-8 lg:col-span-6 row-start-1"
          eyebrow="the date"
          mainText={
            <h2 className="heading-2 flex flex-col ">
              <span>Friday</span>
              <span>June 12-14</span>
              <span>2026</span>
            </h2>
          }
        ></LabeledLayout>
        <LabeledLayout
          eyebrow="the invite"
          mainText={
            <p className="body">
              Dear Amandine, Join us in celebrating as Melisa Duman and Lucas van der Kleij say “I do” at the beautiful
              Château de Lacoste, Dordogne, France.
            </p>
          }
          className="col-start-1 sm:col-start-17 md:col-start-16 lg:col-start-16 col-span-full sm:col-span-8 md:col-span-6 row-start-2"
        ></LabeledLayout> */}
      </section>
    </section>
  );
};
