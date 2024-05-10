import React, { Component } from 'react';
import "./elecwaste.css";

class ElecWaste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: JSON.parse(localStorage.getItem('selectedItems')) || {},
    };
  }

  componentDidMount() {
    this.addEventListeners();
    this.updateImages();
  }

  componentWillUnmount() {
    this.removeEventListeners();
  }

  addEventListeners = () => {
    document.querySelectorAll('.balls-1').forEach((image) => {
      image.addEventListener('click', this.handleImageClick);
    });
  };

  removeEventListeners = () => {
    document.querySelectorAll('.balls-1').forEach((image) => {
      image.removeEventListener('click', this.handleImageClick);
    });
  };

  updateImages = () => {
    Object.keys(this.state.selectedItems).forEach((itemId) => {
      const image = document.querySelector(`.balls-1[data-item-id="${itemId}"]`);
      if (image) {
        image.src = this.state.selectedItems[itemId] ? './img/LowBattery.png' : './img/Battery.png';
      }
    });
  };

  handleImageClick = (event) => {
    const currentSrc = event.target.src;
    const isLowBattery = currentSrc.includes('LowBattery.png');
    const itemId = event.target.dataset.itemId;
    const selectedItems = { ...this.state.selectedItems };
    selectedItems[itemId] = !isLowBattery;
    this.setState({ selectedItems }, () => {
      localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    });
    event.target.src = isLowBattery ? './img/Battery.png' : './img/LowBattery.png';
  };

  render() {
    return (
      <div>
        <header>
          <a href="/accaunt-settings" className='text'><img src='./img/UserPhotoS.png' alt='' className='profile-settings'/></a>
          <a href="/settings" className='text'><img src='./img/Menu.png' alt='' className='settings'/></a>
        </header>

        <p className='text-png'>Your amount of waste</p>
        <div className='penis'>
          <img src='./img/Battery.png' alt='' className='balls'/>
          <div className='nuts'>Electronic Waste</div>
        </div>

        <div className='penis-1'>
          {[...Array(6)].map((_, index) => (
            <img
              key={index}
              src='./img/LowBattery.png'
              alt=''
              className='balls-1'
              data-item-id={index}
            />
          ))}
        </div>

        <div className='penis-2'>
          {[...Array(6)].map((_, index) => (
            <img
              key={index + 6}
              src='./img/LowBattery.png'
              alt=''
              className='balls-1'
              data-item-id={index + 6}
            />
          ))}
        </div>

        <div className='penis-3'>
          {[...Array(6)].map((_, index) => (
            <img
              key={index + 12}
              src='./img/LowBattery.png'
              alt=''
              className='balls-1'
              data-item-id={index + 12}
            />
          ))}
        </div>

        <div className='card'>
          <div className="item-wrapper">
            <div className="item-count">
              <img src="./img/Battery.png" alt="Item 1 icon" className="item-icon" />
              <div className="item-quantity">X6</div>
            </div>
            <div className="item-details">
              <div className="item-name">Чепуха</div>
              <img src="./img/UserPhotoS.png" alt="Item 1 details" className="item-icon" />
            </div>
          </div>
          <div className="item-wrapper">
            <div className="item-count">
              <img src="./img/Battery.png" alt="Item 2 icon" className="item-icon" />
              <div className="item-quantity">X4</div>
            </div>
            <div className="item-details">
              <div className="item-name">Чепуха1</div>
              <img src="./img/UserPhotoS.png" alt="Item 2 details" className="item-icon" />
            </div>
          </div>
          <div className="item-wrapper">
            <div className="item-count">
              <img src="./img/Battery.png" alt="Item 3 icon" className="item-icon" />
              <div className="item-quantity">X10</div>
            </div>
            <div className="item-details">
              <div className="item-name">Чепуха2</div>
              <img src="./img/UserPhotoS.png" alt="Item 3 details" className="item-icon" />
            </div>
          </div>
        </div>

        <footer>
          <div className='foootq3y6'>
            <a href="/home" className='text'><img src='./img/Home.png' alt=''/></a>
            <a href="/share" className='text'><img src='./img/Share.png' alt=''/></a>
            <a href="/community" className='text'><img src='./img/Community.png' alt=''/></a>
            <a href="/activity" className='text'><img src='./img/Activity.png' alt=''/></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default ElecWaste;