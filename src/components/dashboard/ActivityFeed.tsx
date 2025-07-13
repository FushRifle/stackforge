// components/dashboard/ActivityFeed.tsx
import type { ActivityItem } from '@/types/dashboard';
import ActivityItems from '@/components/dashboard/Activity/ActivityItems';

const recentActivities: ActivityItem[] = [
    {
        id: '1',
        type: 'generated',
        projectName: 'E-commerce Store',
        timestamp: new Date('2023-05-15T14:30:00')
    },
    {
        id: '2',
        type: 'modified',
        projectName: 'Portfolio Site',
        timestamp: new Date('2023-05-10T09:15:00')
    },
    {
        id: '3',
        type: 'downloaded',
        projectName: 'Admin Dashboard',
        timestamp: new Date('2023-05-01T16:45:00')
    }
];

export default function ActivityFeed() {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
            </div>

            <div className="divide-y divide-gray-200">
                {recentActivities.map(activity => (
                    <ActivityItems key={activity.id} activity={activity} />
                ))}
            </div>

            <div className="px-6 py-4 border-t border-gray-200">
                <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                    View all activity
                </button>
            </div>
        </div>
    );
}