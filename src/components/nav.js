import React from 'react';
import { Link } from 'gatsby';

import { BookOpenIcon, UserCircleIcon, LightBulbIcon } from '@heroicons/react/outline';

export default () => {
    return (
        <nav className="fixed left-0 bottom-0 w-full shadow-inner bg-white">
            <ul className="flex justify-evenly py-2 text-xs">
                <Link
                    partiallyActive={false}
                    to="/"
                    activeClassName="text-blue-500"
                    className="flex flex-col items-center"
                >
                    <BookOpenIcon className="w-6" />
                    <span className="ml-1">Notes</span>
                </Link>
                <Link
                    to="/about-me"
                    activeClassName="text-blue-500"
                    className="flex flex-col items-center"
                >
                    <UserCircleIcon className="w-6" />
                    <span className="ml-1">About me</span>
                </Link>
                <li className="flex flex-col items-center">
                    <LightBulbIcon className="w-6" />
                    <span>Theme</span>
                </li>
            </ul>
        </nav>
    )
}

