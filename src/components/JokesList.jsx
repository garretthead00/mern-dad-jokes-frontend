import { useEffect } from "react";

export const JokesList = (props) => {
  const { jokes } = props;
  useEffect(() => {}, [jokes]);
  const jokesList =
    jokes && jokes.map((joke) => <li key={joke.id}>{joke.text}</li>);

  return <ul>{jokesList}</ul>;
};
