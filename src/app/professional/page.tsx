import { FeatureCard } from '@/components/feature-card';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import {
    Award,
    BarChart,
    BookOpen,
    Brain,
    Calendar,
    CheckCircle,
    Heart,
    Target,
    TrendingUp,
    Zap
} from 'lucide-react';
import Link from 'next/link';

export default function ProfessionalPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title="Lifelong Learning for Professionals"
                subtitle="Ages 26+ · Professional Learners"
                description="Advance your career, build new skills, and maintain work-life balance with AI-powered tools designed for working professionals."
                primaryCta={{ text: 'Start Learning Today', href: '/register' }}
                secondaryCta={{ text: 'View Features', href: '#features' }}
                gradient="bg-gradient-to-br from-orange-500/10 via-background to-orange-600/5"
            />

            {/* Key Features Section */}
            <section id="features" className="py-20 px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Professional Development Tools
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Everything you need to grow your career while maintaining balance
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            title="Skill Development"
                            description="Learn new technologies, languages, and professional skills. AI creates personalized learning paths based on your career goals."
                            iconName="Brain"
                            gradient="bg-gradient-to-br from-orange-500/20 to-orange-600/10"
                        />

                        <FeatureCard
                            title="Certification Tracking"
                            description="Manage professional certifications, track renewal dates, and get study recommendations for upcoming exams."
                            iconName="Award"
                            gradient="bg-gradient-to-br from-blue-500/20 to-blue-600/10"
                        />

                        <FeatureCard
                            title="Career Planning"
                            description="Set career goals, track progress, and get AI recommendations for skills to learn and opportunities to pursue."
                            iconName="Target"
                            gradient="bg-gradient-to-br from-purple-500/20 to-purple-600/10"
                        />

                        <FeatureCard
                            title="Flexible Scheduling"
                            description="AI adapts to your work schedule, creating study plans that fit around meetings, deadlines, and personal commitments."
                            iconName="Calendar"
                            gradient="bg-gradient-to-br from-pink-500/20 to-pink-600/10"
                        />

                        <FeatureCard
                            title="Wellness Integration"
                            description="Track stress, sleep, and work-life balance. Get suggestions for breaks, exercise, and mindfulness practices."
                            iconName="Heart"
                            gradient="bg-gradient-to-br from-green-500/20 to-green-600/10"
                        />

                        <FeatureCard
                            title="Professional Network"
                            description="Connect with other professionals, join industry study groups, and share knowledge in your field."
                            iconName="Users"
                            gradient="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10"
                        />
                    </div>
                </div>
            </section>

            {/* Skill Building Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-orange-500/5 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Build Skills That Matter
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Whether you're learning a new programming language, preparing for a certification, or exploring a new field, StudyFlow adapts to your professional goals.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Personalized Learning Paths</h3>
                                        <p className="text-muted-foreground text-sm">
                                            AI creates custom curricula based on your current skills, career goals, and available time.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Zap className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Microlearning Sessions</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Learn in short, focused sessions that fit into your busy schedule—even 15 minutes makes progress.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <BarChart className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Progress Analytics</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Track your learning journey with detailed analytics and celebrate milestones along the way.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20">
                                <h3 className="text-2xl font-bold mb-6">Your Learning Path</h3>
                                <div className="space-y-4">
                                    <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
                                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                                        <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-sm">Python Fundamentals</h4>
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            </div>
                                            <p className="text-xs text-muted-foreground">Completed 2 weeks ago</p>
                                        </div>
                                    </div>

                                    <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
                                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary animate-pulse" />
                                        <div className="p-4 rounded-lg bg-card/50 backdrop-blur border-2 border-primary/50">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-sm">Data Structures & Algorithms</h4>
                                                <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                                                    In Progress
                                                </span>
                                            </div>
                                            <p className="text-xs text-muted-foreground mb-2">65% Complete</p>
                                            <div className="w-full bg-muted rounded-full h-1.5">
                                                <div className="bg-primary h-1.5 rounded-full" style={{ width: '65%' }} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative pl-8 pb-8 border-l-2 border-dashed border-muted">
                                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted" />
                                        <div className="p-4 rounded-lg bg-card/50 backdrop-blur opacity-60">
                                            <h4 className="font-bold text-sm mb-1">Machine Learning Basics</h4>
                                            <p className="text-xs text-muted-foreground">Starts in 3 weeks</p>
                                        </div>
                                    </div>

                                    <div className="relative pl-8">
                                        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted" />
                                        <div className="p-4 rounded-lg bg-card/50 backdrop-blur opacity-60">
                                            <h4 className="font-bold text-sm mb-1">AWS Cloud Practitioner</h4>
                                            <p className="text-xs text-muted-foreground">Certification goal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work-Life Balance Section */}
            <section className="py-20 px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Maintain Work-Life Balance
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Learning shouldn't come at the cost of your wellbeing
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-green-500/10 mb-4">
                                <Heart className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Wellness Tracking</h3>
                            <p className="text-muted-foreground mb-4">
                                Monitor stress levels, sleep quality, and mood. AI suggests breaks and adjusts your study plan when you need rest.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Daily wellness check-ins</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Stress level monitoring</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Smart break reminders</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-blue-500/10 mb-4">
                                <Calendar className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Flexible Scheduling</h3>
                            <p className="text-muted-foreground mb-4">
                                Study plans that adapt to your work calendar, family commitments, and personal time. Learn at your own pace.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Calendar integration</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Adaptive study sessions</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Weekend vs weekday modes</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-purple-500/10 mb-4">
                                <BookOpen className="w-8 h-8 text-purple-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Habit Challenges</h3>
                            <p className="text-muted-foreground mb-4">
                                Join 21-day challenges to build better habits: morning routines, exercise, meditation, or consistent learning.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Curated habit programs</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Community support</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span>Progress tracking</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-orange-500/5 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/20">
                                <h3 className="text-2xl font-bold mb-6">Your Certifications</h3>
                                <div className="space-y-4">
                                    <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h4 className="font-bold text-sm">AWS Solutions Architect</h4>
                                                <p className="text-xs text-muted-foreground">Expires: Dec 2026</p>
                                            </div>
                                            <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500">
                                                Active
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h4 className="font-bold text-sm">PMP Certification</h4>
                                                <p className="text-xs text-muted-foreground">Exam in 45 days</p>
                                            </div>
                                            <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-500">
                                                Studying
                                            </span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-1.5">
                                            <div className="bg-primary h-1.5 rounded-full" style={{ width: '72%' }} />
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-2">72% prepared</p>
                                    </div>

                                    <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h4 className="font-bold text-sm">Google Cloud Professional</h4>
                                                <p className="text-xs text-muted-foreground">Planned for Q2 2026</p>
                                            </div>
                                            <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                                                Planned
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Track Your Professional Growth
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Manage certifications, track renewal dates, and get AI-powered study plans to help you pass exams on the first try.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Certification Management</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Track all your professional certifications, renewal dates, and continuing education requirements.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Brain className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">AI Study Plans</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Get personalized study schedules based on exam dates, your available time, and learning style.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Career Impact</h3>
                                        <p className="text-muted-foreground text-sm">
                                            See how certifications align with your career goals and get recommendations for next steps.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-background">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Advance Your Career?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Join thousands of professionals using StudyFlow to build skills, earn certifications, and achieve their career goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register">
                            <Button size="lg" className="text-lg px-8 py-6">
                                Start Learning Today
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
