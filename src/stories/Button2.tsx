import './button2.css';

export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: "#fff" | "#000";
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

export function Button2({ label, size = 'medium', backgroundColor, primary = true}: ButtonProps) {

    const textColor = backgroundColor === "#fff" ? "#000" : "#fff";
    const mode = primary ? 'button--primary' : 'button--secondary';

    return (
        <button className={['button', `button--${size}`, mode].join(' ')}>
            {label}
            <style jsx>
                {`button{ 
                background-color: ${backgroundColor};
                color: ${textColor}
                }`}
            </style>
        </button>
    )
}