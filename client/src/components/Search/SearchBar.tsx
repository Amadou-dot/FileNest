import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.search}>
      <button>
        <i className='ri-search-2-line'></i>
      </button>
      <input type="text" placeholder='Search files' />
      <button><i className="ri-equalizer-line"></i></button>
    </div>
  );
}
