import './Header.css'
const Amtinp = ({curamt,setcuramt}) => {
  return (
    <>
      <input type="number" className='amtinp'  value={curamt} onChange={(e)=>setcuramt(e.target.value)}/>
    </>
  )
}

export default Amtinp
