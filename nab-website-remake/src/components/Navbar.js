import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <img className='NABLogo' src={require('../images/nab-logo.jpg')} alt='NAB logo'/>
      <div className='NavBarButtons'>
        <a href="#Personal">Personal</a>
        <a href="#Business">Business</a>
        <a href="#Corporate">Corporate</a>
        <a href="#About Us">About Us</a>
      </div>

      <div className="HeaderRightSide">
        <img className='MagnifyingGlass' src={require('../images/magnifying-glass.jpg')} alt='White magnifying glass'/>
        <img className='QuestionMark' src={require('../images/question-mark.jpg')} alt='White question mark'/>
        <div className="HeaderRightSideDropDown">
        <div className="HeaderRightSideDropDownButtonAndArrowAndButton">
          <button class="HeaderRightSideDropDownButton">Internet Banking</button>
          <img className='WhiteDownArrow' src={require('../images/white-down-arrow.png')} alt='White down arrow'/>
          <button class="HeaderRightSideLoginButton">Login</button>
        </div>
          <div className="HeaderRightSideDropDownContent">
            <a href="#InternetBanking">Internet Banking</a>
            <a href="#NABConnect">NAB Connect</a>
            <a href="#nabtrade">nabtrade</a>
            <a href="#MarginLending">Margin Lending</a>
            <a href="#NABTransact">NAB Transact</a>
            <a href="#AssetServicing">Asset Servicing</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
