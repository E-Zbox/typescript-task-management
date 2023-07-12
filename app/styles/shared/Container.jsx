export const MainFlexContainer = ({ children, className }) => (
    <main
        className={`flex flex-row justify-between items-center p-0 w-full font-roboto ${className}`}
    >
        {children}
    </main>
);

export const DivContainer = ({ children, className }) => (
    <div className={`p-0 w-9/12 ${className}`}>{children}</div>
);
