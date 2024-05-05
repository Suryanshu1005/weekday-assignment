import {Card, Skeleton} from "@mui/material";
import React from "react";

const LoadingSkeletonCard = () => {
  return (
    <Card
      sx={{
        width: "350px",
        height: "570px",
        padding: "20px",
        boxShadow:
          "0px 2px 5px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        border: "5px solid rgba(255, 255, 255,255)",
      }}
    >
      <Skeleton
        sx={{
          borderRadius: "20px",
          marginBottom: "35px",
          maxWidth: "150px",
          marginTop: "25px",
          // marginLeft: "20px",
        }}
        variant="rectangular"
        width={200}
        height={40}
      />
      <div style={{display: "flex", gap: "10px"}}>
        <Skeleton variant="rectangular" width={38} height={55} />
        <div style={{marginTop: "-10px"}}>
          <Skeleton variant="text" width={145} height={50} />
          <Skeleton
            variant="text"
            width={110}
            height={20}
            sx={{marginBottom: "5px"}}
          />
          <Skeleton variant="text" width={90} height={20} />
        </div>
      </div>
      <div style={{display: "grid", justifyItems: "center"}}>
        <Skeleton
          variant="text"
          width={300}
          height={40}
          sx={{marginBottom: "12px"}}
        />
        <Skeleton
          variant="text"
          width={300}
          height={40}
          sx={{marginBottom: "3px"}}
        />
        <Skeleton
          variant="text"
          width={300}
          height={40}
          sx={{marginBottom: "5px"}}
        />
        <Skeleton
          variant="text"
          width={300}
          height={40}
          sx={{marginBottom: "5px"}}
        />
        <Skeleton
          variant="text"
          width={300}
          height={40}
          sx={{marginBottom: "5px"}}
        />
        <Skeleton
          variant="text"
          width={300}
          height={90}
          sx={{marginBottom: "-10px"}}
        />
        <Skeleton
          variant="text"
          width={300}
          height={90}
          sx={{marginBottom: "5px"}}
        />
      </div>
    </Card>
  );
};

export default LoadingSkeletonCard;
