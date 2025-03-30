import CardsData from "../../assets/cards/Cards_data";
import "./TitleCard.scss";
const TitleCards = () => {
	return (
		<div className="titlecards">
			<h2>Popular on Netflix</h2>
			<div className="card-list">
				{CardsData.map((card, index) => (
					<div className="card" key={index}>
						<img src={card.image} alt="" />
						<p>{card.name}</p>
					</div>
				))}
			</div>
		</div>
	);	
};

export default TitleCards;
