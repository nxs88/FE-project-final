import type { ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';
import styles from './CustomLink.module.scss';

type Props = {
  children: ReactNode;
  to: string;
  icon?: ReactNode;
};

export default function CustomLink({ children, to, icon }: Props) {
  const match = useMatch({ path: to, end: true });
  const activeLink = match ? `${styles.link} ${styles.active}` : styles.link;
  return (
    <Link to={to} className={activeLink}>
      {icon}
      {children}
    </Link>
  );
}
