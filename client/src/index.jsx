import React from "react";
import ReactDOM from "react-dom";
import bar from './bar';
import VideoList from './list-component.jsx';

bar();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  fetch() {
    // this method will be used to set the intital state / display first batch of videos.
    //will also be ran on click of 'see more videos' to add the videos listed. Max?

  }

  render() {
    return (
      < div >
       <h1> Rendering through react</h1>

       <VideoList />
       </div>
        )
   }
}

    ReactDOM.render(<App/>, document.getElementById("app"));