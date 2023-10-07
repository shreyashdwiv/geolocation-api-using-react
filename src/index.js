import React from 'react';
import ReactDOM from 'react-dom/client';
import Hemis from './hemis';





class App extends React.Component {

 

    state = { latitude: null, errorMessage: ""};
 
    
    componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({ latitude:  position.coords.latitude})
        },
        (error) => {
          this.setState({ errorMessage: error.message})
        }
        )
      }
    
  

  render() {

    if(this.state.latitude && !this.state.errorMessage){
      return      <div> <Hemis  latitude =  { this.state.latitude}/> </div>
    }
    if(!this.state.latitude && this.state.errorMessage){
      return      <div> { this.state.errorMessage} </div>
    }
    else {
      return <div> waiting for user action</div>
    }

  }
  
  
}



// const App = () =>{
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (error) => console.log(error)
//   )
//   return (
//     <div>
//       HELOO WORLD
//     </div>
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <App />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

