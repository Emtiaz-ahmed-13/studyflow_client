// User types
export interface User {
    id: string;
    name: string;
    email: string;
    role: 'STUDENT' | 'ADMIN' | 'MODERATOR';
    createdAt: string;
    updatedAt: string;
}

// Auth request types
export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    role?: 'STUDENT' | 'ADMIN' | 'MODERATOR';
}

export interface LoginRequest {
    email: string;
    password: string;
}

// Auth response types
export interface AuthResponse {
    success: boolean;
    message: string;
    data: {
        accessToken: string;
        refreshToken: string;
        user?: User;
    };
}

export interface RefreshTokenResponse {
    success: boolean;
    data: {
        accessToken: string;
    };
}

// API Error types
export interface ApiError {
    success: false;
    message: string;
    errorMessages?: Array<{
        path: string;
        message: string;
    }>;
    stack?: string;
}

// Generic API Response
export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
    };
}

// AI Chat types
export interface ChatMessage {
    role: 'user' | 'ai';
    content: string;
    timestamp: Date | string;
}

export interface ChatSession {
    id: string;
    userId: string;
    messages: ChatMessage[];
    readingMaterialId?: string;
    createdAt: string;
    updatedAt: string;
}

export interface StartChatRequest {
    readingMaterialId?: string;
}

export interface StartChatResponse {
    success: boolean;
    message: string;
    data: {
        sessionId: string;
        initialMessage?: string;
    };
}

export interface SendMessageRequest {
    sessionId: string;
    message: string;
}

export interface SendMessageResponse {
    success: boolean;
    data: {
        response: string;
        sessionId: string;
    };
}

export interface ChatHistoryResponse {
    success: boolean;
    data: {
        session: ChatSession;
    };
}
