interface CardInterface {
    suit: string;
    rank: string | number;
}

class PokerHand {
    hand: CardInterface[] = [];

    constructor(hand: CardInterface[]) {
        console.log(hand);
        this.hand = hand;
    }
    getOutcome = () => {
        let result = null;
        const suitsVariants: {[key: string]: number} = {'diams': 0, 'hearts': 0, 'clubs': 0, 'spades': 0};
        const allSuits = this.hand.map(card => card.suit);
        const allRanks = this.hand.map(card => card.rank);

        const dublicatesRanks = allRanks.filter((number, index, numbers) =>{
            return numbers.indexOf(number) !== index
        });

        if (dublicatesRanks.length === 1 ) {
            result = 'One pair';
        } else if (dublicatesRanks.length === 2 ) {
            result = 'Two pair';
        } else if (dublicatesRanks.length === 3 ) {
            result = 'Three pair';
        }

        allSuits.forEach(suit => {
            suitsVariants[suit]++;
        });

        for(const key in suitsVariants) {
            if (suitsVariants[key] === 5 ) {
                result += ' /Flash';
            }
        }

        return result
    }
}

export default PokerHand




