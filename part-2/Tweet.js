const Tweet = ({ message, username, name }) => {
  const date = new Date().toString();
  return (
      <ul class="tweet alert alert-primary">
        <li>
          <b>{message}</b>
        </li>
        <li>
          {username} | {name} | {date}
        </li>
      </ul>
  );
};
