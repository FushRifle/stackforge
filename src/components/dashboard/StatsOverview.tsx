export default function StatsOverview() {
    const stats = [
        { name: 'Total Projects', value: '12', change: '+2', changeType: 'positive' },
        { name: 'Templates', value: '5', change: '+1', changeType: 'positive' },
        { name: 'Active Users', value: '3', change: '0', changeType: 'neutral' },
        { name: 'Storage Used', value: '45%', change: '-5%', changeType: 'negative' }
    ];

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Overview</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {stats.map((stat, index) => (
                    <div key={index} className="px-6 py-4">
                        <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                        <div className="mt-2 flex items-baseline">
                            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                            {stat.change !== '0' && (
                                <span className={`ml-2 text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' :
                                    stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
                                    }`}>
                                    {stat.change}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}