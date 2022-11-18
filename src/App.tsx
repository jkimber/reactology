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
      <header>
        <h1>Welcome to {user.applicationName}</h1>
        <nav>
          <Button
            title={isLoggedIn ? "Log out" : "Log in"}
            onClick={() => setLoggedIn(!isLoggedIn)}
          />
        </nav>
      </header>
      <main>
        {isLoggedIn ? <List type="hobbies" data={user.hobbies} /> : <LogIn />}
      </main>
      <footer>&nbsp;</footer>
    </>
  );
}

const LogIn = () => <p>Please log in</p>;
