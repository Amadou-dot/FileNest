import './Main.css';

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className='main'>{children}</main>;
}
