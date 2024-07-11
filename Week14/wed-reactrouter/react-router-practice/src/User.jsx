import { useParams } from "react-router-dom";

export default function User() {
  //usually you would load this from a database
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];

  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  return (
    <>
      <h1>User ID: {id}</h1>
      {user ? <p>Name: {user.name}</p> : <p>User not found</p>}
    </>
  );
}
