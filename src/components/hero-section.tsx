import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroSectionProps {
    title: string;
    subtitle: string;
    description?: string;
    primaryCta?: {
        text: string;
        href: string;
    };
    secondaryCta?: {
        text: string;
        href: string;
    };
    gradient?: string;
}

export function HeroSection({
    title,
    subtitle,
    description,
    primaryCta,
    secondaryCta,
    gradient = 'bg-gradient-to-br from-primary/10 via-background to-primary/5',
}: HeroSectionProps) {
    return (
        <section className={`relative overflow-hidden ${gradient} py-20 px-6`}>
            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Subtitle badge */}
                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
                    {subtitle}
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in-up">
                    {title}
                </h1>

                {/* Description */}
                {description && (
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        {description}
                    </p>
                )}

                {/* CTAs */}
                {(primaryCta || secondaryCta) && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
                        {primaryCta && (
                            <Link href={primaryCta.href}>
                                <Button size="lg" className="text-lg px-8 py-6">
                                    {primaryCta.text}
                                </Button>
                            </Link>
                        )}
                        {secondaryCta && (
                            <Link href={secondaryCta.href}>
                                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                    {secondaryCta.text}
                                </Button>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
