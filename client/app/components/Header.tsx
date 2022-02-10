import { Link, useLocation } from 'remix';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="flex justify-center fixed top-0 w-full z-10">
      <nav className="max-w-screen-lg bg-white w-full flex text-center py-2">
        <Link
          to={'/objectives'}
          className={`${
            pathname === '/objectives' ? 'text-emerald-700' : null
          } w-1/3 uppercase underline text-xl font-bold decoration-double hover:decoration-emerald-500 underline-offset-2 hover:text-emerald-600`}
        >
          doelstellingen
        </Link>
        <Link
          to={'/'}
          className="w-1/3 font-bold text-4xl uppercase text-slate-800 hover:text-amber-700"
        >
          🍻Workaholic🍻
        </Link>
        <Link
          to={'/employees'}
          className={`${
            pathname === '/employees' ? 'text-emerald-700' : null
          } w-1/3 uppercase underline text-xl font-bold decoration-double hover:decoration-emerald-500 underline-offset-2 hover:text-emerald-600`}
        >
          Werknemers
        </Link>
      </nav>
    </header>
  );
};

export default Header;
