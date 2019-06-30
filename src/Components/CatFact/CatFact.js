import React, { Component } from "react";

class CatFact extends Component {
  state = {
    cat: "",
    error: false
  };

  getNextFact = () => {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    fetch(proxyUrl+"http://the-cat-fact.herokuapp.com/api/randomfact", {
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.data[0].fact);
        this.setState({
          cat: data.data[0].fact
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
        <span className="random__fact__text">{this.state.cat}</span>
      </>
    );
  }
}

export { CatFact };
