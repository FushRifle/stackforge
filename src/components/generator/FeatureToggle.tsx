import type { FeatureToggleProps } from '@/types';

export default function FeatureToggle({
    name,
    label,
    checked,
    onChange,
    disabled = false
}: FeatureToggleProps) {
    return (
        <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
                className="h-4 w-4"
            />
            <span className={disabled ? 'text-gray-400' : ''}>{label}</span>
        </label>
    );
}