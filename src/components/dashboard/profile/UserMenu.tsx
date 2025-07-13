'use client';

import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export default function UserMenu() {
    const [user] = useState({
        name: 'John Doe',
        email: 'john@example.com',
        imageUrl: '/vercel.svg',
    });

    const userNavigation = [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
    ];

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="flex items-center space-x-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <Image
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt={user.name}
                    width={32}
                    height={32}
                />
                <span className="hidden md:block text-gray-800 dark:text-gray-900 font-medium">
                    {user.name}
                </span>
                <ChevronDownIcon className="h-4 w-4 text-gray-400" />
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                        <p className="text-xs text-gray-500">Signed in as</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                            {user.email}
                        </p>
                    </div>
                    {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                            {({ active }) => (
                                <a
                                    href={item.href}
                                    className={classNames(
                                        active ? 'bg-gray-100 dark:bg-gray-700' : '',
                                        'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200'
                                    )}
                                >
                                    {item.name}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
