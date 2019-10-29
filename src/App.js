import React from 'react';

import './App.css';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

import CommentDetail from './CommentDetail';

function App() {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
          <h4> Warning! </h4>
          Are you sure?
        </div>

      </ApprovalCard>

      <ApprovalCard >  
      
       <CommentDetail author="Sam" timeAgo="Today at 4:45 pm" comment="Nice Blog post!" imageSrc={faker.image.avatar()}/>

       </ApprovalCard>

       <ApprovalCard>
       <CommentDetail author="Taleb" timeAgo="Yesterday at 5 pm" comment="Oh so nice" imageSrc={faker.image.avatar()}/>
       </ApprovalCard>
    
    </div>
  );
}

export default App;
