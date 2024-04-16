export default function RecentItem({icon, name, size, selected}: {icon: string, name: string, extension: string, size: string, selected: boolean}) {
  return (
    <tr className={`${selected ? 'selected':''}`}>
      <td className='icon'><i className={icon}></i></td>
      <td className='name'>{name}</td>
      <td className='extension'>{name.split('.')[1].toUpperCase()} File</td>
      <td className='size'>{size} MB</td>
      <td className='more'><i className='ri-more-fill'></i></td>
    </tr>
  );
}
