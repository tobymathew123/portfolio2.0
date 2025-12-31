import { useEffect, useState } from "react";

export const LightModeSunRays = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 dark:hidden">
            {/* Subtle gradient breathing overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at 30% 40%, rgba(251, 191, 36, 0.03), transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(251, 146, 60, 0.02), transparent 60%)',
                    animation: 'ambientBreathing 25s ease-in-out infinite',
                }}
            />

            {/* Secondary subtle drift */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(249, 115, 22, 0.015), transparent 70%)',
                    animation: 'ambientDrift 35s ease-in-out infinite',
                }}
            />

            <style>{`
                @keyframes ambientBreathing {
                    0%, 100% {
                        opacity: 0.5;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.7;
                        transform: scale(1.05);
                    }
                }
                
                @keyframes ambientDrift {
                    0%, 100% {
                        opacity: 0.4;
                        transform: translate(0, 0);
                    }
                    33% {
                        opacity: 0.6;
                        transform: translate(-2%, 2%);
                    }
                    66% {
                        opacity: 0.5;
                        transform: translate(2%, -2%);
                    }
                }
            `}</style>
        </div>
    );
};
