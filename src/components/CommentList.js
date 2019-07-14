import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
    
    renderComments() {
        this.props.comments.map(comment => {
            <li key={comment}>{comment}</li>
        });
    }

    render() {
      return(
          <div>
              <ul>
                  {this.renderComments()}
              </ul>
          </div>
      )  
    }
}

function mapStateToProps(state) {
    return { comments: state.comments }; // state is the redux store state
}

export default connect(mapStateToProps) (CommentList);