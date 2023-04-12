'use client'
import { useState, useEffect } from "react"

export default function Filter({ handleFilter }) {
  [selection, setSelection] = useState('')


  const handleChange = (value) => {
    console.log(value)
    setSelection(value)
    handleFilter(value)
  }
  return(
    <div>
      <select value={selection} onChange={(e) => {handleChange(e.value)}}>
        <option value={'europe'}>Europe</option>
        <option value={'asia'}>Asia</option>
        <option value={'middleeast'}>Middle East</option>
        <option value={'americas'}>Americas</option>
      </select>
    </div>
  )
}