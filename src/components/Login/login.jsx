import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleAction';

class login extends Component {
  constructor(props){
    super(props);
    this.simpleAction = this.simpleAction.bind(this);
  }

  simpleAction = (event) => {
    this.props.simpleAction();
  }
  
  render() {
    return (
      <div className="ecom-bg">
          <header>
              This is a header.
          </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(login);