import React from 'react';
import PropTypes from 'prop-types';
import styles from './TalkCard.module.css';

export default function TalkCard({
    talk
}) {
    return (
        <div className={styles.talkCard}>
            <div className={styles.posterWrapper}>
                <img src={talk.posterUrl} alt='talk poster' />
            </div>
            <div className={styles.content}>
                <h2>
                    {talk.title}
                </h2>
                <div>
                    {talk.description}
                </div>
            </div>
        </div>
    );
}

TalkCard.propTypes = {
    talk : PropTypes.any.isRequired
};
