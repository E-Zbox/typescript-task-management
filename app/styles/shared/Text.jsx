export const H1 = ({ children, className }) => (
    <h1 className={`text-5xl uppercase font-racing ${className}`}>
        {children}
    </h1>
);

export const H4 = ({ children, className }) => (
    <h4 className={`text-2xl capitalize font-mono ${className}`}>{children}</h4>
);
