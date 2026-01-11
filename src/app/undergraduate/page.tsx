'use client';

import { FeatureCard } from '@/components/feature-card';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import {
    Calendar,
    FileText,
    MessageCircle,
    Share2,
    Star,
    TrendingUp,
    Users,
    Video
} from 'lucide-react';
import Link from 'next/link';

export default function UndergraduatePage() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title={t('university.heroTitle')}
                subtitle={t('university.heroSubtitle')}
                description={t('university.heroDesc')}
                primaryCta={{ text: t('university.ctaButton'), href: '/register' }}
                secondaryCta={{ text: t('university.ctaExplore'), href: '#features' }}
                gradient="bg-gradient-to-b from-purple-500/10 to-transparent"
            />

            {/* Key Features Section */}
            <section id="features" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            {t('university.featuresTitle')}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {t('university.featuresSubtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            title={t('university.features.courseTitle')}
                            description={t('university.features.courseDesc')}
                            iconName="BookOpen"
                            gradient="bg-gradient-to-br from-purple-500/20 to-purple-600/10"
                        />

                        <FeatureCard
                            title={t('university.features.aiTitle')}
                            description={t('university.features.aiDesc')}
                            iconName="Brain"
                            gradient="bg-gradient-to-br from-blue-500/20 to-blue-600/10"
                        />

                        <FeatureCard
                            title={t('university.features.groupTitle')}
                            description={t('university.features.groupDesc')}
                            iconName="Users"
                            gradient="bg-gradient-to-br from-pink-500/20 to-pink-600/10"
                        />

                        <FeatureCard
                            title={t('university.features.marketTitle')}
                            description={t('university.features.marketDesc')}
                            iconName="Share2"
                            gradient="bg-gradient-to-br from-orange-500/20 to-orange-600/10"
                        />

                        <FeatureCard
                            title={t('university.features.libraryTitle')}
                            description={t('university.features.libraryDesc')}
                            iconName="Database"
                            gradient="bg-gradient-to-br from-green-500/20 to-green-600/10"
                        />

                        <FeatureCard
                            title={t('university.features.careerTitle')}
                            description={t('university.features.careerDesc')}
                            iconName="Briefcase"
                            gradient="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10"
                        />
                    </div>
                </div>
            </section>

            {/* Collaboration Section */}
            <section className="py-20 px-6 bg-purple-500/5 backdrop-blur-sm border-y border-border/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20">
                                <h3 className="text-2xl font-bold mb-6">{t('university.collab.activeGroups')}</h3>
                                <div className="space-y-4">
                                    <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-bold">Organic Chemistry 301</h4>
                                            <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                                                12 {t('university.collab.online')}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Preparing for midterm exam - Chapter 5-8
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <Users className="w-3 h-3" />
                                            <span>24 {t('university.collab.members')}</span>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-bold">Data Structures & Algorithms</h4>
                                            <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                                                8 {t('university.collab.online')}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Working on binary tree assignment
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <Users className="w-3 h-3" />
                                            <span>18 {t('university.collab.members')}</span>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-bold">Modern European History</h4>
                                            <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                                                Offline
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Essay peer review session
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <Users className="w-3 h-3" />
                                            <span>15 {t('university.collab.members')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                {t('university.collabTitle')}
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                {t('university.collabSubtitle')}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <MessageCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{t('university.collab.chatTitle')}</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {t('university.collab.chatDesc')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Share2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{t('university.collab.shareTitle')}</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {t('university.collab.shareDesc')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Calendar className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{t('university.collab.sessionTitle')}</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {t('university.collab.sessionDesc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resource Management Section */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            {t('university.resourceTitle')}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {t('university.resourceSubtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-purple-500/10 mb-4">
                                <FileText className="w-8 h-8 text-purple-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{t('university.resources.pdfTitle')}</h3>
                            <p className="text-muted-foreground mb-4">
                                {t('university.resources.pdfDesc')}
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-primary" />
                                    <span>{t('university.resources.extract')}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-primary" />
                                    <span>{t('university.resources.summary')}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-primary" />
                                    <span>{t('university.resources.search')}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-blue-500/10 mb-4">
                                <Video className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{t('university.resources.vidTitle')}</h3>
                            <p className="text-muted-foreground mb-4">
                                {t('university.resources.vidDesc')}
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-primary" />
                                    <span>{t('university.resources.metadata')}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-primary" />
                                    <span>{t('university.resources.transcript')}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Star className="w-4 h-4 text-primary" />
                                    <span>{t('university.resources.concepts')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notes Marketplace Section */}
            <section className="py-20 px-6 bg-purple-500/5 backdrop-blur-sm border-t border-border/50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                {t('university.notesTitle')}
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                {t('university.notesSubtitle')}
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Share2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{t('university.notes.shareTitle')}</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {t('university.notes.shareDesc')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Star className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{t('university.notes.rateTitle')}</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {t('university.notes.rateDesc')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{t('university.notes.topicsTitle')}</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {t('university.notes.topicsDesc')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20">
                                <h3 className="text-xl font-bold mb-4">{t('university.notes.trending')}</h3>
                                <div className="space-y-3">
                                    <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-bold text-sm">Calculus II - Integration Techniques</h4>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                                <span className="text-xs font-mono">4.9</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-muted-foreground mb-2">
                                            Comprehensive notes with examples
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>1.2k {t('university.notes.views')}</span>
                                            <span>•</span>
                                            <span>245 {t('university.notes.downloads')}</span>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-bold text-sm">Organic Chemistry - Reaction Mechanisms</h4>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                                <span className="text-xs font-mono">4.8</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-muted-foreground mb-2">
                                            Visual diagrams and step-by-step guides
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>980 {t('university.notes.views')}</span>
                                            <span>•</span>
                                            <span>189 {t('university.notes.downloads')}</span>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-bold text-sm">Data Structures - Trees & Graphs</h4>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                                <span className="text-xs font-mono">4.7</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-muted-foreground mb-2">
                                            Code examples in Python and Java
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <span>756 {t('university.notes.views')}</span>
                                            <span>•</span>
                                            <span>142 {t('university.notes.downloads')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('university.ctaTitle')}
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        {t('university.ctaDesc')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register">
                            <Button size="lg" className="text-lg px-8 py-6">
                                {t('university.ctaButton')}
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                {t('university.ctaHome')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
