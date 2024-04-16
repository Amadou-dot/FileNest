import "./LeftSection.css";
export default function LeftSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className='left-section'>{children}</section>;
}
