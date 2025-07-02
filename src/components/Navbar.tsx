import { useState } from "react";
import classNames from 'classnames';

const navItems = ['Home', 'Our Team', 'Gallery', 'Comments'];

const Navbar = () => {
    const [active, setActive] = useState('Home');

  return (
    <nav className="w-full bg-white shadow-sm">
    <div className="max-w-screen-xl mx-auto px-4 py-9 flex justify-end space-x-8 text-sm font-medium">
      {navItems.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={classNames(
            'text-xl font-normal transition-colors duration-200',
            active === item
              ? 'text-gray-400 cursor-default'
              : 'text-black hover:text-gray-600'
          )}
        >
          {item}
        </button>
      ))}
    </div>
  </nav>
  )
}

export default Navbar