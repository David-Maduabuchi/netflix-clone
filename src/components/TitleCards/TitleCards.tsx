import { useEffect, useRef } from "react";
import CardsData from "../../assets/cards/Cards_data";
import "./TitleCard.scss";

interface Props {
  title: string;
}

const TitleCards = ({title}: Props) => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel as EventListener);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel as EventListener);
      }
    };
  }, []);

  return (
    <div className="titlecards">
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
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
