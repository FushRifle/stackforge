'use client';

import type { QuickAction } from '@/types/dashboard';
import Button from '../ui/Button';

const actions: QuickAction[] = [
    {
        icon: '⚡',
        label: 'Generate New',
        action: () => console.log('Generate new project')
    },
    {
        icon: '📁',
        label: 'Import Project',
        action: () => console.log('Import project')
    },
    {
        icon: '🔗',
        label: 'Connect GitHub',
        action: () => console.log('Connect GitHub')
    }
];

export default function QuickActions() {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4">
                {actions.map((action, index) => (
                    <button
                        key={index}
                        onClick={action.action}
                        className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-2xl mb-2">{action.icon}</span>
                        <span className="text-sm font-medium">{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
