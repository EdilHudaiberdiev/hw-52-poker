class Card{
    public suit: string;
    public rank: string | number;

    constructor(suit: string, rank: string | number) {
        this.suit = suit;
        this.rank = rank;
    }
}

export default Card;