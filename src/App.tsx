import './App.css'
import CardDeck from "./lib/CardDeck.ts";
import {useState} from "react";
import CardItem from "./CardItem/CardItem.tsx";
import PokerHand from "./lib/PokerHand.ts";
interface CardInterface {
    suit: string;
    rank: string | number;
}
let cardDeck = new CardDeck();


const App = () => {
    const [handCard, setHandCard] = useState<CardInterface[]>([]);
    const [result, setResult] = useState<string> ('');

    const getFiveCards = () => {
        setResult('');
        let cards = cardDeck.getCards(5)

        setHandCard(cards);

        let pokerHand = new PokerHand(cards);
        let result = pokerHand.getOutcome();

        if (result !== null ) {
            setResult(result)
        }
    };

    console.log(handCard);
    return (
        <>
            <p>Card count: {cardDeck.cardDeck.length}</p>
            <p>Result of round: {result}</p>
            <div>
                <button type="button" onClick={getFiveCards}>Get 5 cards</button>
            </div>
            <div className="playingCards faceImages">
                {handCard.map(card => (
                    <CardItem key={`${card.rank}-${card.suit}`} rank={card.rank} suit={card.suit}/>
                ))}
            </div>
        </>
    );
};

export default App
