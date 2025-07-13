import { ReactNode } from 'react';
import Link from 'next/link';

type SidebarLinkProps = {
    to: string;
    icon: ReactNode;
    children: ReactNode;
};

export default function SidebarLink({ to, icon, children }: SidebarLinkProps) {
    return (
        <Link
            href={to}
            className="group flex items-center px-2 py-2 text-sm font-medium rounded-md hover:bg-gray-100 hover:text-gray-900 text-gray-600"
        >
            <span className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500">
                {icon}
            </span>
            {children}
        </Link>
    );
}
