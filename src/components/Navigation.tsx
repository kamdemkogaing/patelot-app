
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    // state


    // comportement


    return (
        <div className='bg-slate-200'>
            <ul className='flex flex-wrap -mb-px'>
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
        </div >
    );
};

export default Navigation;