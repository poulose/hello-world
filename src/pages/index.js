import React from "react"
import Main from "../components/main"
import style from "../styles/style.css"

 function Hello(props) {
  return <div>Hello day {props.name} !</div>
}

export default function Home() {

  return (

      <Main>

      <div class="right">

        <h1> This is class page </h1>

      </div>

      <div class="left">
        
        <section>
        
          <p> This is some interesting stuff </p>

        </section>

        <section>
        
          <p> There is some more interesting stuff </p>

        </section>        
      
      </div>

      </Main>

      //<Hello name=" The Gatsby"/>
    ) 
}