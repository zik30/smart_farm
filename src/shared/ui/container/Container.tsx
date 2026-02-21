import classNames from 'classnames'
import styles from './Container.module.scss'
import type { FC, ReactNode } from 'react';

interface IContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container: FC<IContainerProps> = ({ children, className }) => {
    return (
        <div className={classNames(styles.container, className)}>{children}</div>
    )
}

