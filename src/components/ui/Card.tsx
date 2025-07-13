import { ReactNode } from 'react';

type CardProps = {
    children: ReactNode;
    className?: string;
};

export default function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition ${className}`}>
            {children}
        </div>
    );
}