export const Button = ({ children, className }) => (
    <button
        className={`px-5 py-1 font-mono bg-blue-600 rounded-full opacity-50 hover:opacity-100 ${className}`}
    >
        {children}
    </button>
);
