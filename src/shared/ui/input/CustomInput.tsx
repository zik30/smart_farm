import classNames from 'classnames';
import styles from './CustomInput.module.scss'

import { useRef, useState, type FC, type InputHTMLAttributes, type ReactNode } from 'react';
import { Typography } from '../typography/Typography';

type InputProps = {
    customSize?: 'medium' | 'small';
    fullWidth?: boolean;
    error?: boolean;
    icon?: ReactNode;
    password?: boolean;
    type?: 'text' | 'checkbox' | 'range' | 'radio' | 'password';
    helperText?: string;
    disabled?: boolean;
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;


export const CustomInput: FC<InputProps> = ({
    customSize = 'medium',
    fullWidth = false,
    error = false,
    icon,
    type = 'text',
    helperText,
    disabled = false,
    className = '',
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClear = () => {
        if (props.onChange) {
            const event = {
                ...new Event('input'),
                target: { value: '' },
            } as unknown as React.ChangeEvent<HTMLInputElement>;

            props.onChange(event);
        }

        inputRef.current?.focus();
    };

    const inputClasses = classNames(
        styles.input,
        customSize && styles[customSize],
        fullWidth && styles.fullWidth,
        error && styles.error,
        icon ? styles.withIcon : '',
        disabled && styles.disabled,
        className,
    );

    return (
        <><div
            className={classNames(styles.inputWrapper, {
                [styles.fullWidth]: fullWidth,
            })}
        >
            {icon && <div className={classNames(styles.inputIcon)}>{icon}</div>}
            {type === 'password' && (
                <div
                    onClick={() => setShowPassword(!showPassword)}
                    className={classNames(styles.right)}
                >
                    {showPassword ? (
                        <div className={styles.close}></div>
                    ) : (
                        <div className={styles.open}></div>
                    )}
                </div>
            )}
            {type === 'text' && props.value && (
                <div className={classNames(styles.right)} onClick={handleClear}>
                    <div className={styles.close}></div>
                </div>
            )}
            <input
                ref={inputRef}
                type={
                    type === 'password' ? (showPassword ? 'text' : 'password') : type
                }
                className={inputClasses}
                aria-invalid={error}
                {...props}
            ></input>
        </div>
            {helperText && (
                <Typography
                    className={styles.helperText}
                    variant='smallText'
                    color='grey500'
                >
                    {helperText}
                </Typography>
            )}
        </>
    )
}

