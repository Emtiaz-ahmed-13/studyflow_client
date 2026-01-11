import { jwtDecode } from 'jwt-decode';
import apiClient, { tokenStorage } from '../api-client';
import { AuthResponse, LoginRequest, RegisterRequest, User } from '../types';

/**
 * Authentication Service
 * Handles all authentication-related API calls
 */
class AuthService {
    /**
     * Register a new user
     */
    async register(data: RegisterRequest): Promise<AuthResponse> {
        const response = await apiClient.post<AuthResponse>('/auth/register', data);

        // Store tokens after successful registration
        if (response.data.success && response.data.data) {
            const { accessToken, refreshToken } = response.data.data;
            tokenStorage.setTokens(accessToken, refreshToken);
        }

        return response.data;
    }

    /**
     * Login user
     */
    async login(data: LoginRequest): Promise<AuthResponse> {
        const response = await apiClient.post<AuthResponse>('/auth/login', data);

        // Store tokens after successful login
        if (response.data.success && response.data.data) {
            const { accessToken, refreshToken } = response.data.data;
            tokenStorage.setTokens(accessToken, refreshToken);
        }

        return response.data;
    }

    /**
     * Refresh access token
     */
    async refreshToken(): Promise<string> {
        const refreshToken = tokenStorage.getRefreshToken();

        if (!refreshToken) {
            throw new Error('No refresh token available');
        }

        const response = await apiClient.post('/auth/refresh-token', {
            refreshToken,
        });

        const newAccessToken = response.data.data.accessToken;

        // Update access token in storage
        if (typeof window !== 'undefined') {
            localStorage.setItem('accessToken', newAccessToken);
        }

        return newAccessToken;
    }

    /**
     * Logout user
     */
    logout(): void {
        tokenStorage.clearTokens();

        // Redirect to login page
        if (typeof window !== 'undefined') {
            window.location.href = '/login';
        }
    }

    /**
     * Get current user from token
     */
    getCurrentUser(): User | null {
        const token = tokenStorage.getAccessToken();

        if (!token) {
            return null;
        }

        try {
            const decoded = jwtDecode<User & { exp: number; iat: number }>(token);

            // Check if token is expired
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                return null;
            }

            return {
                id: decoded.id,
                name: decoded.name,
                email: decoded.email,
                role: decoded.role,
                createdAt: decoded.createdAt,
                updatedAt: decoded.updatedAt,
            };
        } catch (error) {
            console.error('Error decoding token:', error);
            return null;
        }
    }

    /**
     * Check if user is authenticated
     */
    isAuthenticated(): boolean {
        const token = tokenStorage.getAccessToken();

        if (!token) {
            return false;
        }

        try {
            const decoded = jwtDecode<{ exp: number }>(token);
            const currentTime = Date.now() / 1000;

            return decoded.exp > currentTime;
        } catch (error) {
            return false;
        }
    }
}

// Export singleton instance
export const authService = new AuthService();
