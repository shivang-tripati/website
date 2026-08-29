"use client";

import { useEffect, useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    MessageCircle,
    Phone,
} from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { getWhatsAppUrl } from "@/lib/contact";

interface CallbackDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

type Intent = "call" | "whatsapp" | null;

export function CallbackDialog({
    open,
    onOpenChange,
}: CallbackDialogProps) {
    const [intent, setIntent] = useState<Intent>(null);
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);

    /**
     * Reset the dialog whenever it is closed.
     * This prevents the next visitor from seeing
     * the previous user's state.
     */
    useEffect(() => {
        if (!open) {
            const timer = setTimeout(() => {
                setIntent(null);
                setPhone("");
                setSubmitted(false);
            }, 200);

            return () => clearTimeout(timer);
        }
    }, [open]);

    const handleCallIntent = () => {
        setIntent("call");
    };

    const handleWhatsAppIntent = () => {
        setIntent("whatsapp");
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const normalizedPhone = phone.trim();

        if (!normalizedPhone) return;

        /*
         * Replace this with your actual callback API.
         *
         * Example:
         *
         * await fetch("/api/callback", {
         *     method: "POST",
         *     headers: {
         *         "Content-Type": "application/json",
         *     },
         *     body: JSON.stringify({
         *         phone: normalizedPhone,
         *     }),
         * });
         */

        setSubmitted(true);
    };

    const handleDirectCall = () => {
        window.location.href = "tel:+919810787931";
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="
                    w-[calc(100%-2rem)]
                    max-w-md
                    overflow-hidden
                    border-border
                    bg-background
                    p-0
                    text-foreground
                "
            >
                {submitted ? (
                    /* ---------------------------------- */
                    /* SUCCESS STATE                        */
                    /* ---------------------------------- */
                    <div className="px-6 py-10 text-center sm:px-8">
                        <div
                            className="
                                mx-auto
                                mb-5
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-emerald-500/10
                                text-emerald-600
                                dark:text-emerald-400
                            "
                        >
                            <CheckCircle2
                                className="h-7 w-7"
                                aria-hidden="true"
                            />
                        </div>

                        <h2 className="text-xl font-bold tracking-tight text-on-surface">
                            Request received
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-2
                                max-w-sm
                                text-sm
                                leading-6
                                text-on-surface-variant
                            "
                        >
                            Thanks. Our team will contact you
                            shortly.
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setSubmitted(false);
                                setPhone("");
                                setIntent(null);
                                onOpenChange(false);
                            }}
                            className="
                                mt-7
                                inline-flex
                                min-h-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-border
                                bg-surface-low
                                px-5
                                text-sm
                                font-semibold
                                text-on-surface
                                transition-colors
                                hover:bg-surface-high
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-primary
                                focus-visible:ring-offset-2
                            "
                        >
                            Done
                        </button>
                    </div>
                ) : (
                    <>
                        {/* ---------------------------------- */}
                        {/* HEADER                              */}
                        {/* ---------------------------------- */}

                        <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                            <DialogHeader>
                                <div
                                    className="
                                        mb-4
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-primary/10
                                        text-primary
                                    "
                                >
                                    <Phone
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                </div>

                                <DialogTitle
                                    className="
                                        text-2xl
                                        font-bold
                                        tracking-tight
                                    "
                                >
                                    Talk to an expert
                                </DialogTitle>

                                <DialogDescription
                                    className="
                                        mt-2
                                        leading-6
                                        text-on-surface-variant
                                    "
                                >
                                    How would you like to connect
                                    with our team?
                                </DialogDescription>
                            </DialogHeader>
                        </div>

                        {/* ---------------------------------- */}
                        {/* INTENT SELECTION                    */}
                        {/* ---------------------------------- */}

                        {!intent && (
                            <div className="px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
                                <div className="space-y-3">
                                    {/* Request a call */}
                                    <button
                                        type="button"
                                        onClick={handleCallIntent}
                                        className="
                                            group
                                            flex
                                            w-full
                                            items-center
                                            gap-4
                                            rounded-2xl
                                            border
                                            border-border
                                            bg-surface-low
                                            p-4
                                            text-left
                                            transition-all
                                            duration-200
                                            hover:-translate-y-0.5
                                            hover:border-primary/30
                                            hover:bg-surface-high
                                            hover:shadow-md
                                            focus-visible:outline-none
                                            focus-visible:ring-2
                                            focus-visible:ring-primary
                                            focus-visible:ring-offset-2
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-primary/10
                                                text-primary
                                            "
                                        >
                                            <Phone
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p
                                                className="
                                                    font-semibold
                                                    text-on-surface
                                                "
                                            >
                                                I want a call
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    leading-5
                                                    text-on-surface-variant
                                                "
                                            >
                                                Leave your number and
                                                we'll call you back.
                                            </p>
                                        </div>

                                        <ArrowRight
                                            className="
                                                h-4
                                                w-4
                                                shrink-0
                                                text-on-surface-variant
                                                transition-transform
                                                duration-200
                                                group-hover:translate-x-1
                                            "
                                            aria-hidden="true"
                                        />
                                    </button>

                                    {/* WhatsApp */}
                                    <button
                                        type="button"
                                        onClick={handleWhatsAppIntent}
                                        className="
                                            group
                                            flex
                                            w-full
                                            items-center
                                            gap-4
                                            rounded-2xl
                                            border
                                            border-border
                                            bg-surface-low
                                            p-4
                                            text-left
                                            transition-all
                                            duration-200
                                            hover:-translate-y-0.5
                                            hover:border-emerald-500/30
                                            hover:bg-emerald-500/5
                                            hover:shadow-md
                                            focus-visible:outline-none
                                            focus-visible:ring-2
                                            focus-visible:ring-emerald-500
                                            focus-visible:ring-offset-2
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-emerald-500/10
                                                text-emerald-600
                                                dark:text-emerald-400
                                            "
                                        >
                                            <MessageCircle
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p
                                                className="
                                                    font-semibold
                                                    text-on-surface
                                                "
                                            >
                                                Chat on WhatsApp
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    leading-5
                                                    text-on-surface-variant
                                                "
                                            >
                                                Start a conversation
                                                with our team now.
                                            </p>
                                        </div>

                                        <ArrowRight
                                            className="
                                                h-4
                                                w-4
                                                shrink-0
                                                text-on-surface-variant
                                                transition-transform
                                                duration-200
                                                group-hover:translate-x-1
                                            "
                                            aria-hidden="true"
                                        />
                                    </button>

                                    {/* Direct call */}
                                    <button
                                        type="button"
                                        onClick={handleDirectCall}
                                        className="
                                            group
                                            flex
                                            w-full
                                            items-center
                                            gap-4
                                            rounded-2xl
                                            border
                                            border-border
                                            bg-transparent
                                            p-4
                                            text-left
                                            transition-colors
                                            hover:bg-surface-low
                                            focus-visible:outline-none
                                            focus-visible:ring-2
                                            focus-visible:ring-primary
                                            focus-visible:ring-offset-2
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-11
                                                w-11
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-surface-high
                                                text-on-surface-variant
                                            "
                                        >
                                            <Phone
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p
                                                className="
                                                    font-semibold
                                                    text-on-surface
                                                "
                                            >
                                                Call us directly
                                            </p>

                                            <p
                                                className="
                                                    mt-1
                                                    text-sm
                                                    text-on-surface-variant
                                                "
                                            >
                                                +91 98107 87931
                                            </p>
                                        </div>

                                        <ArrowRight
                                            className="
                                                h-4
                                                w-4
                                                shrink-0
                                                text-on-surface-variant
                                                transition-transform
                                                duration-200
                                                group-hover:translate-x-1
                                            "
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                <p
                                    className="
                                        mt-6
                                        text-center
                                        text-xs
                                        leading-5
                                        text-on-surface-variant
                                    "
                                >
                                    Our team can help you find the
                                    right ACS solution for your
                                    business.
                                </p>
                            </div>
                        )}

                        {/* ---------------------------------- */}
                        {/* CALLBACK INTENT                    */}
                        {/* ---------------------------------- */}

                        {intent === "call" && (
                            <form
                                onSubmit={handleSubmit}
                                className="px-6 pb-6 pt-6 sm:px-8 sm:pb-8"
                            >
                                <button
                                    type="button"
                                    onClick={() => setIntent(null)}
                                    className="
                                        mb-5
                                        text-sm
                                        font-medium
                                        text-on-surface-variant
                                        hover:text-on-surface
                                        focus-visible:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-primary
                                    "
                                >
                                    ← Back
                                </button>

                                <div>
                                    <label
                                        htmlFor="callback-phone"
                                        className="
                                            mb-2
                                            block
                                            text-sm
                                            font-medium
                                            text-on-surface
                                        "
                                    >
                                        Where should we call you?
                                    </label>

                                    <input
                                        id="callback-phone"
                                        name="phone"
                                        type="tel"
                                        inputMode="tel"
                                        autoComplete="tel"
                                        required
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        placeholder="+91 98107 87931"
                                        className="
                                            h-12
                                            w-full
                                            rounded-xl
                                            border
                                            border-border
                                            bg-surface-low
                                            px-4
                                            text-sm
                                            text-on-surface
                                            outline-none
                                            placeholder:text-on-surface-variant/60
                                            transition
                                            focus:border-primary
                                            focus:ring-2
                                            focus:ring-primary/20
                                        "
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="
                                        mt-4
                                        inline-flex
                                        h-12
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-primary
                                        px-5
                                        text-sm
                                        font-semibold
                                        text-primary-foreground
                                        shadow-sm
                                        transition-all
                                        hover:-translate-y-px
                                        hover:shadow-md
                                        focus-visible:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-primary
                                        focus-visible:ring-offset-2
                                    "
                                >
                                    Request a Call
                                    <ArrowRight
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    />
                                </button>

                                <p
                                    className="
                                        mt-4
                                        text-center
                                        text-xs
                                        text-on-surface-variant
                                    "
                                >
                                    We'll use this number only to
                                    contact you about your request.
                                </p>
                            </form>
                        )}

                        {/* ---------------------------------- */}
                        {/* WHATSAPP INTENT                    */}
                        {/* ---------------------------------- */}

                        {intent === "whatsapp" && (
                            <div className="px-6 pb-6 pt-6 sm:px-8 sm:pb-8">
                                <button
                                    type="button"
                                    onClick={() => setIntent(null)}
                                    className="
                                        mb-5
                                        text-sm
                                        font-medium
                                        text-on-surface-variant
                                        hover:text-on-surface
                                        focus-visible:outline-none
                                        focus-visible:ring-2
                                        focus-visible:ring-primary
                                    "
                                >
                                    ← Back
                                </button>

                                <div className="text-center">
                                    <div
                                        className="
                                            mx-auto
                                            mb-5
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-emerald-500/10
                                            text-emerald-600
                                            dark:text-emerald-400
                                        "
                                    >
                                        <MessageCircle
                                            className="h-7 w-7"
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <h3
                                        className="
                                            text-xl
                                            font-bold
                                            tracking-tight
                                            text-on-surface
                                        "
                                    >
                                        Chat with our team
                                    </h3>

                                    <p
                                        className="
                                            mx-auto
                                            mt-2
                                            max-w-sm
                                            text-sm
                                            leading-6
                                            text-on-surface-variant
                                        "
                                    >
                                        Start a WhatsApp conversation
                                        and tell us what you're looking
                                        for.
                                    </p>

                                    <a
                                        href={getWhatsAppUrl()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() =>
                                            onOpenChange(false)
                                        }
                                        className="
                                            mt-6
                                            inline-flex
                                            h-12
                                            w-full
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-xl
                                            bg-emerald-600
                                            px-5
                                            text-sm
                                            font-semibold
                                            text-white
                                            shadow-sm
                                            transition-all
                                            hover:-translate-y-px
                                            hover:bg-emerald-700
                                            hover:shadow-md
                                            focus-visible:outline-none
                                            focus-visible:ring-2
                                            focus-visible:ring-emerald-500
                                            focus-visible:ring-offset-2
                                        "
                                    >
                                        <MessageCircle
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />

                                        Continue on WhatsApp

                                        <ArrowRight
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                    </a>

                                    <p
                                        className="
                                            mt-4
                                            text-xs
                                            text-on-surface-variant
                                        "
                                    >
                                        WhatsApp will open in a new
                                        window.
                                    </p>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}