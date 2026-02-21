import styles from './Dropdown.module.scss';
import { useEffect, useRef, useState, type FC } from 'react';
import classNames from 'classnames';
import { Typography } from 'shared/ui/typography/Typography';
import { ChevronDown } from 'lucide-react';

export type DropdownOption = {
    label: string;
    value: string;
    path?: string;
};
type DropdownProps = {
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    header?: boolean;
};


export const Dropdown: FC<DropdownProps> = ({
    options,
    value,
    onChange,
    placeholder = 'Выберите...',
    header = false,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const selected = options.find((opt) => opt.value === value);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className={classNames(styles.dropdown, className)}>
            <button
                className={classNames(
                    styles.toggle,
                    isOpen && styles.arrowOpen,
                    header && styles.header,
                )}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-haspopup='listbox'
                aria-expanded={isOpen}
            >
                <Typography color='white' variant={header ? 'bodyText' : 'h4'}>
                    {selected?.label || placeholder}
                </Typography>
                <div className={styles.arrow}>
                    <ChevronDown size={24} color='var(--grey000)' />
                </div>
            </button>
            <ul
                className={classNames(
                    styles.menu,
                    header && styles.headerMenu,
                    isOpen && styles.open,
                )}
                role='listbox'
            >
                {options.map((opt) => (
                    <li
                        key={String(opt.value)}
                        className={classNames(styles.item, header && styles.headerItem, {
                            [styles.active]: opt.value === value,
                        })}
                        onClick={() => {
                            if (opt.path) onChange(opt.path);
                            else onChange(opt.value);
                            setIsOpen(false);
                        }}
                    >
                        <Typography variant='bodyText'>{opt.label}</Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
};
