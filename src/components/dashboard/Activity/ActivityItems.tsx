// components/dashboard/ActivityItem.tsx
import type { ActivityItem } from '@/types/dashboard';
import { format } from 'date-fns';

export default function ActivityItems({ activity }: { activity: ActivityItem }) {
    const getActivityIcon = () => {
        switch (activity.type) {
            case 'generated': return '⚡';
            case 'modified': return '✏️';
            case 'downloaded': return '📥';
            default: return '🔹';
        }
    };

    return (
        <div className="px-6 py-4 flex items-start">
            <div className="flex-shrink-0 mr-3 text-lg">{getActivityIcon()}</div>
            <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">
                    {activity.projectName}
                </p>
                <p className="text-sm text-gray-500">
                    {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                    {format(activity.timestamp, 'MMM d, yyyy h:mm a')}
                </p>
            </div>
        </div>
    );
}