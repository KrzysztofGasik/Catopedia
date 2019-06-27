import React, { Component } from "react";

class CatFacts extends Component {
  state = {
    cat: "",
    error: false
  };

  getNextFact = () => {
    const pageNumber = Math.floor(Math.random() * (51 - 1 + 1)) + 1;
    let pageId = Math.floor(Math.random() * (24 - 0 + 1)) + 0;
    if (pageNumber > 50) {
      pageId = Math.floor(Math.random() * (14 - 0 + 1)) + 0;
    }

    const ourHeaders = new Headers();

ourHeaders.append("Content-Type", "application/json");

    fetch(
      // `http://www.catfact.info/api/v1/facts.json?page=${pageNumber}&per_page=${pageId}`
      
      'https://catfact.ninja/fact'
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.facts);
        this.setState({
          // cat: data.facts[0].details
          cat: data
        });
      })
      .catch(() => {
        this.setState({
          error: true
        });
      });
  };

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Błąd komunikacji z serwerem</h1>
          <button className="random__fact" onClick={this.getNextFact}>
            Spróbuj ponownie
          </button>
        </div>
      );
    }
    return (
      <>
        <button className="random__fact" onClick={this.getNextFact}>
          Random fact
        </button>
        <span>{this.state.cat}</span>
      </>
    );
  }
}

export { CatFacts };
