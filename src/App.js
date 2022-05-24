import { Component } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://picsum.photos/200",
    name: "Jhon Canedy",
    designation: "Software Engineer"
  },
  {
    uniqueNo: 2,
    imageUrl: "https://picsum.photos/300",
    name: "Gooten Burg",
    designation: "iOS Engineer"
  },
  {
    uniqueNo: 3,
    imageUrl: "https://picsum.photos/400",
    name: "Clinton JJ",
    designation: "Blockchain Engineer"
  },
  {
    uniqueNo: 4,
    imageUrl: "https://picsum.photos/500",
    name: "Greg Preston",
    designation: "Full Stack Developer"
  }
]

  class App extends Component {
    state = {
      searchInput: "",
      userDetailsList: initialUserDetailsList,
    }

    onChangeSearchInput = (event) => {
      this.setState({
        searchInput: event.target.value
      });
    }

    onDeleteUser = (uniqueNo) => {
      console.log(`uniqueNo - ${uniqueNo}`)
      const {userDetailsList} = this.state;
      const filteredUsersData = userDetailsList.filter(
        each => each.uniqueNo !== uniqueNo
      )

      this.setState({
        userDetailsList: filteredUsersData
      })

    }

    render() {
      const {searchInput, userDetailsList} = this.state;
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
            <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} deleteUser={this.onDeleteUser}/>
          ))}
          </ul>
        </div>
      );    
    }
  }
export default App;
