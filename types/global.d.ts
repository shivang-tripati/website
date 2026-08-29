export { };

declare global {
    interface Window {
        Tawk_API?: {
            onLoad?: () => void;
            onChatStarted?: () => void;
            onChatEnded?: () => void;
            onOfflineSubmit?: () => void;
            onChatMinimized?: () => void;
            onChatMaximized?: () => void;
            onChatHidden?: () => void;
            onChatShown?: () => void;
            // add more events or methods if needed
        };
    }
}
