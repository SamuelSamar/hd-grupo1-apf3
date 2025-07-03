import { NavLink } from "react-router";
import classNames from 'classnames';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Our Team', path: '/team' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Comments', path: '/comments' },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-9 flex justify-end space-x-8 text-sm font-medium">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              classNames(
                'text-xl font-normal transition-colors duration-200',
                isActive ? 'text-gray-400 cursor-default' : 'text-black hover:text-gray-600'
              )
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;