import React from 'react';
import './navbar.css';
import './head.css';
import './ProductCategories.css';
import './productview.css';
import './Ouronlinestore.css'
import './Readytostartshopping.css'
import './LatestNews.css'
import './Contact.css'
import './End.css'


const TestProject = () => {
  return (
    <div>

{/* ------------------------------NAVBAR---------------- */}

    <div className='navbar'>

     <div className='navbar-left'>
      <div className='navbar-logo'>Pompeo</div>
     </div>


     <div className='navbar-right'>
      <div>Home</div>
      <div>About</div>
      <div>Shop</div>
      <div>Contact</div>
      <div className="rectangle-line"></div>
      <div className='navbar-cart'> 
        <div className='cart'></div> 
        Cart</div>
     </div>

    </div>

{/* -----------------------------HEAD------------------ */}

    <div className='head'>
      <div className='head-center'>
      <div className='head-left'>
        <div className='Pompeo'>Pompeo POttery</div>
        <div className='h1text'><h2>Unique Porcelain</h2></div>
        <div className='h1text'><h2>Stone Collection</h2></div>
        <div> <p> Unique & modern pottery made by our master in porcelain & stones </p>
        </div>
        <div className='shop-btn'>Shop Collection</div>
      </div>

      <div className='head-right'></div>
      </div>
    </div>

    {/* ---------------------------------Product Categories----------------- */}

    <div className='productcategories'>
      <div className='center-text'>
        <div className='first-text'>Product Categories</div>
        <div className='second-text'> Porcelain  <pre> & </pre> Pottery</div>
      </div>
      <div className='circle-img'>
        <div className='vases'></div>
        <div className='mugs'></div>
        <div className='plates'></div>
      </div>
      <div className='product-text'>
        <div className='p-text'>
          <h2>Hand Grafted</h2>
          <h2>Pottery since 1990</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
        </div>
        <div className='p-text'>
          <h2>We Provide Premium</h2>
          <h2>Pottery Produts</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
        </div>
      </div>
    </div>

    {/* -------------------------------------Product view-------------------------------- */}

    <div className='prod-view'>
      <div className='left-img'>
        <div className='half-displey'>
      <div className='back-img'><div className='gold-pottery'  ></div></div></div>
      <div className='gold-pottery-text'>
        <h2>Gold & Black Pottery</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute.</p>
        <h4>View Details</h4>
      </div>    
      </div>
      <div className='right-img'>
        <div className='orangecermic-center'>
      <div className='orangecermic-text'>
        <h2>Orange Ceramic</h2>
        <p>Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt.</p>
        <h4>View Details</h4>  
        </div>
      <div className='orangecermic-img'>
      <div className='half-displey-right'>
      <div className='back-img-right'><div className='orangecermic' ></div></div></div>
      </div> 
      </div>     
      </div>
    </div>

    {/* -----------------------------------Our online store-------------- */}

    <div>

    <div className='center-text online-store'>
        <div className='first-text'>Our online store</div>
        <div className='second-text'> Pottery Collection</div>
      </div>

      <div className='Productsimg'>
        <div>
          <div className='DecorPlate img-size'></div>
          <div>
            <p>Decor Plate</p>
            <h5>$ 65.00 USD</h5>
          </div>
        </div>
        <div>
          <div className='MintPottery img-size'></div>
          <div>
            <p>Mint Pottery</p>
            <h5>$ 75.00 USD</h5>
          </div>
        </div>
        <div>
          <div className='SetOfPotterys img-size'></div>
          <div>
            <p>Set Of Potterys</p>
            <h5>$ 125.00 USD</h5>
          </div>
        </div>
        <div>
          <div className='OrangeCeramic img-size'></div>
          <div>
            <p>Orange Ceramic</p>
            <h5>$ 55.00 USD</h5>
          </div>
        </div>
        <div>
          <div className='DarkBowl img-size'></div>
          <div>
            <p>Dark Bowl</p>
            <h5>$ 115.00 USD</h5>
          </div>
        </div>
        <div>
          <div className='SquarePottery img-size'></div>
          <div>
            <p>Square Pottery</p>
            <h5>$ 75.00 USD</h5>
          </div>
        </div>
      </div>
      <div className='btn-center'>
        <div className='view-btn'>View All Products</div>
      </div>
    </div>

{/* ------------------------------------Ready to start shopping?--------------------- */}

    <div className='Readytostartshopping'>
    <div className='text-left'>
        <div className='Pompeo'>Pompeo POttery</div>
        <div className='h2text'><h2>Ready to start shopping?</h2></div>
        <div className='ptext'> Lorem ipsum dolor sit amet, <pre> consectetur adipiscing elit. </pre>  <p> Suspendisse varius enim in eros elementum.</p>
        </div>
        <div className='new-btn'>New Collection</div>
      </div>
    </div>

{/* ---------------------------------Latest news--------------------------- */}

    <div className='LatestNews'>
      <div className='telegram-icon'></div>
    <div className='center-text'>
        <div className='first-text'>Latest news</div>
        <div className='second-text'> Latest news  <pre> & </pre> New updates </div>
      </div>
    <div className='Email-login'>
      <div className='Email-type'><input type="text" placeholder='Enter your email'/></div>
      <div className='SUBSCRIBE'>SUBSCRIBE</div>
    </div>

    <div className='checkbox-text'>
      <input type="checkbox" />
      <p> Sign up for our newsletter </p>
    </div>

    </div>

    {/* ----------------------------Contact---------------------- */}

    <div className='Contact'>

    <div className='Contact-head'>
      <div className='text-center'>
    <div className='logo'>Pompeo</div>
      <p>I have always striven to fix beauty in wood, stone,</p>
      <p>glass or pottery, that has been my creed.</p>
      </div>
    </div>

    <div className='email-find-call'>

      <div className='logos'>
        <div className='email'></div>
        <div className='find'></div>
        <div className='call'></div>
      </div>

      <div className='names'>
        <div>Email</div>
        <div>Find</div>
        <div><pre> Call</pre></div>
      </div>

      <div className='contacts'>
        <div className='email-text'>pompeopotery@gmail.com</div>        
        <div className='find-text'><p>Central Park, Manhattan</p>
        <p>New York, 1101</p></div>    
        <div className='call-text'>+1 292 345 678</div>
      </div>
      
    </div>

    </div>

{/* -----------------------------------END -------------------------------- */}

    <div className='end'>
      <div className='end-text'> <pre>Template design by </pre> Dorian Hoxha - Image License Info <pre> Powered by </pre> Webflow </div>
    </div>

    </div>
  )
}

export default TestProject