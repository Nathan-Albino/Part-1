import { useState } from 'react'

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Temp = (props) => {
  return <div>hello</div>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{'  '}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>
  }
  return <div>button press history: {props.allClicks.join(' ')}</div>
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    const updatedLeft = left + 1

    setLeft(updatedLeft)
    setAll(allClicks.concat('L'))
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    const updatedRight = right + 1

    setRight(updatedRight)
    setAll(allClicks.concat('R'))
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <History allClicks={allClicks} />
      <p>total: {total}</p>
    </div>
  )
}

// const App = () => {
//   const [counter, setCounter] = useState(0)

//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button handleClick={increaseByOne} text="plus" />
//       <Button handleClick={decreaseByOne} text="minus" />
//       <Button handleClick={setToZero} text="zero" />
//     </div>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10,
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7,
//       },
//       {
//         name: 'State of a component',
//         exercises: 14,
//       },
//     ],
//   }

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </div>
//   )
// }

export default App
