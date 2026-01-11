'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { aiChatService } from '@/lib/services/ai-chat.service';
import { ChatMessage as ChatMessageType } from '@/lib/types';
import { Loader2, Send, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ChatMessage } from './chat-message';

export function ChatInterface() {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Initialize chat session on mount
    useEffect(() => {
        const initializeChat = async () => {
            try {
                // Check if there's an existing session
                const existingSessionId = aiChatService.getCurrentSessionId();

                if (existingSessionId) {
                    // Load existing chat history
                    const historyResponse = await aiChatService.getChatHistory(
                        existingSessionId
                    );
                    if (historyResponse.success) {
                        setSessionId(existingSessionId);
                        setMessages(historyResponse.data.session.messages);
                    } else {
                        // If history load fails, start new session
                        await startNewSession();
                    }
                } else {
                    // Start new session
                    await startNewSession();
                }
            } catch (err) {
                console.error('Error initializing chat:', err);
                setError('Failed to initialize chat. Please try again.');
            }
        };

        initializeChat();
    }, []);

    const startNewSession = async () => {
        try {
            const response = await aiChatService.startChat();
            if (response.success) {
                setSessionId(response.data.sessionId);

                // Add initial AI message if provided
                if (response.data.initialMessage) {
                    setMessages([
                        {
                            role: 'ai',
                            content: response.data.initialMessage,
                            timestamp: new Date().toISOString(),
                        },
                    ]);
                }
            }
        } catch (err) {
            console.error('Error starting chat:', err);
            setError('Failed to start chat session.');
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!input.trim() || !sessionId || isLoading) return;

        const userMessage: ChatMessageType = {
            role: 'user',
            content: input.trim(),
            timestamp: new Date().toISOString(),
        };

        // Add user message to UI immediately
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await aiChatService.sendMessage(sessionId, userMessage.content);

            if (response.success) {
                // Add AI response
                const aiMessage: ChatMessageType = {
                    role: 'ai',
                    content: response.data.response,
                    timestamp: new Date().toISOString(),
                };
                setMessages((prev) => [...prev, aiMessage]);
            } else {
                setError('Failed to get AI response. Please try again.');
            }
        } catch (err) {
            console.error('Error sending message:', err);
            setError('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center gap-2 p-4 border-b border-border bg-card/50 backdrop-blur">
                <div className="p-2 rounded-lg bg-purple-500/10">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                    <h3 className="font-semibold">AI Study Assistant</h3>
                    <p className="text-xs text-muted-foreground">
                        Ask me anything about your studies
                    </p>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                        <div className="p-4 rounded-full bg-purple-500/10">
                            <Sparkles className="w-12 h-12 text-purple-500" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-2">
                                Start a conversation
                            </h4>
                            <p className="text-sm text-muted-foreground max-w-sm">
                                Ask me questions about your studies, get help with homework, or
                                discuss any topic you&apos;re learning.
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        {messages.map((message, index) => (
                            <ChatMessage key={index} message={message} />
                        ))}
                        {isLoading && (
                            <div className="flex gap-3 p-4 rounded-lg bg-muted/50 mr-8">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                </div>
                                <div className="flex-1">
                                    <span className="font-semibold text-sm">AI Assistant</span>
                                    <p className="text-sm text-muted-foreground">Thinking...</p>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <div className="px-4 py-2 bg-destructive/10 border-t border-destructive/20 text-destructive text-sm">
                    {error}
                </div>
            )}

            {/* Input */}
            <form
                onSubmit={handleSendMessage}
                className="p-4 border-t border-border bg-card/50 backdrop-blur"
            >
                <div className="flex gap-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        disabled={isLoading || !sessionId}
                        className="flex-1"
                    />
                    <Button
                        type="submit"
                        disabled={!input.trim() || isLoading || !sessionId}
                        className="bg-purple-500 hover:bg-purple-600"
                    >
                        {isLoading ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                            <Send className="w-4 h-4" />
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
