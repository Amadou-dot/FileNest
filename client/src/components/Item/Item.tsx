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
  return (
    <div className={`item ${active ? 'active' : ''}`}>
      <i className={icon}></i>
      <h3>{name}</h3>
    </div>
  );
}
