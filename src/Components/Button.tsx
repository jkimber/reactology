import React from "react";

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
}

export default function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>{props.title}</button>;
}
