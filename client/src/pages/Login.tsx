import styles from './Login.module.css';
import { FormEvent, useEffect } from 'react';

export default function Login() {
  document.title = 'FileNest | Login';
  useEffect(() => {
    const handleSwitch = () => {
      const container = document.querySelector(
        `.${styles.container}`
      ) as HTMLDivElement;
      const signupButton = document.querySelector(
        `.${styles.signupSection} header`
      ) as HTMLDivElement;
      const loginButton = document.querySelector(
        `.${styles.loginSection} header`
      ) as HTMLDivElement;
      if (!container || !signupButton || !loginButton) return;
      loginButton.addEventListener('click', () => {
        container.classList.add(styles.active);
      });
      signupButton.addEventListener('click', () => {
        container.classList.remove(styles.active);
      });
    };
    handleSwitch();
  }, []);

  // TODO: Implement handleSignup and handleLogin functions
  function handleSignup(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    throw new Error('Function not implemented.');
  }

  function handleLogin(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.signupSection}>
          <header>Sign up</header>
          <div className={styles.socialButtons}>
            <button>
              <i className='ri-google-fill'></i>Use Google
            </button>
            <button>
              <i className='ri-apple-fill'></i>Use Github
            </button>
          </div>
          <div className={styles.separator}>
            <div className={styles.line}></div>
            <p>Or</p>
            <div className={styles.line}></div>
          </div>
          <form onSubmit={handleSignup}>
            <input type='text' placeholder='Full Name' required />
            <input type='email' placeholder='Email' required />
            <input type='password' placeholder='Password' required />
            <a href='#'>Forgot Password</a>
            <button type='submit' className={styles.btn}>
              Sign up
            </button>
          </form>
        </div>

        <div className={styles.loginSection}>
          <header>Sign in</header>
          <div className={styles.socialButtons}>
            <button>
              <i className='ri-google-fill'></i>Use Google
            </button>
            <button>
              <i className='ri-apple-fill'></i>Use Apple
            </button>
          </div>
          <div className={styles.separator}>
            <div className={styles.line}></div>
            <p>Or</p>
            <div className={styles.line}></div>
          </div>
          <form onSubmit={handleLogin}>
            <input type='email' placeholder='Email' required />
            <input type='password' placeholder='Password' required />
            <a href='#'>Forgot Password</a>
            <button type='submit' className={styles.btn}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
