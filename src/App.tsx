import React from "react";
import Button from "./Components/Button";
import List from "./Components/List";
import "./App.css";

interface AppProps {
  user: { applicationName: string; hobbies: ListItem[] };
}

export default function App({ user }: AppProps) {
  const [isLoggedIn, setLoggedIn] = React.useState(true);

  return (
    <>
      <h1>Welcome to {user.applicationName}</h1>
      <Button
        title={isLoggedIn ? "Log out" : "Log in"}
        onClick={() => setLoggedIn(!isLoggedIn)}
      />
      {isLoggedIn ? <List type="hobbies" data={user.hobbies} /> : <LogIn />}
    </>
  );
}

const LogIn = () => <p>Please log in</p>;
