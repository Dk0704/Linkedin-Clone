import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
        <div className="widgets_art_left">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets_art_right">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )  
  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
      {newsArticle("The first Article", "Top News -9839 reads")}
      {newsArticle("The first Article", "Top News -9839 reads")}
      {newsArticle("The first Article", "Top News -9839 reads")}
      {newsArticle("The first Article", "Top News -9839 reads")}
      {newsArticle("The first Article", "Top News -9839 reads")}
      {newsArticle("The first Article", "Top News -9839 reads")}
    </div>
  )
}

export default Widgets
