import React from 'react';

const SingleNewsCard = ({singleNews}) => {
    const {id,
        category_id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        image_url,
        details,
        tags,
        others,
        production}=singleNews
    return (
        <div>
            <h1>{title}</h1>
            <img src={
thumbnail_url} alt="" />
           
        </div>
    );
};

export default SingleNewsCard;