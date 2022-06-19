import './Navbar.css';

const Navbar = () => {

  console.log(window.innerWidth);
  return (
    <div className='Navbar'>
      <img className='NABLogo' src={require('../images/nab-logo.jpg')} alt='NAB Logo'/>
      <div className='NavBarButtons'>
        <a href="#Personal">Personal</a>
        <a href="#Business">Business</a>
        <a href="#Corporate">Corporate</a>
        <a href="#About Us">About Us</a>
      </div>
    </div>
  );
}

export default Navbar;
