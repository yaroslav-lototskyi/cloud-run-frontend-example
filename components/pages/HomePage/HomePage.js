import { Button } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from '../../layouts/MainLayout';
import SpeakerInfoBlock from './blocks/SpeakerInfoBlock';
import TalkCard from './blocks/TalkCard';
import styles from './HomePage.module.css';

export default function HomePage({
    talks
}) {
    return (
        <MainLayout>
            <div className={styles.homePage}>
                <SpeakerInfoBlock />
                <div className={styles.addTalkBlock}>
                    <Button sx={{ fontWeight: 600 }} variant='contained' >
                        Add talk
                    </Button>
                </div>
                <div className={styles.talkList}>
                    {
                        talks.map(talk => (<TalkCard key={talk.id} talk={talk} />))
                    }
                </div>
            </div>
        </MainLayout>
    );
}


HomePage.propTypes = {
    talks : PropTypes.array.isRequired
};

