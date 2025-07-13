import type { FrameworkSelectProps } from '@/types';
import ConfigSection from './ConfigSection';
const FRAMEWORKS = [
    { value: 'nextjs', label: 'Next.js' },
    { value: 'react', label: 'React', disabled: true },
    { value: 'vue', label: 'Vue', disabled: true }
];

export default function FrameworkSelect({ value, onChange }: FrameworkSelectProps) {
    return (
        <ConfigSection title="Framework">
            <div className="space-y-2">
                {FRAMEWORKS.map((framework) => (
                    <label key={framework.value} className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="framework"
                            value={framework.value}
                            checked={value === framework.value}
                            onChange={() => onChange(framework.value as any)}
                            disabled={framework.disabled}
                            className="h-4 w-4"
                        />
                        <span className={framework.disabled ? 'text-gray-400' : ''}>
                            {framework.label}
                            {framework.disabled && ' (coming soon)'}
                        </span>
                    </label>
                ))}
            </div>
        </ConfigSection>
    );
}