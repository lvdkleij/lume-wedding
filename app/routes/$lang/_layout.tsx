import { Outlet, useParams } from 'react-router';

export default function LangLayout() {
  return (
    <div className="site-layout">
      <main>
        <Outlet />
      </main>

      <footer>
        <p>© 2026 The Happy Couple</p>
      </footer>
    </div>
  );
}
