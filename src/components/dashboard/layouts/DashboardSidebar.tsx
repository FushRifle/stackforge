import { HomeIcon, FolderIcon, StarIcon, CogIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import SidebarLink from './SidebarLink';
import Image from 'next/image';
import UserProfileMini from '../profile/Profile';

export default function DashboardSidebar() {
    return (
        <div className="hidden md:flex md:flex-shrink-0 relative z-10">
            <div className="flex flex-col w-64 border-r border-gray-200 bg-white/80 backdrop-blur-sm">
                <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div className="flex items-center flex-shrink-0 px-4">
                        <RocketLaunchIcon className="h-8 w-8 text-primary-600 mr-2" />
                        <h1 className="text-xl font-bold text-primary-600">StackForge</h1>
                    </div>

                    {/* Sidebar navigation */}
                    <nav className="mt-8 flex-1 px-2 space-y-2">
                        <SidebarLink to="/dashboard" icon={<HomeIcon className="h-5 w-5" />}>
                            Dashboard
                        </SidebarLink>
                        <SidebarLink to="/projects" icon={<FolderIcon className="h-5 w-5" />}>
                            My Projects
                        </SidebarLink>
                        <SidebarLink to="/templates" icon={<StarIcon className="h-5 w-5" />}>
                            Templates
                        </SidebarLink>
                        <SidebarLink to="/settings" icon={<CogIcon className="h-5 w-5" />}>
                            Settings
                        </SidebarLink>
                    </nav>

                    {/* Sidebar illustration */}
                    <div className="px-4 mt-auto mb-6">
                        <div className="relative h-32">
                            <Image
                                src="/sidebar-illustration.svg"
                                alt="Dashboard illustration"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <p className="text-xs text-center text-gray-500 mt-2">
                            Your boilerplate journey starts here
                        </p>
                    </div>
                </div>

                <UserProfileMini />
            </div>
        </div>
    );
}