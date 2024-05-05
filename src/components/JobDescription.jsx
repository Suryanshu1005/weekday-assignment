import React, {useState} from "react";
import Typography from "@mui/material/Typography";

const JobDescription = ({initialText, fullText}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Typography fontSize={20} color="black">
        About Company:{" "}
      </Typography>
      <Typography
        variant="body2"
        letterSpacing={1}
        fontSize={18}
        fontWeight={600}
        color="black"
        fontFamily="Lexend"
      >
        About us:{" "}
      </Typography>
      <Typography fontSize={17} variant="body1" color="ActiveBorder">
        {showMore ? (
          <div
            style={{
              maskImage:
                "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
              fontFamily: "Lexend",
              fontWeight: "300",
            }}
          >
            {fullText}
          </div>
        ) : (
          <div
            style={{
              maskImage:
                "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
              fontFamily: "Lexend",
              fontWeight: "300",
            }}
          >
            {" "}
            {initialText}
          </div>
        )}
        {/* Show More button */}
        {!showMore && fullText.length > initialText.length && (
          <span
            onClick={toggleShowMore}
            style={{
              color: "#5953de",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textDecorationLine: "none",
              padding: "10px 0 10px 0",
              fontSize: "19px",
            }}
          >
            View Job
          </span>
        )}
      </Typography>
    </>
  );
};

export default JobDescription;
