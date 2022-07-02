import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getConfig from 'next/config';
import MainLayout from '../../layouts/MainLayout';
import SpeakerInfoBlock from './blocks/SpeakerInfoBlock';
import TalkCard from './blocks/TalkCard';
import styles from './HomePage.module.css';


const { publicRuntimeConfig } = getConfig();

export default function HomePage({
    talks
}) {
    const [ isCreateTalkDialogOpen, setIsCreateTalkDialogOpen ] = useState(false);
    const [ newTalkTitle, setNewTalkTitle ] = useState('');
    const [ newTalkDescription, setNewTalkDescription ] = useState('');
    const [ newTalkPoster, setNewTalkPoster ] = useState(null);

    function handleCloseCreateTalk() {
        setIsCreateTalkDialogOpen(false);
    }

    function handleOpenCreateTalk() {
        setIsCreateTalkDialogOpen(true);
    }

    function handleChangeNewTalkTitle(e) {
        setNewTalkTitle(e.target.value);
    }

    function handleChangeNewTalkDescription(e) {
        setNewTalkDescription(e.target.value);
    }

    function handleChangeNewTalkPoster(e) {
        setNewTalkPoster(e.target.files[0]);
    }

    async function handleCreateTalk() {
        try {
            const formData = new FormData();

            formData.append('title', newTalkTitle);
            formData.append('description', newTalkDescription);
            formData.append('poster', newTalkPoster);

            await axios({
                url            : `${publicRuntimeConfig.apiRootUrl}/api/v1/talks`,
                'Content-Type' : 'multipart/form-data',
                method         : 'post',
                data           : formData
            });

            location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <MainLayout>
            <div className={styles.homePage}>
                <SpeakerInfoBlock />
                <div className={styles.addTalkBlock}>
                    <Button onClick={handleOpenCreateTalk} sx={{ fontWeight: 600 }} variant='contained' >
                        Add talk
                    </Button>
                </div>
                <div className={styles.talkList}>
                    {
                        talks.map(talk => (<TalkCard key={talk.id} talk={talk} />))
                    }
                </div>
            </div>
            <Dialog onClose={handleCloseCreateTalk} open={isCreateTalkDialogOpen}>
                <DialogTitle>Create talk</DialogTitle>
                <DialogContent
                    sx={{
                        display       : 'flex',
                        flexDirection : 'column',
                        alignItems    : 'center'
                    }}
                >
                    <TextField
                        className={styles.inputItem}
                        value={newTalkTitle}
                        label='title'
                        onChange={handleChangeNewTalkTitle}
                        fullWidth
                        required
                    />
                    <TextField
                        fullWidth
                        className={styles.inputItem}
                        value={newTalkDescription}
                        label='description'
                        onChange={handleChangeNewTalkDescription}
                    />
                    <TextField
                        className={styles.inputItem}
                        type='file'
                        onChange={handleChangeNewTalkPoster}
                        fullWidth
                    />
                    <Button
                        onClick={handleCreateTalk}
                        sx={{ fontWeight: 600 }}
                        variant='contained'
                        disabled={!newTalkTitle}
                    >
                        Create
                    </Button>
                </DialogContent>
            </Dialog>
        </MainLayout>
    );
}


HomePage.propTypes = {
    talks : PropTypes.array.isRequired
};

