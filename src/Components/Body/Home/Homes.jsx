import React from 'react'
import "./body.css"
import HashLoader from "react-spinners/HashLoader";

const Homes = () => {

  const [loading, setLoading] = React.useState(false);
    


  React.useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         setLoading(false) 
      }, 5000)


  }, [])

  return (

    <div className="homes">
      {
        loading ? 
        <div className="sweet-loading">
        <HashLoader color={"#07c9ac"}  loading={loading} size={120} />
        </div> :
          <div>
              <h1 className='title'>Santos Malbran</h1>
              <h2 className='subtitle'>I´m a Web Developer</h2>
              <h6 className='front'>Front End Developer / Wordpress Expert</h6>
              <button className='button-contact'>Contact Me!</button>
          </div>
      }

  
    </div>
    
  )
}

export default Homes;