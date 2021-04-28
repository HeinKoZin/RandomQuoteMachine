import React from "react";

class QuoteCard extends React.Component {


    newQuote = () =>{
      this.props.newQuote();
    }

    render() {
    const quote = this.props.quote;
    return (
      <div
        className="jumbotron text-left bg-white mt-5"
        id="quote-box"
        style={{ backgroundColor: "white" }}
      >
        <p id="text" style={{ fontSize: 20 }}>
          {quote.quote}
        </p>
        <h6 className="text-right" id="author">
          {quote.author}
        </h6>
        <button
          className="btn btn-outline-primary btn-block btn-sm mt-3"
          id="new-quote"
          type="button" 
          onClick={this.newQuote}
        >
          New Quote
        </button>

        <a className="fa fa-twitter-square fa-2x mt-2" id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote} By ${quote.author}`}/>
      </div>
    );
  }
}

export default QuoteCard;
