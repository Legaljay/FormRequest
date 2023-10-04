import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [formData, setFormData] = useState()
  useEffect(() => { ///use for interaction with API
    //library that handles fetching data from the backend, you install using "npm i axios"
    axios.get('https://jsonplaceholder.typicode.com/users') //the get function gets the data from the api
    .then(res => { //the .then catches the response from the API
      console.log(res.data)
      setData(res.data) // this sets the data to the fetched data
    })
  },[])


  const handleSubmit = (e) => {
    e.preventDefault()

    //this is a post request which sends information to an endpoint on our server and creates new data in the database
    axios.post('https://jsonplaceholder.typicode.com/users',formData).then(res => console.log(res))
    
  }

  const handleChange = (e) => {

    let data = e.target.value;
    console.log(data)
    setFormData({name: data})

  }

  return (
    <>
      <div>
        {data?.map(obj => (
          <div key={obj.id}>
            <p>{obj.name}</p>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange}/>
          <button type="submit" >Submit</button> 
        </form>
      </div>
    </>
  )
}

export default App
