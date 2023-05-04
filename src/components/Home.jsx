import React from 'react'
import { useEffect, useState } from "react";

const Home = () => {

  const [data, setData] = useState("")

  useEffect( () =>{

    fetch("https://api.adviceslip.com/advice")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
}, [])

  return (
    <>
      <div className="firstSection">
          <div>
            <h1 className="greeting">{data && data.slip.advice}</h1>
          </div>
          <div>
            <img className="dog" src="dog.png" alt="panda" />
          </div>
        </div>
      </>
  )
}

export default Home