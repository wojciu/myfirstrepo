'use strict';

class MyComponent extends React.Component {

    
    constructor(props) {
      super(props);
      this.state = {
        text: props.text
      };
      // Change code below this line
      //this.handleClick = this.handleClick.bind(this);
      // Change code above this line
    }
  
    handleClick = () => {
      this.setState({
        text: "You clicked!"
      })
    }
    render() {
      return (
        <div>
          <button className="btn btn-primary m-3" onClick={this.handleClick}>Click Me!</button>
          <h1>{this.state.text}</h1>
          <p>par</p>
        </div>
      );
    }
  };
  

const domContainer = document.querySelector('#container');
ReactDOM.render(< MyComponent text="so wgat?"/>, document.getElementById('container'));