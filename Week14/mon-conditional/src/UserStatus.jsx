function UserStatus({ isLoggedIn }) {
  // try any method to get this part to work
  return <h2>User {isLoggedIn ? "is logged in" : "is logged out"} </h2>;
}
export default UserStatus;
