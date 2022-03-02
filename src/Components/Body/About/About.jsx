import React from 'react'
import "./about.css"
import RingLoader from "react-spinners/RingLoader";



const About = () => {

  const [loading, setLoading] = React.useState(false);
    


  React.useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         setLoading(false) 
      }, 5000)


  }, [])
  return (
    <div className='container-about'>
      {
        loading ?  
       <div className="sweet-loading">
          <RingLoader color={"#07c9ac"}  loading={loading} size={100} />
       </div> :
          
          <div>
          <h1 className='title'>My, Myself & I</h1>
            <p className='parraf'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magnam recusandae assumenda
              doloribus obcaecati voluptates, 
              </p>
              <p className='parraf'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magnam recusandae assumenda
              doloribus obcaecati voluptates, quis blanditiis soluta nobis voluptatibus ipsam impedit
              , odit deserunt corrupti laboriosam beatae dolorem eveniet iste
              </p>
              <p className='parraf'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non magnam recusandae assumenda
              doloribus obcaecati voluptates, 
              </p>

              <a href="#" className='hyper-contact'>Let´s make something spacil.</a>
          </div>
      }

       
    </div>
  )
}

export default About