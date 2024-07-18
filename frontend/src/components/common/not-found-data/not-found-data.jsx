import React from 'react';
import notFoundImage from '../../../assets/not-found-data.png';
import './not-found-data.css'
const NotFoundData = () => {
    return (
        <div className="not-found-data__container">
            <img height={'200px'} src={notFoundImage} alt="not found image"/>
        </div>
    );
};

export default NotFoundData;