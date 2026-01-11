'use client';

import { FeatureCard } from '@/components/feature-card';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import {
    Award,
    BookOpen,
    CheckCircle,
    Clock,
    MessageCircle,
    TrendingUp,
    Trophy,
    Zap
} from 'lucide-react';
import Link from 'next/link';

export default function HighSchoolPage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('highSchool.heroTitle')}
                subtitle={t('highSchool.heroSubtitle')}
                description={t('highSchool.heroDesc')}
                primaryCta={{ text: t('highSchool.ctaButton'), href: '/register' }}
                secondaryCta={{ text: t('university.ctaExplore'), href: '#features' }}
                gradient="bg-gradient-to-b from-blue-500/10 to-transparent"
            />

            {/* Key Features Section */}
            <section id="features" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            {t('highSchool.featuresTitle')}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {t('highSchool.featuresSubtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            title={t('highSchool.features.homeworkTitle')}
                            description={t('highSchool.features.homeworkDesc')}
                            iconName="Brain"
                            gradient="bg-gradient-to-br from-blue-500/20 to-blue-600/10"
                        />

                        <FeatureCard
                            title={t('highSchool.features.quizTitle')}
                            description={t('highSchool.features.quizDesc')}
                            iconName="Target"
                            gradient="bg-gradient-to-br from-purple-500/20 to-purple-600/10"
                        />

                        <FeatureCard
                            title={t('highSchool.features.planTitle')}
                            description={t('highSchool.features.planDesc')}
                            iconName="Calendar"
                            gradient="bg-gradient-to-br from-pink-500/20 to-pink-600/10"
                        />

                        <FeatureCard
                            title={t('highSchool.features.pomodoroTitle')}
                            description={t('highSchool.features.pomodoroDesc')}
                            iconName="Clock"
                            gradient="bg-gradient-to-br from-orange-500/20 to-orange-600/10"
                        />

                        <FeatureCard
                            title={t('highSchool.features.studyGroupTitle')}
                            description={t('highSchool.features.studyGroupDesc')}
                            iconName="Users"
                            gradient="bg-gradient-to-br from-green-500/20 to-green-600/10"
                        />

                        <FeatureCard
                            title={t('highSchool.features.wellnessTitle')}
                            description={t('highSchool.features.wellnessDesc')}
                            iconName="Trophy"
                            gradient="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10"
                        />
                    </div>
                </div>
            </section>

            {/* Study Techniques Section */}
            <section className="py-20 px-6 bg-blue-500/5 backdrop-blur-sm border-y border-border/50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            {t('highSchool.techTitle')}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {t('highSchool.techSubtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-blue-500/10 mb-4">
                                <Clock className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{t('highSchool.pomodoroTitle')}</h3>
                            <p className="text-muted-foreground mb-4">
                                {t('highSchool.pomodoroDesc')}
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{t('highSchool.features.pomodoroTimer')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{t('highSchool.features.trackSessions')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{t('highSchool.features.earnXP')}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-purple-500/10 mb-4">
                                <MessageCircle className="w-8 h-8 text-purple-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{t('highSchool.feynmanTitle')}</h3>
                            <p className="text-muted-foreground mb-4">
                                {t('highSchool.feynmanDesc')}
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{t('highSchool.features.aiFeedback')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{t('highSchool.features.improveClarity')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{t('highSchool.features.retentionBoost')}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-pink-500/10 mb-4">
                                <BookOpen className="w-8 h-8 text-pink-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{t('highSchool.blurtingTitle')}</h3>
                            <p className="text-muted-foreground mb-4">
                                {t('highSchool.blurtingDesc')}
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{t('highSchool.features.timedSessions')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{t('highSchool.features.sourceCompare')}</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{t('highSchool.features.gapTracking')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gamification Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                {t('highSchool.rpg.title')}
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                {t('highSchool.rpg.desc')}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Zap className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{t('highSchool.rpg.earnTitle')}</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {t('highSchool.rpg.earnDesc')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{t('highSchool.rpg.unlockBadges')}</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {t('highSchool.rpg.badgesDesc')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{t('highSchool.rpg.leaderboardTitle')}</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {t('highSchool.rpg.leaderboardDesc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                                <div className="text-center mb-6">
                                    <div className="inline-block p-4 rounded-full bg-primary/20 mb-4">
                                        <Trophy className="w-12 h-12 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-2">{t('highSchool.rpg.level')} 12</h3>
                                    <p className="text-muted-foreground">{t('highSchool.rpg.warrior')}</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                                        <span className="text-sm">{t('highSchool.rpg.totalXP')}</span>
                                        <span className="font-mono font-bold text-primary">2,450</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                                        <span className="text-sm">{t('highSchool.rpg.streak')}</span>
                                        <span className="font-mono font-bold text-primary">7 {t('highSchool.rpg.days')}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 rounded-lg bg-card/50">
                                        <span className="text-sm">{t('highSchool.rpg.earnedBadges')}</span>
                                        <span className="font-mono font-bold text-primary">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-blue-500/5 backdrop-blur-sm border-t border-border/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('highSchool.ctaTitle')}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        {t('highSchool.ctaDesc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register">
                            <Button size="lg" className="text-lg px-8 py-6">
                                {t('highSchool.ctaButton')}
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                {t('highSchool.ctaHome')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
