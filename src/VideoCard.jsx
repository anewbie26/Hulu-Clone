import React from 'react'
import './videoCard.css'
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@mui/icons-material';
import { forwardRef } from 'react';

const base_url = 'https://image.tmdb.org/t/p/w1280/orignal/';

const  VideoCard = forwardRef(({movie}, ref) => {

  return (
    <div ref={ref} className='videoCard'>
      <img src={`${base_url}${movie.backdrop_path || movie.poster_path} `} alt="as" />

      <TextTruncate
        line ={1}
        element = "p"
        truncateText="..."
        text={movie.overview}
     / >
      <p></p>
      <h2>{movie.title || movie.orignal_title}</h2>
      <p className='videoCard__stats'>
        {movie.media_type && `${movie.media_type} .`}
        {movie.release_date || movie.first_air_date}  .

        {"   "}  <ThumbUpSharp/> {"   "} 
        {movie.vote_count}</p>
    </div>
  )
});

export default VideoCard;
