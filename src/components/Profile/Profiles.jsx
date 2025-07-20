import React from 'react'
import profileImage from '../../assets/profile.jpg'
import flag from '../../assets/flag.png'
import web from  '../../assets/mobile.png'
import './profile.css'

const Profiles = () => {
  return (
   
   <div className="profile">
      <img src={profileImage} alt="profile-img" className="profile-img" />
      <div className="info">
        <h2 className="name">Bickson Abraham</h2>
        <div className="country">
            <img src={flag} alt="India Flag" className="flag" />
          <span>India</span>
          
     
        
        
        </div>
     
       <p className='job'>   <img src={web} alt="web-icon" className='web-icon'/>Frontend Developer</p>
      </div>
    </div>

  )
}

export default Profiles