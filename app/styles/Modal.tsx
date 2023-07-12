import { FC, HTMLAttributes, ReactNode } from "react";

export interface ModalPropTypes extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const ModalScreen: FC<ModalPropTypes> = ({ children }) => (
    <main
        className={`fixed top-0 left-0 w-full  h-screen items-center justify-center font-mono text-sm lg:flex z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gray-950 before:opacity-90`}
    >
        {children}
    </main>
);

export const ModalScreenContainer: FC<ModalPropTypes> = ({ children }) => (
    <div className="w-full h-full flex justify-center items-center z-20">
        {children}
    </div>
);
