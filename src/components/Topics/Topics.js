import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch("https://openapi.programming-hero.com/api/quiz");
  const responseBody = await response.json();
  return { topics: responseBody["data"] };
}

const Topics = () => {
  const { topics } = useLoaderData();
  return <div>{topics.length}</div>;
};

export default Topics;
