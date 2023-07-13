import {
    ButtonHTMLAttributes,
    FC,
    InputHTMLAttributes,
    OptionHTMLAttributes,
    ReactNode,
    SelectHTMLAttributes,
} from "react";

interface ButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

interface OptionPropTypes extends OptionHTMLAttributes<HTMLOptionElement> {
    children: ReactNode;
}

interface SelectPropTypes extends SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode;
}

interface TextInputPropTypes extends InputHTMLAttributes<HTMLInputElement> {}

export const Button: FC<ButtonPropTypes> = ({ children, ...props }) => (
    <button
        className={`px-5 py-3 font-mono bg-blue-600 rounded-full opacity-50 hover:opacity-100`}
        {...props}
    >
        {children}
    </button>
);

export const Option: FC<OptionPropTypes> = ({ children, ...props }) => (
    <option className="py-2 px-2" {...props}>
        {children}
    </option>
);

export const Select: FC<SelectPropTypes> = ({
    children,
    className,
    name,
    id,
    placeholder,
}) => (
    <select
        className={`text-slate-950 py-3 px-2 rounded ${className}`}
        name={name}
        id={id}
        placeholder={placeholder}
    >
        {children}
    </select>
);

export const TextInput: FC<TextInputPropTypes> = (props) => (
    <input
        className={"w-3/5 h-10 px-2 rounded text-slate-950 ml-3"}
        {...props}
    />
);
