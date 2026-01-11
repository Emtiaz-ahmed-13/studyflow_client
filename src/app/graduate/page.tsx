import { FeatureCard } from '@/components/feature-card';
import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import {
    Award,
    Brain,
    Database,
    FileText,
    Lightbulb,
    Mic,
    Search,
    Target,
    TrendingUp,
    Users
} from 'lucide-react';
import Link from 'next/link';

export default function GraduatePage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <HeroSection
                title="Advance Your Research & Career"
                subtitle="Ages 22-26 · Graduate & Masters"
                description="Accelerate your research, master your thesis, and build your academic career with advanced AI tools designed for graduate students."
                primaryCta={{ text: 'Start Research Journey', href: '/register' }}
                secondaryCta={{ text: 'Explore Tools', href: '#features' }}
                gradient="bg-gradient-to-br from-pink-500/10 via-background to-pink-600/5"
            />

            {/* Key Features Section */}
            <section id="features" className="py-20 px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Advanced Research Tools
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Everything you need for graduate-level academic excellence
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            title="AI Voice Viva"
                            description="Practice oral exams with AI. Get real-time feedback on your answers, confidence, and presentation skills before the actual defense."
                            iconName="Mic"
                            gradient="bg-gradient-to-br from-pink-500/20 to-pink-600/10"
                        />

                        <FeatureCard
                            title="Thesis Support"
                            description="AI helps structure your thesis, suggests relevant literature, and provides feedback on your arguments and methodology."
                            iconName="FileText"
                            gradient="bg-gradient-to-br from-purple-500/20 to-purple-600/10"
                        />

                        <FeatureCard
                            title="Literature Review Assistant"
                            description="Automatically find, organize, and summarize relevant research papers. AI identifies gaps in current literature."
                            iconName="Search"
                            gradient="bg-gradient-to-br from-blue-500/20 to-blue-600/10"
                        />

                        <FeatureCard
                            title="Research Methodology"
                            description="Get AI guidance on research design, data analysis methods, and statistical techniques appropriate for your field."
                            iconName="Brain"
                            gradient="bg-gradient-to-br from-orange-500/20 to-orange-600/10"
                        />

                        <FeatureCard
                            title="Academic Writing"
                            description="Improve your academic writing with AI feedback on clarity, structure, and argumentation. Check citations and formatting."
                            iconName="BookOpen"
                            gradient="bg-gradient-to-br from-green-500/20 to-green-600/10"
                        />

                        <FeatureCard
                            title="Professional Networking"
                            description="Connect with researchers in your field, find collaboration opportunities, and track conference submissions."
                            iconName="Network"
                            gradient="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10"
                        />
                    </div>
                </div>
            </section>

            {/* AI Voice Viva Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-pink-500/5 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Master Your Oral Defense
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Practice your thesis defense with AI-powered mock vivas. Get detailed feedback on your answers, confidence level, and presentation skills.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Mic className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Voice-Based Interaction</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Answer questions verbally, just like in a real viva. AI analyzes your speech patterns and confidence.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Real-Time Feedback</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Get instant feedback on accuracy, clarity, and depth of your answers during the session.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Performance Analytics</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Detailed reports on your strengths, weaknesses, and areas for improvement after each session.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20">
                                <div className="text-center mb-6">
                                    <div className="inline-block p-4 rounded-full bg-pink-500/20 mb-4">
                                        <Mic className="w-12 h-12 text-pink-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Mock Viva Session</h3>
                                    <p className="text-muted-foreground">Practice makes perfect</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium">Confidence Score</span>
                                            <span className="text-lg font-bold text-primary font-mono">87%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full" style={{ width: '87%' }} />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium">Answer Accuracy</span>
                                            <span className="text-lg font-bold text-primary font-mono">92%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }} />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-lg bg-card/50 backdrop-blur">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium">Clarity & Structure</span>
                                            <span className="text-lg font-bold text-primary font-mono">85%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }} />
                                        </div>
                                    </div>
                                    <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                                        <p className="text-sm text-center">
                                            <span className="font-bold">Overall Grade:</span>{' '}
                                            <span className="text-primary font-mono">A-</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thesis & Research Section */}
            <section className="py-20 px-6 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Thesis & Dissertation Support
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            AI-powered tools to guide you through every stage of your research
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-pink-500/10 mb-4">
                                <Lightbulb className="w-8 h-8 text-pink-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Research Planning</h3>
                            <p className="text-muted-foreground mb-4">
                                AI helps you define research questions, design methodology, and create a realistic timeline for your thesis completion.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Generate research questions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Methodology recommendations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Timeline and milestone tracking</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-purple-500/10 mb-4">
                                <Database className="w-8 h-8 text-purple-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Literature Management</h3>
                            <p className="text-muted-foreground mb-4">
                                Organize thousands of papers, automatically extract citations, and identify key themes across your research domain.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Automatic citation extraction</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Theme and trend analysis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Gap identification in literature</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-blue-500/10 mb-4">
                                <FileText className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Writing Assistant</h3>
                            <p className="text-muted-foreground mb-4">
                                Get AI feedback on your writing style, argument structure, and academic tone. Ensure your thesis meets publication standards.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Academic writing feedback</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Argument strength analysis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Citation format checking</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-card border border-border">
                            <div className="inline-flex p-4 rounded-xl bg-orange-500/10 mb-4">
                                <Users className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Collaboration Tools</h3>
                            <p className="text-muted-foreground mb-4">
                                Work with your advisor, co-authors, and research team. Track feedback, manage revisions, and coordinate research activities.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Advisor feedback tracking</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Version control for drafts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>Research team coordination</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Recommendations Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-pink-500/5 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20">
                                <h3 className="text-2xl font-bold mb-6">Your AI Recommendations</h3>
                                <div className="space-y-4">
                                    <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <FileText className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-sm mb-1">
                                                    Complete Chapter 3 Methodology
                                                </h4>
                                                <p className="text-xs text-muted-foreground mb-2">
                                                    Based on your timeline, this section is due in 2 weeks
                                                </p>
                                                <span className="text-xs px-2 py-1 rounded-full bg-orange-500/10 text-orange-500">
                                                    High Priority
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <Search className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-sm mb-1">
                                                    Review Recent Papers in Your Field
                                                </h4>
                                                <p className="text-xs text-muted-foreground mb-2">
                                                    15 new papers published this month on machine learning
                                                </p>
                                                <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-500">
                                                    Research
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-xl bg-card/50 backdrop-blur border border-border">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-primary/10">
                                                <Mic className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-sm mb-1">
                                                    Practice Viva Questions
                                                </h4>
                                                <p className="text-xs text-muted-foreground mb-2">
                                                    Your defense is in 3 months. Start practicing now.
                                                </p>
                                                <span className="text-xs px-2 py-1 rounded-full bg-pink-500/10 text-pink-500">
                                                    Preparation
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Personalized AI Guidance
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Get intelligent recommendations based on your research progress, deadlines, and academic goals. AI adapts to your workflow and helps you stay on track.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Brain className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Smart Prioritization</h3>
                                        <p className="text-muted-foreground text-sm">
                                            AI analyzes your deadlines and suggests what to work on next for maximum impact.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Progress Tracking</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Monitor your research milestones and get alerts when you're falling behind schedule.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Lightbulb className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">Research Insights</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Discover new research directions, methodologies, and collaboration opportunities.
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
                        Ready to Accelerate Your Research?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Join graduate students worldwide using StudyFlow to complete their thesis and advance their academic careers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/register">
                            <Button size="lg" className="text-lg px-8 py-6">
                                Start Research Journey
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
