import * as Icons from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    iconName: keyof typeof Icons;
    gradient?: string;
}

export function FeatureCard({
    title,
    description,
    iconName,
    gradient = 'bg-gradient-to-br from-primary/20 to-primary/5',
}: FeatureCardProps) {
    const Icon = Icons[iconName] as Icons.LucideIcon;

    return (
        <div className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30">
            {/* Gradient background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${gradient}`} />

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2">{title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
