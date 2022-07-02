import React from 'react';
import PropTypes from 'prop-types';
import HomePage from '../components/pages/HomePage/HomePage';

export default function Home({
    talks
}) {
    return (
        <HomePage talks={talks}  />
    );
}

Home.propTypes = {
    talks : PropTypes.array.isRequired
};
