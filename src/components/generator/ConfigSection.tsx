// components/generator/ConfigSection.tsx
import type { ConfigSectionProps } from '@/types';

export default function ConfigSection({ title, children }: ConfigSectionProps) {
    return (
        <div className="space-y-4 mb-8">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="space-y-3 pl-2">
                {children}
            </div>
        </div>
    );
}