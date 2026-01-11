'use client';

import { useLanguage } from '@/contexts/language-context';
import * as Icons from 'lucide-react';
import Link from 'next/link';

interface AgeSelectorCardProps {
    title: string;
    ageRange: string;
    description: string;
    iconName: keyof typeof Icons;
    href: string;
    gradient: string;
}

export function AgeSelectorCard({
    title,
    ageRange,
    description,
    iconName,
    href,
    gradient,
}: AgeSelectorCardProps) {
    const { t } = useLanguage();
    const Icon = Icons[iconName] as Icons.LucideIcon;

    return (
        <Link href={href}>
            <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/50">
                {/* Gradient overlay on hover */}
                <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${gradient}`}
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl mb-4 ${gradient} bg-opacity-10`}>
                        <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Age Range Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono mb-3">
                        {ageRange}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                        {description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-6 flex items-center text-primary font-medium">
                        <span className="mr-2">{t('common.getStarted')}</span>
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            </div>
        </Link>
    );
}
