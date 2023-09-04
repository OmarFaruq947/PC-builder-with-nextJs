import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
const Rating = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="text-[#F1C40F] text-[18px]" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="text-[#F1C40F] text-[18px]" />
        ) : (
          <AiOutlineStar className="text-[#F1C40F] text-[18px]" />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="flex items-center">{ratingStar}</div>
    </>
  );
};

export default Rating;

// call the component and props "rating"

<Rating rating={2} />; // 2 rating
