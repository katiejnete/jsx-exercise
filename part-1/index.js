const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Kate" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
