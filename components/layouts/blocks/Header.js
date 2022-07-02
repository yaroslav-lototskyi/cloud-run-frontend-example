import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <a className={styles.logoLink} href='https://my-talks.net'>
                <img
                    width='64' height='50' src='/logo.png'
                    alt='logo'
                />
            </a>
        </div>
    );
}
