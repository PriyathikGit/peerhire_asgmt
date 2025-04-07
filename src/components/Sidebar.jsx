import { X } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ setSideBar, hamIcon, sidebar }) => {
    
    const handleCloseSideBar = () => {
        setSideBar(false);
    };

    return (
        <div
            className={`bg-white shadow-md w-40 dark:bg-gray-800 h-full p-4 fixed left-0 top-0 z-40 transform transition-transform duration-300 ${hamIcon ? (sidebar ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'
                }`}
        >
            <ul className="space-y-6 mt-8">
                {/* Show close icon only when sidebar is open on mobile */}
                {hamIcon && sidebar && (
                    <X
                        className="absolute top-2 left-2 cursor-pointer"
                        color="white"
                        onClick={handleCloseSideBar}
                    />
                )}
                <li className="text-xl font-semibold">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-500 font-bold'
                                : 'text-gray-700 dark:text-gray-300'
                        }
                    >
                        Dashboard
                    </NavLink>
                </li>
                <li className="text-xl font-semibold">
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-500 font-bold'
                                : 'text-gray-700 dark:text-gray-300'
                        }
                    >
                        Profile
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;