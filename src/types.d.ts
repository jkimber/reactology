interface User {
  applicationName: string;
  hobbies: ListItem[];
}

interface ListItem {
  id: number;
  title: string;
  important: boolean;
}
