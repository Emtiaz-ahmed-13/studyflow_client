import { BackgroundPattern } from '@/components/background-pattern';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative">
            <BackgroundPattern />
            <div className="w-full max-w-md relative z-10">{children}</div>
        </div>
    );
}
