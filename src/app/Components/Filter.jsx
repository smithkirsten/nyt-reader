'use client'
import { useState, useEffect } from "react"

export default function Filter({ handleFilter, type }) {
  const [selection, setSelection] = useState('')


  const handleChange = (value) => {
    console.log(value)
    setSelection(value)
    handleFilter(value)
  }
  return(
    <form>
      {type === 'world' &&
        <div>
          <select value={selection} onChange={(e) => {handleChange(e.target.value)}}>
            <option value={'world'}>World</option>
            <option value={'americas'}>Americas</option>
            <option value={'asia'}>Asia</option>
            <option value={'europe'}>Europe</option>
            <option value={'middleeast'}>Middle East</option>
          </select>
        </div>
      }
      {type === 'science' &&       
        <div>
          <select value={selection} onChange={(e) => {handleChange(e.target.value)}}>
            <option value={'science'}>All Science</option>
            <option value={'arts'}>Art & Media</option>
            <option value={'health'}>Health</option>
            <option value={'space'}>Space</option>
            <option value={'climate'}>Climate</option>
            <option value={'us'}>US & Politics</option>
          </select>
        </div>
      }
      {type === 'arts' &&       
        <div>
          <select value={selection} onChange={(e) => {handleChange(e.target.value)}}>
            <option value={'arts'}>All Art</option>
            <option value={'dance'}>Dance</option>
            <option value={'design'}>Design</option>
            <option value={'movies'}>Movies</option>
            <option value={'music'}>Music</option>
            <option value={'television'}>Television</option>
            <option value={'theater'}>Theater</option>
          </select>
        </div>
      }
    </form>
  )
}