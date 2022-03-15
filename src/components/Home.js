import React from 'react'
function Home(){
    return(
        <div>
        <h1>home</h1>
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
 export default Home   