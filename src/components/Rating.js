import { useState } from "react";
import { Container, Radio, Rating } from "./RatingStyles";
import { FaStar } from "react-icons/fa";

const Rate = () => {
  const [rate, setRate] = useState(0);
  console.log("Rating:", rate);
  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givingRating = index + 1;
        console.log(givingRating);
        return (
          <label>
            <Radio
              type="radio"
              value={givingRating}
              onClick={() => {
                setRate(givingRating);
                alert(
                  `are you sure you want to give ${givingRating}`
                );
              }}
            ></Radio>
            <Rating>
              <FaStar
                color={
                  givingRating < rate || givingRating === rate
                    ? "000"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};

export default Rate;
