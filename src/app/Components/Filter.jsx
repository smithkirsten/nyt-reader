'use client'
import { useState, useEffect } from "react"

export default function Filter({ handleFilter }) {
  const [selection, setSelection] = useState('')


  const handleChange = (value) => {
    console.log(value)
    setSelection(value)
    handleFilter(value)
  }
  return(
    <form>
      <div>
        <select value={selection} onChange={(e) => {handleChange(e.target.value)}}>
          <option value={'world'}>World</option>
          <option value={'americas'}>Americas</option>
          <option value={'asia'}>Asia</option>
          <option value={'europe'}>Europe</option>
          <option value={'middleeast'}>Middle East</option>
        </select>
      </div>
    </form>
  )
}