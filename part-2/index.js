const tweets = [
    {id: 1, username: "miffyflowers", name: "Miffy", message: "miffy's first tweet ✿"},
    {id: 2, username: "katie", name: "Kate", message: "Miffy is cute!"},
    {id: 3, username: "random930428", name: "Secret", message: "starting my anon virtual diary"}
];
const App = () => (
  <div>
    {tweets.map(tweet => <Tweet key={tweet.id} message={tweet.message} username={tweet.username} name={tweet.name}/>)}
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
