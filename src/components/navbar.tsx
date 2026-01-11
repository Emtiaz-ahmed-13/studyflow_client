'use client';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/language-context';
import { GraduationCap, Languages, LogIn, Menu, Moon, Sun, User, UserPlus, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
    const { language, toggleLanguage, t } = useLanguage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Load theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            {t('common.logo')}
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {/* Theme Toggle */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className="gap-2 hover:bg-primary/10 transition-all"
                        >
                            {theme === 'light' ? (
                                <Moon className="w-4 h-4" />
                            ) : (
                                <Sun className="w-4 h-4" />
                            )}
                        </Button>

                        {/* Language Toggle */}
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleLanguage}
                            className="gap-1 hover:bg-primary/10 transition-all font-semibold"
                        >
                            <Languages className="w-4 h-4" />
                            <span className="text-xs">{language === 'bn' ? 'EN' : 'বাং'}</span>
                        </Button>

                        <div className="w-px h-6 bg-border/40 mx-1" />

                        {/* Profile Button */}
                        <Link href="/profile">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="gap-2 hover:bg-primary/10 hover:text-primary transition-all"
                            >
                                <User className="w-4 h-4" />
                                <span>{t('common.profile')}</span>
                            </Button>
                        </Link>

                        {/* Login Button */}
                        <Link href="/login">
                            <Button
                                variant="outline"
                                size="sm"
                                className="gap-2 hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <LogIn className="w-4 h-4" />
                                <span>{t('common.login')}</span>
                            </Button>
                        </Link>

                        {/* Signup Button */}
                        <Link href="/register">
                            <Button
                                size="sm"
                                className="gap-2 bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                            >
                                <UserPlus className="w-4 h-4" />
                                <span>{t('common.signup')}</span>
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border/40 animate-in slide-in-from-top-5 duration-200">
                        <div className="flex flex-col gap-2">
                            {/* Theme & Language Toggle Row */}
                            <div className="flex gap-2 mb-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={toggleTheme}
                                    className="flex-1 gap-2"
                                >
                                    {theme === 'light' ? (
                                        <>
                                            <Moon className="w-4 h-4" />
                                            <span>{t('navbar.themeDark')}</span>
                                        </>
                                    ) : (
                                        <>
                                            <Sun className="w-4 h-4" />
                                            <span>{t('navbar.themeLight')}</span>
                                        </>
                                    )}
                                </Button>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={toggleLanguage}
                                    className="flex-1 gap-2"
                                >
                                    <Languages className="w-4 h-4" />
                                    <span>{language === 'bn' ? t('navbar.langEn') : t('navbar.langBn')}</span>
                                </Button>
                            </div>

                            <div className="w-full h-px bg-border/40 my-1" />

                            <Link href="/profile" onClick={() => setMobileMenuOpen(false)}>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start gap-2 hover:bg-primary/10 hover:text-primary"
                                >
                                    <User className="w-4 h-4" />
                                    <span>{t('common.profile')}</span>
                                </Button>
                            </Link>

                            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start gap-2 hover:bg-primary hover:text-primary-foreground"
                                >
                                    <LogIn className="w-4 h-4" />
                                    <span>{t('common.login')}</span>
                                </Button>
                            </Link>

                            <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                                <Button
                                    className="w-full justify-start gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                                >
                                    <UserPlus className="w-4 h-4" />
                                    <span>{t('common.signup')}</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
