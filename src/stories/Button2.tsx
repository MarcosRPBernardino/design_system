import './button2.css';

export interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: "#fff" | "#000";
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    text: string;
    /** Optional click handler */
    onClick?: () => void;
}

export function Button2({text}: ButtonProps) {
    return (<button className='button'>{text}</button>)
}