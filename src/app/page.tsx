'use client';

import { AgeSelectorCard } from '@/components/age-selector-card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';

import { Sparkles, Target, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Simplified background to allow global pattern to shine through */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>{t('home.heroBadge')}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in-up">
            {t('home.heroTitle')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            {t('home.heroSubtitle')}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 animate-fade-in-up delay-300">
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
              <div className="text-3xl font-bold text-primary font-mono">{t('home.statsAi')}</div>
              <div className="text-sm text-muted-foreground">{t('common.aiDriven')}</div>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
              <div className="text-3xl font-bold text-primary font-mono">{t('home.statsSupport')}</div>
              <div className="text-sm text-muted-foreground">{t('common.support')}</div>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
              <div className="text-3xl font-bold text-primary font-mono">{t('home.statsResources')}</div>
              <div className="text-sm text-muted-foreground">{t('common.resource')}</div>
            </div>
            <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
              <div className="text-3xl font-bold text-primary font-mono">{t('home.statsFree')}</div>
              <div className="text-sm text-muted-foreground">{t('common.free')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Selection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.ageSelectionTitle')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.ageSelectionSubtitle')}
            </p>
          </div>

          {/* Age Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AgeSelectorCard
              title={t('home.highSchoolTitle')}
              ageRange={t('home.highSchoolAge')}
              description={t('home.highSchoolDesc')}
              iconName="BookOpen"
              href="/high-school"
              gradient="bg-gradient-to-br from-blue-500/20 to-blue-600/10"
            />

            <AgeSelectorCard
              title={t('home.universityTitle')}
              ageRange={t('home.universityAge')}
              description={t('home.universityDesc')}
              iconName="GraduationCap"
              href="/undergraduate"
              gradient="bg-gradient-to-br from-purple-500/20 to-purple-600/10"
            />
          </div>
        </div>
      </section>

      {/* Features Highlight Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.whyTitle')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('home.whySubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('home.featureAiTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('home.featureAiDesc')}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('home.featureGamifiedTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('home.featureGamifiedDesc')}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{t('home.featureWellnessTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('home.featureWellnessDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('home.ctaTitle')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('home.ctaSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="text-lg px-8 py-6">
                {t('home.ctaButton')}
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                {t('home.ctaLogin')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
