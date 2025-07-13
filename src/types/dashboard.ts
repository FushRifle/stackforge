export type Project = {
    id: string;
    name: string;
    lastModified: Date;
    framework: string;
    starred: boolean;
};

export type ActivityItem = {
    id: string;
    type: 'generated' | 'modified' | 'downloaded';
    projectName: string;
    timestamp: Date;
};

export type QuickAction = {
    icon: string;
    label: string;
    action: () => void;
};