import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../../actions/simpleAction';

class commonLayout extends Component {
  constructor(props){
    super(props);
    this.simpleAction = this.simpleAction.bind(this);
  }

  simpleAction = (event) => {
    this.props.simpleAction();
  }
  
  render() {
    return (
      <Fragment>
        <header className="common-header">
          <div className="row m-l-0 m-r-0">
            <div className="col-md-6">
              <div className="common-appName">Ecom
              </div>
            </div>
            <div className="col-md-6">
              <div className="common-appName">Ecom
              </div>
            </div>
            {/* <div className="col-md-3 common-appName m-l-1">Ecom</div> */}
          </div>
        </header>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(commonLayout);


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { simpleAction } from '../../actions/simpleAction';

// class commonLayout extends Component {
//   constructor(props){
//     super(props);
//     this.simpleAction = this.simpleAction.bind(this);
//   }

//   simpleAction = (event) => {
//     this.props.simpleAction();
//   }
  
//   render() {
//     return (
//       <div className="App">
//         <pre>
//         {
//           JSON.stringify(this.props)
//         }
//         </pre>
//         <button onClick={this.simpleAction}>Test redux action</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   ...state
// });

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// });

// export default connect(mapStateToProps, mapDispatchToProps)(commonLayout);