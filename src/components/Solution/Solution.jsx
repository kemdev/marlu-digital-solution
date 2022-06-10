import React, {useState} from 'react'

export default function Solution() {

    const [number, setNumber] = useState(2)

    const increase = () => {
        setNumber(number + 1)
    }
    const decrease = () => {
        setNumber(number - 1)
    }

  return (
    <div className="w-100 vh-100 display-1">
        <p onClick={increase}>+</p>
        <p className="" >{number}</p>
        <p onClick={decrease}>-</p>
    </div>
  )
}
