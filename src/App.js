import { Component } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

const userDetailsList = [
  {
    uniuqeNo: 1,
    imageUrl: "https://picsum.photos/200",
    name: "Jhon Canedy",
    designation: "Software Engineer"
  },
  {
    uniuqeNo: 2,
    imageUrl: "https://picsum.photos/300",
    name: "Gooten Burg",
    designation: "iOS Engineer"
  },
  {
    uniuqeNo: 3,
    imageUrl: "https://picsum.photos/400",
    name: "Clinton JJ",
    designation: "Blockchain Engineer"
  },
  {
    uniuqeNo: 4,
    imageUrl: "https://picsum.photos/500",
    name: "Greg Preston",
    designation: "Full Stack Developer"
  }
]

  class App extends Component {
    state = {
      searchInput: "",

    }

    onChangeSearchInput = (event) => {
      this.setState({
        searchInput: event.target.value
      });
    }

    render() {
      const {searchInput} = this.state;
      console.log(searchInput);
      const searchResults = userDetailsList.filter((eachUser) => {
        return eachUser.name.includes(searchInput);
      });

      return (
        <div className="bg-container">
          <h1>Users List</h1>
          <input 
          type="search" 
          onChange={this.onChangeSearchInput}
          value={searchInput}
          />
          <ul>
          {searchResults.map((eachItem) => (
            <UserProfile userDetails={eachItem} key={eachItem.uniuqeNo}/>
          ))}
          </ul>
        </div>
      );    
    }
  }
export default App;
