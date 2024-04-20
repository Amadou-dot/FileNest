import styles from './MainContent.module.css';
/**
 * 
 * @returns Main element with children
 */
export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className={styles.main}>{children}</main>;
}
