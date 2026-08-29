"use client";

import {
    ArrowUpRight,
    MessageCircle,
    Phone,
    Send,
    Volume2,
} from "lucide-react";

import Link from "next/link";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { products } from "@/lib/products";

interface ClientLoginDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onContactSales?: () => void;
}

const iconMap = {
    phone: Phone,
    volume: Volume2,
    message: MessageCircle,
    send: Send,
};

const accentStyles = {
    blue: {
        icon: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
        hover: "group-hover:border-blue-500/30",
    },

    emerald: {
        icon: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        hover: "group-hover:border-emerald-500/30",
    },

    green: {
        icon: "bg-green-500/10 text-green-600 dark:text-green-400",
        hover: "group-hover:border-green-500/30",
    },

    amber: {
        icon: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        hover: "group-hover:border-amber-500/30",
    },
};

export function ClientLoginDialog({
    open,
    onOpenChange,
    onContactSales,
}: ClientLoginDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="
          w-[calc(100%-2rem)]
          max-w-2xl
          overflow-hidden
          border-border
          bg-background
          p-0
          text-foreground
          shadow-2xl
        "
            >
                <div className="p-6 sm:p-8">
                    <DialogHeader className="mb-7">
                        <div
                            className="
                mb-4
                inline-flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                text-primary
              "
                        >
                            <ArrowUpRight
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </div>

                        <DialogTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
                            Welcome back
                        </DialogTitle>

                        <DialogDescription className="mt-2 max-w-lg text-sm leading-6 text-on-surface-variant sm:text-base">
                            Choose the ACS product you use to continue
                            to your client portal.
                        </DialogDescription>
                    </DialogHeader>

                    <div
                        className="
              grid
              gap-3
              sm:grid-cols-2
            "
                    >
                        {products.map((product) => {
                            const Icon =
                                iconMap[
                                product.icon as keyof typeof iconMap
                                ];

                            const accent =
                                accentStyles[
                                product.accent as keyof typeof accentStyles
                                ];

                            return (
                                <Link
                                    key={product.id}
                                    href={product.href}
                                    target={product.external ? "_blank" : undefined}
                                    rel={
                                        product.external
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    onClick={() => onOpenChange(false)}
                                    className={`
                    group
                    rounded-2xl
                    border
                    border-border
                    bg-surface-low
                    p-4
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:bg-surface-high
                    hover:shadow-lg
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                    focus-visible:ring-offset-2
                    ${accent.hover}
                  `}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        ${accent.icon}
                      `}
                                        >
                                            <Icon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-3">
                                                <h3 className="font-semibold text-on-surface">
                                                    {product.name}
                                                </h3>

                                                <ArrowUpRight
                                                    className="
                            h-4
                            w-4
                            shrink-0
                            text-on-surface-variant
                            transition-transform
                            duration-200
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <p className="mt-1 text-sm leading-5 text-on-surface-variant">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-7 border-t border-border pt-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold text-on-surface">
                                    New to ACS?
                                </p>

                                <p className="mt-1 text-sm text-on-surface-variant">
                                    Talk to our team about the right solution.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    onOpenChange(false);
                                    onContactSales?.();
                                }}
                                className="
                  inline-flex
                  min-h-10
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-border
                  bg-surface
                  px-4
                  text-sm
                  font-semibold
                  text-on-surface
                  transition-all
                  hover:border-primary/30
                  hover:bg-surface-high
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                "
                            >
                                Talk to an Expert
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}