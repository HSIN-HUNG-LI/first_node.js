import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// export default App;
//
// function Welcome() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//       <h2>My name is Winnie.</h2>
//     </div>
//   )
// }
//
// export default Welcome

class Welcome extends React.Component {
  render() {
    return <div>
      <h1>Hello React</h1>
      <h2>My name is Winnie.</h2>
    </div>
  }
}


class Main extends React.Component {
  render() {
    return <div>
      <Welcome/>
      <Welcome/>
      <Welcome/>
    </div>
  }
}
class Hello extends React.Component{
  render(){
     return(
        <div>
         {this.props.title ? <p>The title is: {this.props.title}</p>: null}
         {this.props.name ? <p>The name : {this.props.name}</p> : null}
        </div>
        //判斷是否存在的三元運算子
    );
  }
}
//u can only export one Component
export default class ABC extends Component{
   constructor(props){
      super(props)//remember to write props
      this.state = {
         myState: 'My first state',
         saySomething: 'saysomething'
      }
      console.log(1);
   }
   componentDidMount(){
      console.log(2);
   }
   componentDidUpdate(){
      console.log(6);

   }
   render(){
      console.log(3);
    return(
      <div>
         <p>{this.state.myState}</p>
         <p>{this.state.saySomething}</p>
         <p>
         <Hello title="World!"/>
         <Hello title="React!"/>
         <Hello name="Tim"/>
         <button onClick={() => this.setState({ saySomething: 'How are you?' })}>Click</button>
         </p>

      </div>
    )
   }
}
// export default Welcome
