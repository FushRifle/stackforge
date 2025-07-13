import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';
import UserMenu from '../profile/UserMenu';

export default function DashboardHeader() {
    return (
        <header className="bg-white shadow-sm">
            <div className="px-6 py-4 flex items-center justify-between">
                <div className="relative max-w-md w-full">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div className="flex items-center space-x-4">
                    <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <BellIcon className="h-6 w-6" />
                    </button>
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}