// components/generator/GeneratorModal.tsx
import { useState } from 'react';
import ConfigSection from './ConfigSection';
import FrameworkSelect from './FrameworkSelect';
import FeatureToggle from './FeatureToggle';
import type { ProjectConfig, GeneratorModalProps } from '@/types';

export default function GeneratorModal({ isOpen, onClose }: GeneratorModalProps) {
    const [config, setConfig] = useState<ProjectConfig>({
        framework: 'nextjs',
        styling: ['tailwind'],
        stateManagement: [],
        features: ['eslint']
    });

    const handleConfigChange = <T extends keyof ProjectConfig>(
        key: T,
        value: ProjectConfig[T]
    ) => {
        setConfig(prev => ({
            ...prev,
            [key]: value
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Configure Your Project</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            ✕
                        </button>
                    </div>

                    {/* Framework Selection */}
                    <FrameworkSelect
                        value={config.framework}
                        onChange={(value) => handleConfigChange('framework', value)}
                    />

                    {/* Styling Options */}
                    <ConfigSection title="Styling">
                        <FeatureToggle
                            name="tailwind"
                            label="Tailwind CSS"
                            checked={config.styling.includes('tailwind')}
                            onChange={(checked) =>
                                handleConfigChange(
                                    'styling',
                                    checked
                                        ? [...config.styling, 'tailwind']
                                        : config.styling.filter(item => item !== 'tailwind')
                                )
                            }
                        />
                        <FeatureToggle
                            name="css-modules"
                            label="CSS Modules"
                            checked={config.styling.includes('css-modules')}
                            onChange={(checked) =>
                                handleConfigChange(
                                    'styling',
                                    checked
                                        ? [...config.styling, 'css-modules']
                                        : config.styling.filter(item => item !== 'css-modules')
                                )
                            }
                        />
                    </ConfigSection>

                    {/* State Management */}
                    <ConfigSection title="State Management">
                        <FeatureToggle
                            name="zustand"
                            label="Zustand"
                            checked={config.stateManagement.includes('zustand')}
                            onChange={(checked) =>
                                handleConfigChange(
                                    'stateManagement',
                                    checked
                                        ? [...config.stateManagement, 'zustand']
                                        : config.stateManagement.filter(item => item !== 'zustand')
                                )
                            }
                        />
                        <FeatureToggle
                            name="redux"
                            label="Redux Toolkit"
                            checked={config.stateManagement.includes('redux')}
                            onChange={(checked) =>
                                handleConfigChange(
                                    'stateManagement',
                                    checked
                                        ? [...config.stateManagement, 'redux']
                                        : config.stateManagement.filter(item => item !== 'redux')
                                )
                            }
                        />
                    </ConfigSection>

                    {/* Additional Features */}
                    <ConfigSection title="Additional Features">
                        <div className="grid grid-cols-2 gap-4">
                            <FeatureToggle
                                name="eslint"
                                label="ESLint"
                                checked={config.features.includes('eslint')}
                                onChange={(checked) =>
                                    handleConfigChange(
                                        'features',
                                        checked
                                            ? [...config.features, 'eslint']
                                            : config.features.filter(item => item !== 'eslint')
                                    )
                                }
                            />
                            <FeatureToggle
                                name="prettier"
                                label="Prettier"
                                checked={config.features.includes('prettier')}
                                onChange={(checked) =>
                                    handleConfigChange(
                                        'features',
                                        checked
                                            ? [...config.features, 'prettier']
                                            : config.features.filter(item => item !== 'prettier')
                                    )
                                }
                            />
                            {/* Add other features similarly */}
                        </div>
                    </ConfigSection>

                    {/* Footer Actions */}
                    <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end space-x-4">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 border border-gray-300 rounded-md"
                        >
                            Cancel
                        </button>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            Generate & Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}