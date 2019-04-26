import React from 'react';
import './HeaderChat.css';

const HeaderChat = (props) => {
    return(
      <div className="hcstyle">
        <h2 className="title">{props.headerTitle}</h2>
      </div>
    )
}

export default HeaderChat