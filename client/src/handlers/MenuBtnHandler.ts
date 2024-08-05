import { useState, useEffect } from 'react';
import styles from '../components/LeftSection/LeftSection.module.css'
export default function MenuBtnHandler() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const leftSection = document.querySelector(`.${styles['left-section']}`) as HTMLElement;
    console.log(styles['left-section']);
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