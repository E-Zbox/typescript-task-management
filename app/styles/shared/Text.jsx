export const H1 = ({ children, className }) => (
    <h1 className={`text-5xl uppercase font-racing ${className}`}>
        {children}
    </h1>
);

export const H3 = ({ children, className }) => (
    <h3 className={`text-xl capitalize font-sans pl-3 mb-2 ${className}`}>
        {children}
    </h3>
);

export const H4 = ({ children, className }) => (
    <h4 className={`text-xl capitalize font-mono ${className}`}>{children}</h4>
);
