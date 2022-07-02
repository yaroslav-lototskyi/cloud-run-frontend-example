import { Button } from '@mui/material';
import React from 'react';
import styles from './SpeakerInfoBlock.module.css';

export default function SpeakerInfoBlock() {
    return (
        <div className={styles.speakerInfoBlock}>
            <div className={styles.avatarWrapper}>
                <img className={styles.avatar} src='./profile.png' alt='avatar' />
            </div>
            <div className={styles.info}>
                <div className={styles.fullName}>Yaroslav Lototskyi</div>
                <div>JS developer at Webbylab</div>
                <div className={styles.followWrapper}>
                    <Button disabled variant='contained'>
                        Follow talks
                    </Button>
                </div>
            </div>
        </div>
    );
}
