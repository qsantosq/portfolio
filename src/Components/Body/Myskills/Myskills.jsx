import React, {useEffect} from 'react'
import "./myskills.css"
import Progress from './Progress'
import Progressblue from './Progressblue'
import Progressgreen from './Progressgreen'
import Progressnode from './Progressnode'
import PacmanLoader from "react-spinners/PacmanLoader";





const Myskills = () => {
    const [loading, setLoading] = React.useState(false);
    


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
           setLoading(false) 
        }, 3000)


    }, [])

  return (
  
    <div className='conteiner-skills'>
        {
            loading ? 

            <div className="sweet-loading">
                <PacmanLoader color={"#07c9ac"}  loading={loading} size={50} />
            </div>
           
            :
            <div className='conteiner-skills-true'>
            <div className='container-experience'>
                 <h1 className='title'>Skills & Experience</h1>
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
             </div>
     
                 <div className='skills'>
                 <div>
                     <h4>Front-end</h4>
                     <div >
                         {/* <div className='line'></div> */}
                       
                         <Progressgreen  done="90"/>
                     </div>
                 </div>
     
                 <div>
                      <h4>Back-end</h4>
                     <div >
                         {/* <div className='line'></div> */}
                         <Progressblue  done="75"/>
                         
                     </div>
                 </div>
     
                 <div>
                     <h4>ReactJS</h4>
                     <div >
                         {/* <div className='line'></div> */}
                         
                         <Progress done="70"/>
                     </div>
                 </div>
     
                 <div>
                     <h4>Node.js</h4>
                     <div >
                         {/* <div className='line'></div> */}
                         <Progressnode done="55"/>
                     </div>
                 </div>
               
     
     
     
      
                 <div className='container-especials'>
                     <div className='developer'>
                         <h2> Frontend developer</h2>
                         <p className='finalizacion'>To The End</p>
                         <p className='time'>2021 - 2022</p>
                         <p className='practice'>Award-winning Content Marketing Agency specialises in 
                             creating and sharing engaging content.</p>
                     </div>
                     <div className='design'>
                     <h2> Frontend developer</h2>
                     <p className='finalizacion'>To The End</p>
                         <p className='time'>2021 - 2022</p>
                         <p className='practice'>Award-winning Content Marketing Agency specialises in 
                             creating and sharing engaging content.</p>
                     </div>
                 </div> 
                 </div>
         </div>
        }
 
    </div>

  )
}

export default Myskills