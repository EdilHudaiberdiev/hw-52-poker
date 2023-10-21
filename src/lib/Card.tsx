import React from "react";

interface CardInterface {
    suit: string;
    rank: string;
}

class Card extends React.Component <CardInterface> {
    public suit: string;
    public rank: string;

    constructor(props: CardInterface) {
        super(props);
        this.suit = this.props.suit;
        this.rank = this.props.rank;
    }


    render() {
        return (
            <span className="card rank-K diams">
                <span className="rank">K</span>
                <span className="suit">♦</span>
            </span>
        );
    }
}

export default Card;