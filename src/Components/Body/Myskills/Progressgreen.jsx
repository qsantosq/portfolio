import React from 'react'
 
const Progressgreen = ( {done} ) => {
    const [style, setStyle] = React.useState([])

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle)
    }, 100)



  return (
    <div className='progress'>
            <div className="progress-green" style={style}>
                {done}%
            </div>
    </div>

  )

}

export default Progressgreen