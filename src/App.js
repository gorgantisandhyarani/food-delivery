import './App.css';
import {Routes,Route,NavLink,Navigate} from 'react-router-dom'
import Home from './components/Home'
import User from './components/user'
import Userlogin from './components/Userlogin'
import Owner from './components/Owner'
import Ownerlogin from './components/Ownerlogin'
import Admin from './components/Admin'
import {useSelector} from 'react-redux'
function App(){
  
      let activeStyle={
          fontweight:'bold',
           color:"F473B9",
           backgroundcolor:'2FA4FF'
      };
      
    return(
      <div className=''>
       
        <nav className='navbar navbar-expand-sm  navbar-dark bg-dark'>
          <div className='container-fluid'>
            <a className='navbar-brand'href="#">
              <img src='images.png' width='50rem' />
            </a>
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
              <span className='navbar-toggler-icon'></span></button>
    
    <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
    <ul className='navbar-nav  ms-auto mb-2 mb-lg-0'>
      <li className='nav-item'>
        <NavLink  className='nav-link' to="home" style={({ isActive })=>
        isActive ? activeStyle : undefined
        }
        >
          <i className='fas fa-home'></i>Home</NavLink>

      </li>
      <li className='nav-item'>
        <NavLink  className='nav-link' to="user" style={({ isActive })=>
        isActive ? activeStyle : undefined}>
      
        <i className='fas fa-sign-in-alt'></i>User</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink  className='nav-link' to="userlogin" style={({ isActive })=>
        isActive ? activeStyle : undefined}>
      
        <i className='fas fa-sign-in-alt'></i>Userlogin</NavLink>
      </li>
      
       <li className='nav-item'>
        <NavLink  className='nav-link' to="owner" > owner</NavLink>
      </li>

      <li className='nav-item'>
        <NavLink  className='nav-link' to="ownerlogin" style={({ isActive })=>
        isActive ? activeStyle : undefined}>
      
        <i className='fas fa-sign-in-alt'></i>Ownerlogin</NavLink>
      </li>

      <li className='nav-item'>
        <NavLink to="/admin" className='nav-link' >Admin</NavLink>
      </li>
  
    </ul>
    </div>
    </div>
    </nav>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path="user" element={<User/>}/>
      <Route path='userlogin' element={<Userlogin/>}/>
      <Route path="owner" element={<Owner/>}/>
      <Route path='ownerlogin' element={<Ownerlogin/>}/>
      <Route path="admin" element={<Admin/>}/>
    
    </Routes>
    <header>
      <h1 className=' text-center pt-5 pb-5 text-light bg-repeat '><p>your favorite</p> restaurent <p>food delivered </p></h1>
    </header>
    <h2 className='text-center'>welcome to my food delivery app</h2>
    
    <div className='row row-cols-sm-2 row-cols-md-3 row-cols-md-3 row-cols-lg-4'>
      <div className='card mx-auto shadow pt-5 mb-5  '>
        <div className=' col '>
          <h3>snacks</h3>
          <img src='snacks.jpg' width='100%' height='60%'/>
    
        </div>
        </div> 
       
        <div className='card mx-auto shadow pt-5 mb-5'>
        <div className=' col '> 
        <h3>lunch</h3>
        <img src='lunch4.webp' width='100%' height='60%'/>
        </div> 
        </div> 
        <div className='card mx-auto shadow pt-5 mb-5'>
        <div className=' col '> 
        <h3>icecreams</h3>
        <img src='ice2.jfif' width='100%'/>
        <h4> icecreams</h4>
        <p>pricel:40</p>
        <p>quality:no.1</p>
        <button className='btn btn-success'>add cart</button>
        </div> 
        </div> 
        <div className='card mx-auto  shadow pt-5 mb-5 '>
        <div className=' col'>
          <h3>Tiffines</h3>
        <img src='tiffine.jfif' width='100%'/> 
        </div> 
        </div> 
    
    </div>
    <div>
      
    </div><br></br>
    <div className=''>
    <footer className='bg-dark d-flex justify-content-evenly '>
      <ul>
        <li className='text-light'><h2>Get known about us </h2></li> 
        <li className='text-light'>About us</li>
        
      </ul>
      <ul>
        <li className='text-light'><h2>let us help you</h2></li>
        <li className='text-light'>facebook</li>
      </ul>
      <ul>
        <li className='text-light'><h2>About our compamny</h2></li>
        <li className='text-light'>fooddeliveryapp@gmail.com</li>
      </ul>
    </footer>
    </div>
    
    </div>

  
  )
}

export default App;
