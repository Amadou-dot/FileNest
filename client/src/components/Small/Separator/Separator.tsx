import styles from './Separator.module.css';
export default function Separator({ content }: { content: string }) {
  return <h3 className={styles.separator}>{content}</h3>;
}
