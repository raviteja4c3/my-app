import './App.css';
import Myheader from './components/Myheader';
import React from 'react';
import { Segment, Input } from 'semantic-ui-react';

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
      name: "Teja's",
      author: "Ravi"
    }
     //Bind the required method/functon to the Component Instance.
    this.onChaange = this.onChaange.bind(this)
  }

  onChaange(event, data){
      this.setState({
        name: data.value
      });
  }

  render(){
    console.log(this.state);
    return(
      <div className="App">
        <Myheader name={this.state.name} author={this.state.author} />
        
        <Segment basic>
            <Input label={'Input Form'} value={this.state.name} onChange={this.onChaange}/>
        </Segment>
        
      </div>
    ) 
  }
}

export default App;
