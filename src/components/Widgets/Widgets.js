import React from 'react'

import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './Widgets.Style.css';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgetsArticle">
            <div className="widgetsArticleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgetsArticleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
          <div className="widgetsHeader">
            <h2>Linkedin News</h2>
            <InfoIcon />
          </div>
          {newsArticle("I am back", "Top news - 10,000 readers")}
          {newsArticle("Corona virus: India Updates", "Top news - 10,000 readers")}  
          {newsArticle("Farmers still on strike", "Top news - 20,000 readers")}  
          {newsArticle("Tesla hits new heights", "cars & auto - 1,000 readers")}      
        </div>
    )
}

export default Widgets
