import { classNames } from 'shared/lib/classNames/classNames';
import style from './Test.module.scss';

interface TestProps {
    className?: string;
}

export function Test ({ className }: TestProps) {
    return (
        <div className={classNames(style.test, {}, [className])}>

        </div>
    );
}
