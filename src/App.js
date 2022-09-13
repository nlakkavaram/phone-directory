import Header from "./Header";

function App() {
  let x = 2;
  let y = 3;
  return (
    <div>
      <Header />
      <button>Add</button>
      <div>
        <span>Name</span><br/>
        <span>Phone</span>
      </div>
      {/* <label htmlFor="name">Name : </label>
      <input
        type="text"
        id="name"
        placeholder="Type Here"
        defaultValue={x + y}
      />

      <div>
        <label htmlFor="username">Username: </label> <br />
        <input id="username" type="text" />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <br />
        <input id="password" type="password" />
        <br />
        <br />
      </div> */}
    </div>
  );
}

export default App;
