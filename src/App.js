import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(response => response.json())
      .then(data => setUsers(data.results))
  }, [])

  return (
    <div className="App">
      <header className="App-header">

        <div className='container'>
          <h1 className='display-4'>Random User Generate</h1>
          <hr />
          <div className='row'>
            {
              users.map(user => <div className="col-md-4"> <RandomUser key={user.id.value} name={user.name.first + ' ' + user.name.last} image={user.picture.large} phone={user.phone} email={user.email} country={user.location.country}></RandomUser></div>)
            }
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <button onClick={reload} className='text-center btn btn-warning'>Refresh Page</button>
            </div>
          </div>
        </div>


      </header>
    </div>
  );
}

const reload = () => window.location.reload();


function RandomUser(props) {
  return (
    <div className="card bg-dark">
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
      </div>
      <ul className="list-group">
        <li className="list-group-item bg-dark">Phone: {props.phone}</li>
        <li className="list-group-item bg-dark">Email: {props.email}</li>
        <li className="list-group-item bg-dark">Country: {props.country}</li>
      </ul>
    </div>
  )
}

export default App;
