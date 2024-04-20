import { Link, useLocation } from 'react-router-dom';
import styles from './Item.module.css';
/**
 *
 * @param name - Name of the item
 * @param icon - Icon of the item
 * @returns Item element with name and icon
 * Note: handles active class based on the current page
 */
export default function Item({ name, icon }: { name: string; icon: string }) {
  const location = useLocation();
  const active =
    location.pathname === `/${name.toLowerCase()}` ||
    (name === 'Dashboard' && location.pathname === '/');
  const path = name === 'Dashboard' ? '/' : `/${name.toLowerCase()}`;
  return (
    <Link
      className={`${styles.item} ${active ? `${styles.active}` : ''}`}
      to={path}>
      <i className={icon}></i>
      <h3>{name}</h3>
    </Link>
  );
}
