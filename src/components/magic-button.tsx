"use client";

import React, {
    useCallback,
    useRef,
    useState,
} from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
    children: React.ReactNode;
    strength?: number;
    disabled?: boolean;
    className?: string;
}

function MagneticButton({
    children,
    strength = 0.15,
    disabled = false,
    className,
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!ref.current || disabled) return;

            const rect = ref.current.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            setPosition({
                x: distanceX * strength,
                y: distanceY * strength,
            });
        },
        [disabled, strength]
    );

    const resetPosition = useCallback(() => {
        setPosition({
            x: 0,
            y: 0,
        });
    }, []);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetPosition}
            animate={{
                x: position.x,
                y: position.y,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
            }}
            className={className}
            style={{
                willChange: "transform",
            }}
        >
            {children}
        </motion.div>
    );
}

export { MagneticButton };