import React from "react";
import posts from "./data.json";
import { Card } from "./Card";

const Posts = () => {
  const data = posts["data"];
  return (
    <div className="grid grid-cols-3 gap-4 content-start">
      {data.map((image) => {
        return <Card owner={image["owner"]} imageUrl={image["imageUrl"]} />;
      })}
    </div>
  );
};

export default Posts;
