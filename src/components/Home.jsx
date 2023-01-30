import React from 'react'
import img from '../assets/Home1.png';

const Home = () => {
  return (
    <section id="home">
    <div id="header">
       <div >
        <img src={img} alt="" className="w-2/2 mt-0 md/w-1/2 h-full object-cover" />
       </div>
      <div id="title">
        <h1>Furniture Cantik Pasti Fourtik</h1>
        <p>
        Welcome to the world of Fourniture
        <br/>
        We create high quality handcrafted all-weather furniture and decorative products designed for residential and commercial spaces. We present a product range that stands apart from the mainstream design philosophy in terms of aesthetic, functionality and durability.
          
        </p>
      </div>
      <br />
    </div>
  </section>
  )
}

export default Home