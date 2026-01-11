'use client';

import { BackgroundPattern } from '@/components/background-pattern';
import { ChatButton } from '@/components/chat/chat-button';
import { ProtectedRoute } from '@/components/protected-route';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useAuth } from '@/contexts/auth-context';

export default function DashboardPage() {
    const { user, logout } = useAuth();

    return (
        <ProtectedRoute>
            <div className="min-h-screen relative">
                <BackgroundPattern />

                <div className="relative z-10 container mx-auto px-4 py-8">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {/* Header */}
                        <div className="flex justify-between items-center">
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                Dashboard
                            </h1>
                            <Button
                                onClick={logout}
                                variant="outline"
                                className="backdrop-blur-xl bg-card/80"
                            >
                                Logout
                            </Button>
                        </div>

                        {/* Welcome Card */}
                        <Card className="backdrop-blur-xl bg-card/80 border-border/50 shadow-2xl">
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    Welcome back, {user?.name}! 👋
                                </CardTitle>
                                <CardDescription>
                                    You&apos;re successfully authenticated
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <p className="font-medium">{user?.email}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">Role</p>
                                        <p className="font-medium">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                                {user?.role}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">User ID</p>
                                        <p className="font-mono text-sm">{user?.id}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">Member Since</p>
                                        <p className="text-sm">
                                            {user?.createdAt
                                                ? new Date(user.createdAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })
                                                : 'N/A'}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Features Coming Soon */}
                        <Card className="backdrop-blur-xl bg-card/80 border-border/50 shadow-2xl">
                            <CardHeader>
                                <CardTitle>🚀 Coming Soon</CardTitle>
                                <CardDescription>
                                    More features are being integrated
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>AI Chat Assistant</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>Study Plans & Tasks</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>Gamification & XP System</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>Reading Materials</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>Wellness Tracking</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Floating Chat Button */}
                <ChatButton />
            </div>
        </ProtectedRoute>
    );
}
