import React from 'react'
import CommentsDetail from './CommentsDetail'
import ApprovalCard from './ApprovalCard'

function App() {
  return (
      <div className="ui container comments">
       <ApprovalCard>
        <CommentsDetail AuthorName="Jane" Text="okay okay" Time="Today 6:00PM"/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentsDetail AuthorName="Doe" Text="bye okay" Time="Today 6:00PM"/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentsDetail AuthorName="James"
         Text="bye okay" Time="Today 6:00PM"/>
         </ApprovalCard>
    </div> 
  )
}

export default App;
