import { Link } from 'react-router-dom';
import './Item.css'
export default function Item({
  name,
  icon,
  active,
}: {
  name: string;
  icon: string;
  active?: boolean;
}) {
  const path = name === 'Dashboard' ? '/' : `/${name.toLowerCase()}`;
  return (
    <Link className={`item ${active ? 'active' : ''}`} to={path}>
      <i className={icon}></i>
      <h3>{name}</h3>
    </Link>
  );
}
