import React from 'react';
import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
    return (
        <div className={styles.root}>
            <span>😕</span>
            <br />
            <h1>Ничего не найдено</h1>
            <div className={styles.desc}>
                Такой страницы на существует, либо Вы перешли по неправильному адресу.
            </div>
        </div>
    );
}

export default NotFoundBlock;