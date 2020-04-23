import React from "react";
import "./styles.css";
import QuoteCard from "./Components/QuoteCard";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

class App extends React.Component {
  state = {
    quote: [],
    isLoad: false
  };

  newQuote = () => {
    fetch("https://programming-quotes-api.herokuapp.com/quotes/random")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ quote: result });
          this.setState({ isLoad: true });
          // console.log(result);
        },
        error => {
          this.setState({ quotes: "Error" });

          console.log(error);
        }
      );
  };

  render() {
    const Display = () => {
      if (this.state.isLoad) {
        return <QuoteCard quote={this.state.quote} newQuote={this.newQuote} />;
      } else {
        return <p>Loading.......</p>;
      }
    };
    return (
      <div className="App">
        <Header />
        <Main>
          <Display />
        </Main>
        <Footer/>
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      </div>
    );
  }

  componentDidMount() {
    this.newQuote();
  }
}

export default App;
