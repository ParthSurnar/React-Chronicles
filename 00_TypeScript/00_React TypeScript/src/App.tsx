// import React from 'react'
// import Customer from './components/Customer'
// function App() {

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


type greetingProp = {
  name: string,
  message?: string
}

const Greeting = ({name, message = "Hey"}: greetingProp) => {
  return <p>{message} {name}</p>
}

function App() {
  return (
    <div>
      <Greeting name="Parth" message="Hello"/>
    </div>
  )
}

export default App