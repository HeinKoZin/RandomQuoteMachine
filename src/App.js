import React from "react";
import "./styles.css";
import QuoteCard from "./Components/QuoteCard";
import Header from "./Components/Header";
import Main from "./Components/Main";

class App extends React.Component {
  state = {
    quote: [],
    isLoad: false
  };

  render() {

    const Display = () =>{
      if(this.state.isLoad){
        return <QuoteCard quote={this.state.quote}/>
      }else{
        return <p>Loading.......</p>
      }
    }
    return (
      <div className="App">
        <Header />
        <Main>
          <Display/>
        </Main>
      </div>
    );
  }



  componentDidMount() {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ quote: result });
          this.setState({isLoad: true});
          console.log(result);
        },
        error => {
          this.setState({ quotes: "Error" });
        
          console.log(error);
        }
      );
  }
}

export default App;
