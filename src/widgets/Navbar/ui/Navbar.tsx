import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export function Navbar ({ className }: NavbarProps) {
  return (
    <div className={classNames(style.navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Main</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
    </div>
  )
}
