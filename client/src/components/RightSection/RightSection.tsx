import './RightSection.css';

export default function RightSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className='right-section'>{children}</section>;
}
