import React from 'react'

function Profile(props) {
  return (
    <div>
      <h1>This is profile page</h1>
      <p>{props.userNumber}</p>
    </div>
  )
}

export default Profile
