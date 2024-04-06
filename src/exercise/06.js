// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = React.useState('');

  const handleUserNameChange = (evt) => {
    const {value} = evt.target;
    setUserName(value.toLowerCase());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmitUsername(userName);
  }


  return (<form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input value={userName} onChange={handleUserNameChange} id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
