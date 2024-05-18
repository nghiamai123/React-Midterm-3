import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./users/Users";
import Search from "./users/Search";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
function App() {
  // Use the 'useEffect' hook to perform side effects in function components
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Define an asynchronous function 'fetchData' to fetch data from the GitHub
    // API
    const fetchData = async () => {
      try {
        // Use the 'axios' library to make a GET request to the GitHub API
        // endpoint
        const response = await axios.get("https://api.github.com/users");
        // Log the fetched data to the console
        console.log("GitHub Users:", response.data);
        setUsers(response.data);
      } catch (error) {
        // Log an error message if there's an issue fetching data
        console.error("Error fetching data:", error);
      }
    };
    // Call the 'fetchData' function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that 'useEffect' runs only once
  // when the component mounts
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1>GitHub Users Data</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/about" component={About} />
          <Route path="/*" component={NotFound}></Route>
        </Switch>
        {/* <Search /> */}
        {false && <Users users={users} />}
      </Router>
    </div>
  );
}
export default App;
