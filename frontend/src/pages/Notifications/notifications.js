import React, { Component } from 'react'
import './notifications.css';

export class Notifications extends Component {
  goBack = () => {
    window.history.back();
  };
  render() {
    return (
      <>
      <body>

      <header>
      <img src='./img/mingcute_right-line.png' alt='' className='goBack'onClick={this.goBack} />
        <img src='./img/mi_notification.png' alt='' className='settings'/>
      </header>

      <div className='userDiscr'>
        <img src='./img/UserPhotoB.png' alt='1' className='userPhoto' />
        <p>Username</p>
      </div>

      <div className='cont-lvl'>
      <div className='bg-lvl'>
        <div className='lvl'>69lvl</div>
      </div>
      <a href="/achievement"><img src='./img/achievement.png' alt='' className='achievement' /> </a>
      </div>
      <div className='bgelem'>
      <div className='contelem'>
        <div className='notif'>Notifications</div>

     <div className='sectionbig'>  </div>

    <input type="checkbox" className='checkbox1'></input>
    <div className='textezxc'>Level up</div>  

    <input type="checkbox" className='checkbox2'></input>
    <div className='texteqwe'>Achievement</div>  


  
</div>
</div>


<footer>
        <div className='foot467'>
            <a href="/home" className='text'><img src='./img/Home.png' alt=''/></a>
            <a href="/share" className='text'><img src='./img/Share.png' alt=''/></a>
            <a href="/community" className='text'><img src='./img/Community.png' alt=''/></a>
            <a href="/activity" className='text'><img src='./img/Activity.png' alt=''/></a>
        </div>
      </footer>

      </body>
     </>
      
    )
  }
}

export default Notifications