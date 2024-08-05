import styles from '../components/RecentItems/RecentItems.module.css';
interface ItemElement extends HTMLElement {
  classList: DOMTokenList;
}

export default function RecentItemsHandler(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
  const itemElement = (event.target as ItemElement).closest(
    `.${styles['.recent-item']}`
  );
  if (itemElement) {
    const items = document.querySelectorAll(`.${styles['.recent-item']}`);
    items.forEach(i => i.classList.remove(styles.active));
    itemElement.classList.add(styles.active);
  }
  //TODO: Add logic to navigate to the selected item
}
