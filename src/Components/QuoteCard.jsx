import React from "react";

class QuoteCard extends React.Component {
  render() {
    const quote = this.props.quote;
    return (


      
      <div
        className="jumbotron text-left bg-white mt-5"
        id="quote-box"
        style={{ backgroundColor: "white" }}
      >
        <p id="text" style={{ fontSize: 20 }}>
          {quote.en}
        </p>
        <h6 className="text-right" id="author">
          {quote.author}
        </h6>
        <button
          className="btn btn-outline-primary btn-block btn-sm mt-3"
          id="new-quote"
          type="button"
        >
          New Quote
        </button>

        <i className="fa fa-twitter-square fa-2x mt-2" id="tweet-quote" />
      </div>
    );
  }
}

export default QuoteCard;
