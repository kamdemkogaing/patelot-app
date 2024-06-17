
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ImageLogo from './ImageLogo';

const Navigation = () => {
    // state
    const [scrolled, isScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    // comportements
    const handleScroll = () => {
        isScrolled(window.scrollY > 120);
    };

    // render
    return (
        <div className={classNames('bg-slate-200', `${scrolled ? "Scrolling" : "NotScrolling"}`)}>

            <ImageLogo
                altName="patelot.de logo"
                width={50}
                height={50}
                kamdem="PK"
            />

            <ul className={classNames(' container mx-auto flex flex-wrap -mb-px relative')}>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }>
                    <li className='me-2'>accueil</li>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                    isActive ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                }>
                    <li className='me-2'>á propos</li>
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/tutorial"
                    className={({ isActive }) =>
                        isActive ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                >
                    Tutorial
                </NavLink>
                <NavLink
                    to="/country"
                    className={({ isActive }) =>
                        isActive ? "active inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    }
                >
                    Countries
                </NavLink>
            </ul >
        </div>
    );
};

export default Navigation;

// Scroll Event
/* const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-145px"
  }
}); */

/* {classNames(
    'bg-slate-200 flex flex-wrap -mb-px',
    {
        'tw-grid-cols-2': scrolled
    },
)} */

/* className={classNames('bg-slate-200 flex flex-wrap -mb-px', {
    'text-white dark': colorScheme === 'dark',
    'text-[#001B41]': colorScheme === 'bright',
})} */