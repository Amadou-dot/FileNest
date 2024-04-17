const leftSection: HTMLElement = document.querySelector(
  '.left-section'
) as HTMLElement;
let isMenuOpen = leftSection.style.left === '0px';
export default function MenuBtnHandler(): void {
  if (isMenuOpen) leftSection.style.left = '-160px';
  else leftSection.style.left = '0';

  isMenuOpen = !isMenuOpen;
}
