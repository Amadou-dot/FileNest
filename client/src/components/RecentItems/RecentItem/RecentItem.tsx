export default function RecentItem({icon, name, size, active}: {icon: string, name: string, extension: string, size: string, active?: boolean}) {
  return (
    <tr className={`recent-item${active ? 'active':''}`}>
      <td className='icon'><i className={icon}></i></td>
      <td className='name'>{name}</td>
      <td className='extension'>{name.split('.')[1].toUpperCase()} File</td>
      <td className='size'>{size} MB</td>
      <td className='more'><i className='ri-more-fill'></i></td>
    </tr>
  );
}
