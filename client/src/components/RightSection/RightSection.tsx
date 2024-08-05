import styles from './RightSection.module.css';

export default function RightSection({
  children, className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={className ? `${className}`: `${styles['right-section']}`}>{children}</section>;
}
