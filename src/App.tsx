import './App.css'
import CardDeck from "./lib/CardDeck.ts";

let cardDeck = new CardDeck();
console.log(cardDeck.getCards(5));
const App = () => {
    console.log(cardDeck);
    return (
        <div className="playingCards">

        </div>
    );
};



export default App
