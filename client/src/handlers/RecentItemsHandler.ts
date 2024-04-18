interface ItemElement extends HTMLElement {
    classList: DOMTokenList;
  }
  
  export default function RecentItemsHandler(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const itemElement = (event.target as ItemElement).closest('.recent-item');
    if (itemElement) {
      const items = document.querySelectorAll('.recent-item');
      items.forEach(i => i.classList.remove('active'));
      itemElement.classList.add('active');
    }
    //TODO: Add logic to navigate to the selected item
  }
  