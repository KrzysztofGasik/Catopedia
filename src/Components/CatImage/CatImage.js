import React, { Component } from "react";

class CatImage extends Component {
  state = {
    cat: "",
    error: false
  };

  getNextCat = () => {
    fetch("https://aws.random.cat/meow")
      .then(response => response.json())
      .then(data => {
        this.setState({
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
        <div className="random__cat__errorBox">
          <h1>Błąd konmunikacji z serwerem</h1>
          <button>Spróbuj ponownie</button>
        </div>
      );
    }
    return (
      <>
        <button className="random__cat" onClick={this.getNextCat}>Get random cat image</button>
        <img src={this.state.cat.file}/>
      </>
    );
  }
}

export {CatImage};
