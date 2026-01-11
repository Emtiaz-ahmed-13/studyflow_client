'use client';

import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern';
import { cn } from '@/lib/utils';

export function BackgroundPattern() {
    return (
        <div className="fixed inset-0 h-full w-full -z-10 overflow-hidden pointer-events-none">
            {/* Base Grid */}
            <AnimatedGridPattern
                numSquares={50}
                maxOpacity={0.15}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "h-full w-full",
                    "[mask-image:radial-gradient(ellipse_at_center,white_80%,transparent)]",
                )}
            />

            {/* Glow Blobs */}
            <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen dark:mix-blend-soft-light" />
            <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] animate-float mix-blend-screen dark:mix-blend-soft-light" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[160px] animate-pulse-slow mix-blend-screen dark:mix-blend-soft-light" />
        </div>
    );
}
