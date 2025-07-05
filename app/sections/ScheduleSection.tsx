import type React from 'react';

const schedule = [
  {
    day: 'Friday, July 18',
    events: [
      { time: '16:00', title: 'Welcome Drinks', location: 'Villa Garden' },
      { time: '19:00', title: 'Casual Dinner', location: 'Terrace Restaurant' },
    ],
  },
  {
    day: 'Saturday, July 19',
    events: [
      { time: '14:00', title: 'Ceremony', location: 'Chapel Lawn' },
      { time: '16:00', title: 'Reception & Cocktails', location: 'Courtyard' },
      { time: '19:00', title: 'Dinner & Dancing', location: 'Main Hall' },
    ],
  },
  {
    day: 'Sunday, July 20',
    events: [{ time: '10:00', title: 'Farewell Brunch', location: 'Poolside' }],
  },
];

export const ScheduleSection: React.FC = () => {
  return (
    <section className="text-neutral-800 mt-[10rem]">
      {/* Full‑width hero image */}
      <div className="relative w-full h-64 md:h-96 bg-cover bg-center">
        <div className="absolute inset-0 bg-[#e4e0db]"></div>
        <h2 className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-serif uppercase tracking-wide">
          Weekend Schedule
        </h2>
      </div>

      {/* Centred content */}
      <div className="max-w-3xl mx-auto py-20 px-6">
        {schedule.map((day, i) => (
          <div key={i} className="mb-20 last:mb-0">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold uppercase tracking-wide mb-8">{day.day}</h3>
            <ul className="space-y-6">
              {day.events.map((ev, idx) => (
                <li key={idx} className="flex items-baseline">
                  <span className="w-24 font-medium">{ev.time}</span>
                  <span className="flex-1 italic">{ev.title}</span>
                  <span className="text-neutral-500">{ev.location}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
