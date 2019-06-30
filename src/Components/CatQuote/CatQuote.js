import React, { Component } from "react";

const Quotes = [
  {
    nr: 1,
    quote:
      "never give a cat a name you would mind shouting out in a strained, worried voice around midnight while banging a tin bowl with a spoon. And stick to something short.",
    author: "Terry Pratchett"
  },
  {
    nr: 2,
    quote: "... disharmony, like a cat, gets everywhere.",
    author: "Terry Pratchett"
  },
  {
    nr: 3,
    quote:
      "Susan had never been able to see the attraction in cats. They were owned by the kind of people who liked puddings. There were actual people in the world whose idea of heaven would be a chocolate cat.",
    author: "Terry Pratchett"
  },
  {
    nr: 4,
    quote:
      "​Cats know about people. We have to. No-one else can open cupboards.",
    author: "Terry Pratchett"
  },
  {
    nr: 5,
    quote: "​I'm unreliable! I'm a cat! I wouldn't trust me, and I am me!",
    author: "Terry Pratchett"
  },
  {
    nr: 6,
    quote:
      "Humans, eh? Think they're lords of creation. Not like us cats. We know we are. Ever seen a cat feed a human? Case proven.",
    author: "Terry Pratchett"
  },
  {
    nr: 7,
    quote:
      "It was very unusual for Maurice to feel sympathetic to anyone who wasn't Maurice. In a cat, that is a major character flaw.",
    author: "Terry Pratchett"
  },
  {
    nr: 8,
    quote:
      "Glamour. Elves are beautiful. They’ve got,’ she spat the word, ‘style. Beauty. Grace. That’s what matters. If cats looked like frogs we’d realize what nasty cruel little bastards they are.",
    author: "Terry Pratchett"
  },
  {
    nr: 9,
    quote: "​Cats gravitate to kitchens like rocks gravitate to gravity.",
    author: "Terry Pratchett"
  },
  {
    nr: 10,
    quote:
      "For wolves and pigs and bears, thinking that they’re human is a tragedy. For a cat, it’s an experience.",
    author: "Terry Pratchett"
  },
  {
    nr: 11,
    quote:
      "Greebo turned upon Granny Weatherwax a yellow-eyed stare of self-satisfied malevolence, such as cats always reserve for people who don’t like them, and purred. Greebo was possibly the only cat who could snigger in purr.",
    author: "Terry Pratchett"
  },
  {
    nr: 12,
    quote:
      "Cats spend a lot of time carefully eyeing one another. When they have to fight, that’s merely to rubber-stamp something that’s already been decided in their heads.",
    author: "Terry Pratchett"
  },
  {
    nr: 13,
    quote:
      "​… people who like cats’re capable of anythin’, you can’t trust ‘em …",
    author: "Terry Pratchett"
  },
  {
    nr: 14,
    quote:
      "This cat, on the other hand, was its own animal. All cats give that impression, of course, but instead of the mindless animal self-absorption that passes for secret wisdom in the creatures, Greebo radiated genuine intelligence. He also radiated a smell that would have knocked over a wall and caused sinus trouble in a dead fox.",
    author: "Terry Pratchett"
  },
  {
    nr: 15,
    quote:
      "Greebo had spent an irritating two minutes in that box. Technically, a cat locked in a box may be alive or it may be dead. You never know until you look. In fact, the mere act of opening the box will determine the state of the cat, although in this case there were three determinate states the cat could be in: these being Alive, Dead, and Bloody Furious.",
    author: "Terry Pratchett"
  },
  {
    nr: 16,
    quote:
      "Even a witch can be out-looked by a cat that has had it up to here …",
    author: "Terry Pratchett"
  },
  {
    nr: 17,
    quote:
      "Wizards were competitive. It was part of wizardry.  Wizards have no more idea of a friendly game than cats have of a friendly mouse.",
    author: "Terry Pratchett"
  },
  {
    nr: 18,
    quote: "She read the way a cat eats: furtively, daring anyone to notice.",
    author: "Terry Pratchett"
  },
  {
    nr: 19,
    quote:
      "Witches were a bit like cats. They didn’t much like one another’s company, but they did like to know where all the other witches were, just in case they needed them.",
    author: "Terry Pratchett"
  },
  {
    nr: 20,
    quote:
      "Cats make ideal time travellers because they can’t handle guns.  This makes the major drawback of time travel – that you might accidentally shoot you own grandfather – very unlikely.",
    author: "Terry Pratchett"
  },
  {
    nr: 21,
    quote:
      "Cats are like witches.  They don’t fight to kill, but to win.  There is a difference.  There’s no point in killing an opponent.  That way, they won’t know they’ve lost, and to be real winner you have to have an opponent who is beaten and knows it. There’s no triumph over a corpse, but a beaten opponent, who will remain beaten every day of the remainder of their sad and wretched life, is something to treasure.",
    author: "Terry Pratchett"
  },
  {
    nr: 22,
    quote:
      `Crash hefted his guitar and played a chord.
      ‘My word!’ said Ridcully.
      ‘Sir?’
      ‘That sounded exactly like a cat trying to go to the lavatory through a sewn-up bum.`,
    author: "Terry Pratchett"
  },
  {
    nr: 23,
    quote:
      "Nanny Ogg found herself embarrassed even to think about this, and this was unusual because embarrassment normally came as naturally to Nanny as altruism comes to a cat.",
    author: "Terry Pratchett"
  },
  {
    nr: 24,
    quote:
      `You haven’t got the morals of a cat, Gytha Ogg.’
      ‘Now, Esme, you know that’s not true.’
      ‘All right. You have got the morals of a cat, then.’
      ‘That’s better.`,
    author: "Terry Pratchett"
  },
  {
    nr: 25,
    quote:
      "... you can't teach cats to do anything.  No, not a thing.  You might think you can, but that is because you've misunderstood what's going on.  You think it's the cat turning up obediently at the back door at ten o'clock for dinner.  From the cat's point, a blob on legs has been trained to take a tin out of the fridge every night.",
    author: "Terry Pratchett"
  }
];

class CatQuote extends Component {
  state = {
    quoteNr: 0,
    quoteArr: []
  };

  getRandom = () => {
    let quoteNr =
      Math.floor(Math.random() * (Math.floor(25) - Math.ceil(1) + 1)) +
      Math.ceil(1);
    let quoteFilter = Quotes.filter(quote => quote.nr == quoteNr);
    this.setState({
      quoteNr: quoteNr,
      quoteArr: quoteFilter
    });
  };

  render() {
    return (
      <>
        <button className="random__quote" onClick={this.getRandom}>
          Get random quote from Terry's Pratchett books
        </button>
        {this.state.quoteNr > 0 &&
          this.state.quoteArr.map(item => (
            <div key={item.nr}>
              <blockquote className="random__quote__text">{item.quote}</blockquote>
              <p>{item.author}</p>
            </div>
          ))}
      </>
    );
  }
}

export { CatQuote };
