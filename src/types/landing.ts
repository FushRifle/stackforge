// components/sections/types.ts
export type HeroProps = {
    onGenerateClick: () => void;
};

export type FeatureItem = {
    icon: string;
    color: string;
    title: string;
    description: string;
};

export type PricingPlan = {
    name: string;
    price: string;
    features: string[];
    cta: string;
    featured?: boolean;
};