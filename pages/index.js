import React from 'react';
import PropTypes from 'prop-types';
import getConfig from 'next/config';
import axios from 'axios';
import HomePage from '../components/pages/HomePage/HomePage';

const { publicRuntimeConfig } = getConfig();

export default function Home({
    talks
}) {
    return (
        <HomePage talks={talks}  />
    );
}

export async function getServerSideProps() {
    try {
        const talksRes = await axios({
            url : `${publicRuntimeConfig.apiRootUrl}/api/v1/talks`
        });

        return {
            props : { talks: talksRes.data?.data }
        };
    } catch (error) {
        // not a PRODUCTION
        return {
            props : { talks: [] }
        };
    }
}

Home.propTypes = {
    talks : PropTypes.array.isRequired
};
