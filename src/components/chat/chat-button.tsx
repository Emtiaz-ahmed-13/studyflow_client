'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { ChatInterface } from './chat-interface';

export function ChatButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 z-50"
                    size="icon"
                >
                    <MessageCircle className="w-6 h-6" />
                </Button>
            )}

            {/* Chat Modal */}
            {isOpen && (
                <Card className="fixed bottom-6 right-6 w-[400px] h-[600px] shadow-2xl z-50 flex flex-col backdrop-blur-xl bg-card/95 border-border/50">
                    <CardHeader className="flex-shrink-0 flex flex-row items-center justify-between space-y-0 pb-4">
                        <CardTitle className="text-lg">AI Chat</CardTitle>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(false)}
                            className="h-8 w-8"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </CardHeader>
                    <CardContent className="flex-1 p-0 overflow-hidden">
                        <ChatInterface />
                    </CardContent>
                </Card>
            )}
        </>
    );
}
