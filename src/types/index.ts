export type ProjectConfig = {
    framework: 'nextjs' | 'react' | 'vue';
    styling: ('tailwind' | 'css-modules' | 'styled-components')[];
    stateManagement: ('zustand' | 'redux' | 'context')[];
    features: ('eslint' | 'prettier' | 'jest' | 'storybook' | 'husky')[];
};

export type GeneratorModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export type ConfigSectionProps = {
    title: string;
    children: React.ReactNode;
};

export type FrameworkSelectProps = {
    value: ProjectConfig['framework'];
    onChange: (value: ProjectConfig['framework']) => void;
};

export type FeatureToggleProps = {
    name: string;
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
};