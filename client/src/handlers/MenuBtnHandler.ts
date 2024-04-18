import { useState, useEffect } from 'react';

export default function MenuBtnHandler() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const leftSection = document.querySelector('.left-section') as HTMLElement;
    if (!leftSection) return;

    if (isMenuOpen) {
      leftSection.style.left = '-160px';
    } else {
      leftSection.style.left = '0';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return toggleMenu;
}