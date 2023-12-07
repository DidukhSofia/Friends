import React, {useState, useEffect} from 'react'

function HiredFriends() {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch("/api/friends").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

  return (
    <div>
       helo
       {backendData.map((friend, i) => (
        <p key={i}>Name: {friend.name}; Phone: {friend.phone}</p>
       ))}
    </div>
  )
}

export default HiredFriends