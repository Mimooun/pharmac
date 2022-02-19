import React from 'react'
import '../styles/products.css'
import image from '../assets/images/01.jpg'
function Products() {
  return (
    <div className='products'>
        <div className="max-width">
        <div className="title">See Our Products</div>
            <div className="prod">
                <div className="content">
                    <div className="text">Products</div>
                    <div className="text1">We have several product candidates in development that we believe have been significantly de-risked.</div>
                    <div className="text2">At vero eos et accusam justo duo dolores etea rebuitet clita kasd gubergren nosea takimata sanctus est lorem ipsum dolor consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore magna aliquyam sedam voluptua at vero eos et accusam et justo duo dolores.</div>
                    <div className="button"><button>See All Projects</button></div>
                </div>
                <div className="img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products