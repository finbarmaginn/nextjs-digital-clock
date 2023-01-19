import styles from "./index.module.css";
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div>
          <h1 role='heading'>NextJS Digital Clock</h1>
        </div>
        <div>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
