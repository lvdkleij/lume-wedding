import type React from 'react';

export const InviteMessage: React.FC = () => {
  return (
    <section className="atlas-container">
      <section className="atlas-grid">
        <section className="col-start-1 lg:col-start-5 col-span-full atlas-grid grid-cols-12 sm:grid-cols-12 lg:grid-cols-8">
          <h2 className="heading-2 flex flex-col col-start-1 col-span-full">
            <span>Amandine,</span>
            <span>we can't wait to</span>
            <span>celebrate with you!</span>
          </h2>
          <p className="text col-start-1 sm:col-start-2 col-span-full sm:-col-end-1 md:-col-end-2 lg:-col-end-4 ">
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
