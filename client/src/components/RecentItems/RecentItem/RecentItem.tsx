import styles from '../RecentItems.module.css';
export default function RecentItem({icon, name, size, active}: {icon: string, name: string, extension: string, size: string, active?: boolean}) {
  return (
    <tr className={`${styles['recent-item']} ${active ? 'active':''} ${styles['table-row']}`}>
      <td className={`${styles['table-data']} ${styles.icon}`}><i className={icon}></i></td>
      <td className={`${styles['table-data']} ${styles.name}`}>{name}</td>
      <td className={`${styles['table-data']} ${styles.extension}`}>{name.split('.')[1].toUpperCase()} File</td>
      <td className={`${styles['table-data']} ${styles.size}`}>{size} MB</td>
      <td className={`${styles['table-data']} ${styles.more}`}><i className='ri-more-fill'></i></td>
    </tr>
  );
}
