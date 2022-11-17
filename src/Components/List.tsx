import React from "react";

interface ListProps {
  type: string;
  data: ListItem[];
}

export default function List({ type, data }: ListProps) {
  const listItems = data.map(({ id, title, important }) => (
    <li key={id} style={{ color: important && "red" }}>
      {title}
    </li>
  ));

  return (
    <ul>
      <legend>
        {data && data.length ? `Your ${type} are:` : `You have no ${type}`}
      </legend>
      {listItems}
    </ul>
  );
}
