// src/tawk.d.ts
declare module '@tawk.to/tawk-messenger-react' {
    import { Component } from 'react';

    export interface TawkMessengerProps {
        propertyId: string;
        widgetId: string;
        onLoad?: () => void; // Changed from tawkOnLoad to standard onLoad
        onBeforeLoad?: () => void;
        onStatusChange?: (status?: string) => void;
        onChatMaximized?: () => void;
        onChatMinimized?: () => void;
        onChatStarted?: () => void;
        onChatMessageSystem?: (message?: any) => void;
        onChatMessageVisitor?: (message?: any) => void;
        onChatMessageAgent?: (message?: any) => void;
        onUnreadCountChanged?: (count?: number) => void;
        onAgentJoinChat?: (data?: any) => void;
    }

    export default class TawkMessengerReact extends Component<TawkMessengerProps> {
        tawkMinimize(): void;
        tawkMaximize(): void;
        tawkToggle(): void;
        tawkSetAttributes(
            attributes: Record<string, string>,
            callback?: (error?: unknown) => void
        ): void;
        tawkAddEvent(
            eventName: string,
            metadata?: Record<string, string>,
            callback?: (error?: unknown) => void
        ): void;
    }

    export type TawkMessengerRef = TawkMessengerReact;
}