export default function QuickAccessItem({
  icon,
  title,
  files,
  totalFiles,
}: {
  icon: string;
  title: string;
  files: number;
  totalFiles: number;
}) {
  return (
    <div className='item'>
      <i className={icon}></i>
      <h5>{title}</h5>
      <p>
        {files}/{totalFiles} files
      </p>
    </div>
  );
}
