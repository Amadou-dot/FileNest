interface ItemElement extends HTMLElement {
  classList: DOMTokenList;
}

export default function handleClick(
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) {
  const itemElement = (event.target as ItemElement).closest('.item');
  if (itemElement) {
    const items = document.querySelectorAll('.item');
    items.forEach(i => i.classList.remove('active'));
    itemElement.classList.add('active');
  }
}
