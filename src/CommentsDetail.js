import React from 'react'
import faker from 'faker';

function CommentsDetail({AuthorName,Text,Time}) {
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
        <a href="/" className="author">
          {AuthorName}
        </a>
      <div className="metadata">
    <span className="date">{Time}</span>
      </div>
      <div className="text">
       {Text}
      </div>
        </div>
             </div>
    )
}

export default CommentsDetail
