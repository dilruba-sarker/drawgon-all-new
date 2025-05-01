import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleNewsCard from './SingleNewsCard';


const NewsDetails = () => {
      
   const [singleNews,setSingleNews]=useState({})
    const {id}=useParams();
  
    const data=useLoaderData()

    
    useEffect(()=>{
        const findNews=data.find(news=>news.id===(id))
        console.log(findNews);
        setSingleNews(findNews)
    },[data, id, singleNews])
    return (
        <div>
           <h1>news details</h1> 
           <SingleNewsCard singleNews={singleNews}></SingleNewsCard>
           
        </div>
    );
};

export default NewsDetails;