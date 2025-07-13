import DashboardLayout from '@/components/dashboard/layouts/DashboardLayout';
import ProjectList from '@/components/dashboard/ProjectList';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import QuickActions from '@/components/dashboard/QuickActions';
import StatsOverview from '@/components/dashboard/StatsOverview';

export default function DashboardHome() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Stats Overview */}
                <StatsOverview />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Quick Actions */}
                        <QuickActions />

                        {/* Project List */}
                        <ProjectList />
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Activity Feed */}
                        <ActivityFeed />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}