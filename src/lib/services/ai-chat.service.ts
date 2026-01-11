import apiClient from '../api-client';
import {
    ChatHistoryResponse,
    SendMessageRequest,
    SendMessageResponse,
    StartChatRequest,
    StartChatResponse,
} from '../types';

/**
 * AI Chat Service
 * Handles all AI chat-related API calls
 */
class AIChatService {
    private readonly STORAGE_KEY = 'currentChatSessionId';

    /**
     * Start a new chat session
     */
    async startChat(readingMaterialId?: string): Promise<StartChatResponse> {
        const payload: StartChatRequest = readingMaterialId
            ? { readingMaterialId }
            : {};

        const response = await apiClient.post<StartChatResponse>(
            '/ai-chat/start',
            payload
        );

        // Store session ID in localStorage
        if (response.data.success && response.data.data.sessionId) {
            this.setCurrentSessionId(response.data.data.sessionId);
        }

        return response.data;
    }

    /**
     * Send a message in the chat
     */
    async sendMessage(
        sessionId: string,
        message: string
    ): Promise<SendMessageResponse> {
        const payload: SendMessageRequest = {
            sessionId,
            message,
        };

        const response = await apiClient.post<SendMessageResponse>(
            '/ai-chat/message',
            payload
        );

        return response.data;
    }

    /**
     * Get chat history for a session
     */
    async getChatHistory(sessionId: string): Promise<ChatHistoryResponse> {
        const response = await apiClient.get<ChatHistoryResponse>(
            `/ai-chat/${sessionId}`
        );

        return response.data;
    }

    /**
     * Get current session ID from storage
     */
    getCurrentSessionId(): string | null {
        if (typeof window === 'undefined') return null;
        return localStorage.getItem(this.STORAGE_KEY);
    }

    /**
     * Set current session ID in storage
     */
    setCurrentSessionId(sessionId: string): void {
        if (typeof window === 'undefined') return;
        localStorage.setItem(this.STORAGE_KEY, sessionId);
    }

    /**
     * Clear current session
     */
    clearCurrentSession(): void {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(this.STORAGE_KEY);
    }
}

// Export singleton instance
export const aiChatService = new AIChatService();
