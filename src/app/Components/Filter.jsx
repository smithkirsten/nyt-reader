

export default function Filter() {

  return(
    <div>
      <select value={selection}>
        <option value={'europe'}>Europe</option>
        <option value={'asia'}>Asia</option>
        <option value={'middleeast'}>Middle East</option>
        <option value={'americas'}>Americas</option>
      </select>
    </div>
  )
}