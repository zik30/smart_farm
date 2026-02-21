import classNames from 'classnames';
import styles from './CustomButton.module.scss'
import type { FC, ReactNode } from 'react';
import { Typography } from '../typography/Typography';

export interface CustomButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'white' | 'noBG' | 'black';
    size?: 'medium' | 'square' | 'squareSmall' | 'smallCircle' | 'bigCircle';
    onClick?: () => void;
    disabled?: boolean;
    fullWidth?: boolean;
    icon?: ReactNode;
    className?: string;
}


export const CustomButton: FC<CustomButtonProps> = ({ children,
    variant = 'primary',
    size = 'medium',
    onClick,
    disabled = false,
    fullWidth = true,
    icon,
    className = '',
}) => {
    const buttonClasses = classNames(
        styles.button,
        styles[variant],
        styles[size],
        !!icon && styles.container,
        fullWidth && styles.fullWidth,
        className,
    );
    const isTextChild =
        typeof children === 'string' || typeof children === 'number';
    return (
        <button className={buttonClasses} onClick={onClick} disabled={disabled}>
            {isTextChild ? (
                <Typography align='center' variant='h5' weight='medium' color={variant === 'primary' ? 'black' : 'white'}>
                    {children}
                </Typography>
            ) : (
                children
            )}
            {icon}
        </button>
    );

}

