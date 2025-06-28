import type React from 'react';

export const InviteMessage: React.FC = () => {
  return (
    <section className="atlas-container">
      <section className="atlas-grid">
        <section className="col-start-1 sm:col-start-17 md:col-start-16 lg:col-start-5 col-span-full sm:col-span-8 md:col-span-4">
          <h2 className="heading-2 flex -ml-[4rem] flex-col">
            <span>Dear Amandine</span>
            <span>join us</span>
            <span>in celebrating</span>
            <span>our marriage</span>
          </h2>
          <p className="text mt-[2rem]">
            We're getting married—and we'd love for you to be there. After years of shared dinners, long walks, and a
            few chaotic travel stories, Melisa and Lucas are tying the knot at Château de Lacoste in Dordogne. It's not
            going to be overly formal—just a weekend with the people we care about, good food, music, and hopefully some
            sunshine. We hope you'll join us to celebrate, catch up, and make some new memories together.
          </p>
        </section>
      </section>
    </section>
  );
};
