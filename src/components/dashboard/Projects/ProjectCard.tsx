// components/dashboard/ProjectCard.tsx
import type { Project } from '@/types/dashboard';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { format } from 'date-fns';

export default function ProjectCard({
    project,
    onStarToggle
}: {
    project: Project;
    onStarToggle: (id: string) => void;
}) {
    return (
        <div className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
            <div className="flex items-center">
                <button
                    onClick={() => onStarToggle(project.id)}
                    className="mr-3 text-gray-400 hover:text-yellow-500"
                >
                    {project.starred ? (
                        <StarSolid className="h-5 w-5 text-yellow-400" />
                    ) : (
                        <StarOutline className="h-5 w-5" />
                    )}
                </button>
                <div>
                    <h3 className="text-sm font-medium text-gray-900">{project.name}</h3>
                    <p className="text-xs text-gray-500">{project.framework}</p>
                </div>
            </div>
            <div className="text-xs text-gray-400">
                {format(project.lastModified, 'MMM d, yyyy')}
            </div>
        </div>
    );
}