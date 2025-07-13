'use client';
import { useState } from 'react';
import type { Project } from '@/types/dashboard';
import ProjectCard from '@/components/dashboard/Projects/ProjectCard';
import Button from '@/components//ui/Button';

const initialProjects: Project[] = [
    {
        id: '1',
        name: 'E-commerce Store',
        lastModified: new Date('2023-05-15'),
        framework: 'Next.js + Tailwind',
        starred: true
    },
    {
        id: '2',
        name: 'Portfolio Site',
        lastModified: new Date('2023-05-10'),
        framework: 'React + CSS Modules',
        starred: false
    },
    {
        id: '3',
        name: 'Admin Dashboard',
        lastModified: new Date('2023-05-01'),
        framework: 'Next.js + Tailwind',
        starred: true
    }
];

export default function ProjectList() {
    const [projects, setProjects] = useState<Project[]>(initialProjects);

    const toggleStar = (id: string) => {
        setProjects(projects.map(project =>
            project.id === id ? { ...project, starred: !project.starred } : project
        ));
    };

    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">My Projects</h2>
                <Button variant="primary" size="sm">
                    New Project
                </Button>
            </div>

            <div className="divide-y divide-gray-200">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onStarToggle={toggleStar}
                    />
                ))}
            </div>
        </div>
    );
}