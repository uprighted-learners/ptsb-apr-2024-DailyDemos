function WarningBanner({ message }) {
  // early return if message is empty
  if (!message || message === "") {
    return null;
  }

  return <div className="warning">Warning: {message}</div>;
}
export default WarningBanner;
