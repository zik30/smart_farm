import classNames from 'classnames';
import styles from './Typography.module.scss'
import { type FC, type JSX, type ReactNode } from 'react';

export type ITVariants =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'bodyText'
    | 'smallText';

export type ITColors =
    | 'black'
    | 'white'
    | 'grey300'
    | 'grey400'
    | 'grey500'
    | 'grey600'
    | 'primary'
    | 'warning'
    | 'danger'
    | 'grey200';

export type ITWeights = 'regular' | 'medium' | 'semiBold' | 'bold';
export type ITAlign = 'center' | 'left';
export type ITTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none';

export interface ITTypography {
    variant: ITVariants;
    color?: ITColors;
    weight?: ITWeights;
    align?: ITAlign;
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    truncate?: number;
    style?: React.CSSProperties;
    transform?: ITTransform;
}


export const Typography: FC<ITTypography> = (props) => {
    const {
        variant,
        color,
        weight,
        align = 'left',
        children,
        onClick,
        className,
        truncate,
        style,
        transform = 'none',
    } = props;

    const Tags: Record<ITVariants, keyof JSX.IntrinsicElements> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        bodyText: 'p',
        smallText: 'p',
    };

    const classNamedGenerated = classNames(
        styles[variant],
        color && styles[color],
        weight && styles[weight],
        styles[transform],
        styles[align],
        className,
    );

    const TagName = Tags[variant];

    const truncateString = (str: ReactNode, maxNumber: number): ReactNode => {
        if (typeof str === 'string') {
            return str.length <= maxNumber ? str : str.slice(0, maxNumber) + '...';
        }
        return str;
    };

    return (
        <TagName onClick={onClick} className={classNamedGenerated} style={style}>
            {truncate ? truncateString(children, truncate) : children}
        </TagName>
    );
};
