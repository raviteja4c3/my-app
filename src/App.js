import './App.css';
import Myheader from './components/Myheader';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <Myheader name="Ravi"/>
//     </div>
//   );
// }

//Changed App function component to a App class component. 
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: "Teja's"
    }
  }

  render(){
    return(
      <div className="App">
        <Myheader name={this.state.name} author={'Ravi'} />
      </div>
    )
  }
}

export default App;
