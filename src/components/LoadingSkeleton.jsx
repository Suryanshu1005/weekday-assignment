import {Card} from "@mui/material";
import React from "react";
import LoadingSkeletonCard from "./LoadingSkeletonCard";

const LoadingSkeleton = () => {
  return (
    <Card
      sx={{
        margin: "20px",
        display: "grid",
        gridTemplateColumns: " repeat(3, 1fr) ",
        gap: "30px",
        marginBottom: "10px",
        boxShadow: "none",
      }}
    >
      <LoadingSkeletonCard />
      <LoadingSkeletonCard />
      <LoadingSkeletonCard />
      <LoadingSkeletonCard />
      <LoadingSkeletonCard />
    </Card>
  );
};

export default LoadingSkeleton;
