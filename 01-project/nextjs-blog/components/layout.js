/**
 * file: components/layout.js
 * description: file responsible for the layout of the application
 * data: 09/28/2022
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import styles from './layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
