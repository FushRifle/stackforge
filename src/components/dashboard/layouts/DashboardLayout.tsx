import { ReactNode } from 'react';
import Head from 'next/head';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

type DashboardLayoutProps = {
    children: ReactNode;
    title?: string;
};

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
    return (
        <>
            <Head>
                <title>{title ? `${title} | StackForge` : 'StackForge Dashboard'}</title>
            </Head>

            <div className="flex h-screen bg-gradient-to-br from-primary-50 to-white">
                {/* Gradient background illustration */}
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-transparent to-primary-50 opacity-30" />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-transparent to-white opacity-70" />
                </div>

                <DashboardSidebar />

                <div className="flex-1 flex flex-col overflow-hidden relative">
                    <DashboardHeader />

                    <main className="flex-1 overflow-y-auto p-6">
                        <div className="max-w-7xl mx-auto">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}