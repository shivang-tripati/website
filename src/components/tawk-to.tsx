"use client";

import { useCallback, useRef } from "react";
import TawkMessengerReact, { type TawkMessengerRef } from "@tawk.to/tawk-messenger-react";

interface TawkUser {
    name?: string;
    email?: string;
    phone?: string;
}

interface TawkToProps {
    user?: TawkUser | null;
}

export default function TawkTo({ user }: TawkToProps) {
    const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID;
    const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID;

    const tawkMessengerRef = useRef<TawkMessengerRef | null>(null);

    const handleTawkLoad = useCallback(() => {
        const tawk = tawkMessengerRef.current;

        if (!tawk || !user) {
            return;
        }

        const attributes: Record<string, string> = {};

        if (user.name) attributes.name = user.name;
        if (user.email) attributes.email = user.email;
        if (user.phone) attributes.phone = user.phone;

        if (!Object.keys(attributes).length) {
            return;
        }

        tawk.tawkSetAttributes(attributes, (error) => {
            if (error) {
                console.error("Tawk attribute error:", error);
            }
        });
    }, [user]);

    if (!propertyId || !widgetId) {
        return null;
    }

    const noop = () => { };

    return (
        <TawkMessengerReact
            ref={tawkMessengerRef}
            propertyId={propertyId}
            widgetId={widgetId}
            onLoad={handleTawkLoad} // Updated to onLoad
            // Pass fallbacks to prevent the runtime TypeErrors
            onBeforeLoad={noop}
            onStatusChange={noop}
            onChatMaximized={noop}
            onChatMinimized={noop}
            onChatStarted={noop}
            onChatMessageSystem={noop}
            onChatMessageVisitor={noop}
            onChatMessageAgent={noop}
            onUnreadCountChanged={noop}
            onAgentJoinChat={noop}
        />
    );
}