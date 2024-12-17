import React from 'react'

const Disamt = ({data,toname,curamt}) => {
  return (
    <div>
        <p>{Number(Number(curamt)*Number(data[toname])).toFixed(2)}</p>
    </div>
  )
}

export default Disamt
