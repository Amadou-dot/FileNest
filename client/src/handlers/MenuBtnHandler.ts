let leftSection: HTMLElement;
let isMenuOpen = false;

window.onload = () => {
  leftSection = document.querySelector('.left-section') as HTMLElement;
  isMenuOpen = leftSection.style.left === '0px';
};

export default function MenuBtnHandler(): void {
  if (!leftSection) return;

  if (isMenuOpen) leftSection.style.left = '-160px';
  else leftSection.style.left = '0';
  isMenuOpen = !isMenuOpen;
}
