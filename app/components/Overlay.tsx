import { useTranslation } from 'react-i18next';

export const Overlay: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="flex">
      <div>
        <h1>{t('greeting')}</h1>
      </div>

      {/* <section className="flex">
        <nav className="inline-block">
          <ul className="flex flex-row gap-4">
            <li>
              <NavLink text="Invite" />
            </li>
            <li>
              <NavLink text="Location" />
            </li>
            <li>
              <NavLink text="Schedule" />
            </li>
            <li>
              <NavLink text="Dietary" />
            </li>
          </ul>
        </nav>
      </section> */}
      {/* <LanguageSelector /> */}
    </section>
  );
};
