import React from 'react';

class ApprovalCard extends React.Component{

    constructor(props){
        super(props);
        
    }

    render(){
        return (

    <div className="ui card">
        <div className="content"> {this.props.children}</div>
        <div className="extra content">
            <div className="ui two button"> 
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Reject</div>
            </div>
        </div>
    </div>

        );


    }

}

export default ApprovalCard;