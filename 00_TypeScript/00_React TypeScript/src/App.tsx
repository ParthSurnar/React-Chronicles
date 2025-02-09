// import React from 'react'
// import Customer from './components/Customer'
// function App() {

// import { useState } from "react"

//   // const url: string = 'https://www.google.com'

//   return (
//     <>
//       <div>
//         <Customer name="Parth" age={12} color='blue'/>
//       </div>

//     </>
//   )
// }

// export default App



// import React from 'react'

// type useCard = {
//   name: string,
//   age: number,
// }

// const User = ({ name, age }: useCard) => {
//   return <p>{name} is {age} Years old</p>
// }

// function App() {
//   return (
//     <div>
//       <User name="Parth" age={19} />
//     </div>
//   )
// }
// export default App


// type greetingProp = {
//   name: string,
//   message?: string
// }

// const Greeting = ({name, message = "Hey"}: greetingProp) => {
//   return <p>{message} {name}</p>
// }

// function App() {
//   return (
//     <div>
//       <Greeting name="Parth" message="Hello"/>
//     </div>
//   )
// }

// export default App

// import { useState } from "react";


// const App = () => {

//   const [message, setMessage] = useState<string>("Hello World")

//   return (
//     <div>
//       <h1>{message}</h1>
//       <button onClick={() =>setMessage("TypeScript is Cool")}>
//         Click Me
//       </button>

//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {

//   const [count, setCount] = useState<number>(0)


//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   )
// }

// export default App


// Object State

// type User = {
//   name: string ,
//   age: number
// }

// const App = () => {

//   const [user, setUser] = useState<User>({name: "Parth", age: 19})

//   return (
//     <div>
//       <p>{user.name} is {user.age} Years old</p>
//     </div>
//   )
// }

// export default App


const Button = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log('Button clicked', event)
}

return (
  <button onClick={handleClick}>Click Me</button>
)
}

export default Button