import React from 'react'
import './Brand.scss'
import brand1 from '../../assets/images/b10.png'
import brand2 from '../../assets/images/b11.png'
import brand3 from '../../assets/images/b2.png'
import brand4 from '../../assets/images/b5.png'
import brand5 from '../../assets/images/b8.png'
import brand6 from '../../assets/images/co-op.png'
import brand7 from '../../assets/images/costco-wholesale.png'
import brand8 from '../../assets/images/metro.png'
import brand9 from '../../assets/images/sobyes.png'
import brand10 from '../../assets/images/walmart.png'

const Brand = () => {
  return (
      <div className="Marquees">

          <div className='brand-area Marquee FirstRow'>
            <div className='brand-image'>
              <img src={brand1} className="img-fluid" alt="" />
            </div>
            <div className='brand-image'>
              <img src={brand2} className="img-fluid" alt="" />
            </div>
            <div className='brand-image'>
              <img src={brand3} className="img-fluid" alt="" />
            </div>
            <div className='brand-image'>
              <img src={brand4} className="img-fluid" alt="" />
            </div>
            <div className='brand-image'>
              <img src={brand5} className="img-fluid" alt="" />
            </div>
            <div className='brand-image'>
              <img src={brand6} className="img-fluid" alt="" />
            </div>
            <div className='brand-image'>
              <img src={brand7} className="img-fluid" alt="" />
            </div>
            <div className='brand-image'>
              <img src={brand8} className="img-fluid" alt="" />
            </div>
            <div className='brand-image'>
              <img src={brand9} className="img-fluid" alt="" />
            </div>
            <div className='brand-image'>
              <img src={brand10} className="img-fluid" alt="" />
            </div>
              <div className='brand-image'>
                  <img src={brand2} className="img-fluid" alt="" />
              </div>
              <div className='brand-image'>
                  <img src={brand3} className="img-fluid" alt="" />
              </div>
              <div className='brand-image'>
                  <img src={brand4} className="img-fluid" alt="" />
              </div>

    </div>
      </div>
  )
}

export default Brand