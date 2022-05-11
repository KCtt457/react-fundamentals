// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// function UsernameForm({onSubmitUsername}) {
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  
//   function handleSubmit(event) {
//     event.preventDefault();
//     // console.log(event) // React Synthetic event object
//     // console.log(event.nativeEvent) // actual event
//     // console.dir(event.target) // the node itself with all of its properties
//     const username = event.target.elements[0].value
//     // const username = event.target.elements.usernameInput.value
//     onSubmitUsername(username)
//   }
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input

//   // 🐨 add the onSubmit handler to the <form> below

//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor='usernameInput'>Username:</label>
// //         <input type="text" name='username'/> // makes a POST request with username set to this input value
//         <input type="text" id='usernameInput'/>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// Extra Credit Solution 1

// function UsernameForm({onSubmitUsername}) {
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

//   const inputRef = React.useRef()
  
//   function handleSubmit(event) {
//     event.preventDefault();
//     onSubmitUsername(inputRef.current.value)
//   }
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input

//   // 🐨 add the onSubmit handler to the <form> below

//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input ref={inputRef} type="text"/>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// Extra Credit Solution 2

// function UsernameForm({onSubmitUsername}) {
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

//   const [usernameInput, setUsernameInput] = React.useState('')
//   const [error, setError] = React.useState(null)

//   function handleChange(event) {
//     const value = event.target.value
//     setUsernameInput(value)
//     const isValid = value === value.toLowerCase()
//     setError(isValid ? null : 'Username must be lower case')
//   } 
  
//   function handleSubmit(event) {
//     event.preventDefault();
//     onSubmitUsername(usernameInput)
//   }
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input

//   // 🐨 add the onSubmit handler to the <form> below

//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input onChange={handleChange} type="text"/>
//       </div>
//       <div role="alert" style={{color:'red'}}>{error}</div>
//      <button disabled={Boolean(error)} type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// Extra Credit Solution 3

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  const [usernameInput, setUsernameInput] = React.useState('')

  function handleChange(event) {
    const value = event.target.value
    // const {value} = event.target
    setUsernameInput(value.toLowerCase())
  } 
  
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(usernameInput)
  }
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input value={usernameInput} onChange={handleChange} type="text"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

// can set defaultValue and readOnly props to input field if we want

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
