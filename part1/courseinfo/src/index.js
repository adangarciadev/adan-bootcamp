import React from 'react'
import ReactDOM from 'react-dom'

/**  
Se denomina como one liner, es una funcion que devuelve lo 
primero que esta evaluando, en este caso <h1>{course}</h1>.

Forma corta:

const Title = ({course}) => <h1>{course}</h1>
*/

const Header = ({course}) => {
   console.log(course)
   return (
      <h1>{course}</h1>  
   )
}

const Part = ({partNumber}) => {
   return (
      <div>
         <p>{partNumber.name} {partNumber.exercises}</p>
      </div>
   )
}

const Content = ({parts}) => {
   return (
      <div>
         <Part partNumber={parts[0]}/>
         <Part partNumber={parts[1]}/>
         <Part partNumber={parts[2]}/>
      </div>
   ) 
} 

const Total = ({parts}) => {
   return (
      <>
         <p>
             Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
         </p> 
      </>   
       
   )
} 

const App = () => {
  const curso = 'Half Stack Application Development'
  const partes = [
     {
        name: 'Fundamentals of React',
        exercises: 10
     },
     {
        name: 'Using props to pass data',
        exercises: 7
     },
     {
        name: 'State of a component',
        exercises: 14
     }
  ]

  return (
    <div>
       <Header course={curso}/>
       <Content parts={partes}/>
       <Total parts={partes}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))