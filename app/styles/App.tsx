import { FC, HTMLAttributes, ReactNode } from "react";

interface IMainApp extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
}

export const MainApp: FC<IMainApp> = ({ children, className }) => (
    <main
        className={`flex min-h-screen flex-col items-center justify-between ${className}`}
    >
        {children}
    </main>
);
