import Card from "./Card.tsx";

interface CardInterface {
    suit: string;
    rank: string | number;
}
class CardDeck {
    allSuits = ['diams', 'hearts', 'clubs', 'spades'];
    allRanks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'k', 'q', 'j'];
    public cardDeck: CardInterface[];

    constructor() {
        this.cardDeck = this.cardDeckGenerate();
    }

    cardDeckGenerate = () =>{
        const cards: CardInterface[] = [];
        this.allSuits.forEach(suit => {
            this.allRanks.forEach(rank =>{
                cards.push(new Card(suit, rank));
            });
        });

        return cards;
    }

    getCard = () => {
        let randomIndex = Math.floor(Math.random() * this.cardDeck.length);
        let randomCard = this.cardDeck[randomIndex];
        this.cardDeck.splice(randomIndex, 1);
        return randomCard;
    }

    getCards = (howMany: number) => {
        const cards: CardInterface[] = [];

        for (let i = 0; i < howMany; i++) {
            if (this.cardDeck.length > 0) {
                let card = this.getCard();
                cards.push(card);
            }
        }

        return cards;
    }
}


export default CardDeck;