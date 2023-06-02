import React from 'react'

const index = () => {
  return (
    <div>
         {/* <DashboardLayout> */}
    
    <>
  <meta charSet="utf-8" />
  <meta httpEquiv="x-ua-compatible" content="ie=edge" />
  <title>Book - eCommerce HTML5 Template</title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* Favicon */}
  <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.png" />
  {/* all css here */}
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/magnific-popup.css" />
  <link rel="stylesheet" href="assets/css/animate.css" />
  <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="assets/css/themify-icons.css" />
  <link rel="stylesheet" href="assets/css/pe-icon-7-stroke.css" />
  <link rel="stylesheet" href="assets/css/meanmenu.min.css" />
  <link rel="stylesheet" href="assets/css/bundle.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <link rel="stylesheet" href="assets/css/responsive.css" />
  {/*[if lt IE 8]>
  <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
  <![endif]*/}
  {/* header start */}
  <header className="res-header-sm" >
    <div className="header-top-wrapper theme-bg-2" style={{width:"100%"}}>
      <div className="container">
        <div className="header-top">
          <div className="header-info">
            {/* <span>
              Contact us - 00 221 225 123-30 or <a href="#">info@domain.com</a>
            </span> */}
          </div>
          <div className="book-login-register">
            <ul>
              <li>
                <a href="login.html">
                  <i className="ti-user" />
                  login
                </a>
              </li>
              <li>
                <a href="register.html">
                  <i className="ti-settings" />
                  register
                </a>
              </li>
              <li>
                <a href="wishlist.html">
                  <i className="ti-heart" />
                  wishlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="header-bottom clearfix">
      <div className="container">
        <div className="header-bottom-wrapper">
          <div className="logo-2 ptb-40">
            <a href="index.html">
              <img src="assets/img/logo/2.png" alt="" />
            </a>
          </div>
          <div className="menu-style-2 book-menu menu-hover">
            <nav>
              <ul>
                <li>
                  <a href="#">home</a>
                  <ul className="single-dropdown">
                    <li>
                      <a href="index.html">Fashion</a>
                    </li>
                    <li>
                      <a href="index-fashion-2.html">Fashion style 2</a>
                    </li>
                    <li>
                      <a href="index-fruits.html">fruits</a>
                    </li>
                    <li>
                      <a href="index-book.html">book</a>
                    </li>
                    <li>
                      <a href="index-electronics.html">electronics</a>
                    </li>
                    <li>
                      <a href="index-electronics-2.html">electronics style 2</a>
                    </li>
                    <li>
                      <a href="index-food.html">food &amp; drink</a>
                    </li>
                    <li>
                      <a href="index-furniture.html">furniture</a>
                    </li>
                    <li>
                      <a href="index-handicraft.html">handicraft</a>
                    </li>
                    <li>
                      <a target="_blank" href="index-smart-watch.html">
                        smart watch
                      </a>
                    </li>
                    <li>
                      <a href="index-sports.html">sports</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">pages</a>
                  <ul className="single-dropdown">
                    <li>
                      <a href="about-us.html">about us</a>
                    </li>
                    <li>
                      <a href="menu-list.html">menu list</a>
                    </li>
                    <li>
                      <a href="login.html">login</a>
                    </li>
                    <li>
                      <a href="register.html">register</a>
                    </li>
                    <li>
                      <a href="cart.html">cart page</a>
                    </li>
                    <li>
                      <a href="checkout.html">checkout</a>
                    </li>
                    <li>
                      <a href="wishlist.html">wishlist</a>
                    </li>
                    <li>
                      <a href="contact.html">contact</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop.html">shop</a>
                  <div className="category-menu-dropdown shop-menu">
                    <div className="category-dropdown-style category-common2 mb-30">
                      <h4 className="categories-subtitle"> shop layout</h4>
                      <ul>
                        <li>
                          <a href="shop-grid-2-col.html"> grid 2 column</a>
                        </li>
                        <li>
                          <a href="shop-grid-3-col.html"> grid 3 column</a>
                        </li>
                        <li>
                          <a href="shop.html">grid 4 column</a>
                        </li>
                        <li>
                          <a href="shop-grid-box.html">grid box style</a>
                        </li>
                        <li>
                          <a href="shop-list-1-col.html"> list 1 column</a>
                        </li>
                        <li>
                          <a href="shop-list-2-col.html">list 2 column</a>
                        </li>
                        <li>
                          <a href="shop-list-box.html">list box style</a>
                        </li>
                        <li>
                          <a href="cart.html">shopping cart</a>
                        </li>
                        <li>
                          <a href="wishlist.html">wishlist</a>
                        </li>
                      </ul>
                    </div>
                    <div className="category-dropdown-style category-common2 mb-30">
                      <h4 className="categories-subtitle"> product details</h4>
                      <ul>
                        <li>
                          <a href="product-details.html">tab style 1</a>
                        </li>
                        <li>
                          <a href="product-details-2.html">tab style 2</a>
                        </li>
                        <li>
                          <a href="product-details-3.html"> tab style 3</a>
                        </li>
                        <li>
                          <a href="product-details-4.html">sticky style</a>
                        </li>
                        <li>
                          <a href="product-details-5.html">sticky style 2</a>
                        </li>
                        <li>
                          <a href="product-details-6.html">gallery style</a>
                        </li>
                        <li>
                          <a href="product-details-7.html">gallery style 2</a>
                        </li>
                        <li>
                          <a href="product-details-8.html">fixed image style</a>
                        </li>
                        <li>
                          <a href="product-details-9.html">
                            fixed image style 2
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-banner-img">
                      <a href="single-product.html">
                        <img src="assets/img/banner/18.jpg" alt="" />
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="blog.html">blog</a>
                  <ul className="single-dropdown">
                    <li>
                      <a href="blog.html">blog 3 colunm</a>
                    </li>
                    <li>
                      <a href="blog-2-col.html">blog 2 colunm</a>
                    </li>
                    <li>
                      <a href="blog-sidebar.html">blog sidebar</a>
                    </li>
                    <li>
                      <a href="blog-details.html">blog details</a>
                    </li>
                    <li>
                      <a href="blog-details-sidebar.html">blog details 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-cart-2">
            <a className="icon-cart" href="#">
              <i className="ti-shopping-cart" />
              <span className="shop-count book-count">02</span>
            </a>
            <ul className="cart-dropdown">
              <li className="single-product-cart">
                <div className="cart-img">
                  <a href="#">
                    <img src="assets/img/cart/1.jpg" alt="" />
                  </a>
                </div>
                <div className="cart-title">
                  <h5>
                    <a href="#"> Bits Headphone</a>
                  </h5>
                  <h6>
                    <a href="#">Black</a>
                  </h6>
                  <span>$80.00 x 1</span>
                </div>
                <div className="cart-delete">
                  <a href="#">
                    <i className="ti-trash" />
                  </a>
                </div>
              </li>
              <li className="single-product-cart">
                <div className="cart-img">
                  <a href="#">
                    <img src="assets/img/cart/2.jpg" alt="" />
                  </a>
                </div>
                <div className="cart-title">
                  <h5>
                    <a href="#"> Bits Headphone</a>
                  </h5>
                  <h6>
                    <a href="#">Black</a>
                  </h6>
                  <span>$80.00 x 1</span>
                </div>
                <div className="cart-delete">
                  <a href="#">
                    <i className="ti-trash" />
                  </a>
                </div>
              </li>
              <li className="single-product-cart">
                <div className="cart-img">
                  <a href="#">
                    <img src="assets/img/cart/3.jpg" alt="" />
                  </a>
                </div>
                <div className="cart-title">
                  <h5>
                    <a href="#"> Bits Headphone</a>
                  </h5>
                  <h6>
                    <a href="#">Black</a>
                  </h6>
                  <span>$80.00 x 1</span>
                </div>
                <div className="cart-delete">
                  <a href="#">
                    <i className="ti-trash" />
                  </a>
                </div>
              </li>
              <li className="cart-space">
                <div className="cart-sub">
                  <h4>Subtotal</h4>
                </div>
                <div className="cart-price">
                  <h4>$240.00</h4>
                </div>
              </li>
              <li className="cart-btn-wrapper">
                <a className="cart-btn btn-hover" href="#">
                  view cart
                </a>
                <a className="cart-btn btn-hover" href="#">
                  checkout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="mobile-menu-area d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
            <div className="mobile-menu">
              <nav id="mobile-menu-active">
                <ul className="menu-overflow">
                  <li>
                    <a href="#">HOME</a>
                    <ul>
                      <li>
                        <a href="index.html">Fashion</a>
                      </li>
                      <li>
                        <a href="index-fashion-2.html">Fashion style 2</a>
                      </li>
                      <li>
                        <a href="index-fruits.html">Fruits</a>
                      </li>
                      <li>
                        <a href="index-book.html">book</a>
                      </li>
                      <li>
                        <a href="index-electronics.html">electronics</a>
                      </li>
                      <li>
                        <a href="index-electronics-2.html">
                          electronics style 2
                        </a>
                      </li>
                      <li>
                        <a href="index-food.html">food &amp; drink</a>
                      </li>
                      <li>
                        <a href="index-furniture.html">furniture</a>
                      </li>
                      <li>
                        <a href="index-handicraft.html">handicraft</a>
                      </li>
                      <li>
                        <a href="index-smart-watch.html">smart watch</a>
                      </li>
                      <li>
                        <a href="index-sports.html">sports</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">pages</a>
                    <ul>
                      <li>
                        <a href="about-us.html">about us</a>
                      </li>
                      <li>
                        <a href="menu-list.html">menu list</a>
                      </li>
                      <li>
                        <a href="login.html">login</a>
                      </li>
                      <li>
                        <a href="register.html">register</a>
                      </li>
                      <li>
                        <a href="cart.html">cart page</a>
                      </li>
                      <li>
                        <a href="checkout.html">checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">wishlist</a>
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">shop</a>
                    <ul>
                      <li>
                        <a href="shop-grid-2-col.html"> grid 2 column</a>
                      </li>
                      <li>
                        <a href="shop-grid-3-col.html"> grid 3 column</a>
                      </li>
                      <li>
                        <a href="shop.html">grid 4 column</a>
                      </li>
                      <li>
                        <a href="shop-grid-box.html">grid box style</a>
                      </li>
                      <li>
                        <a href="shop-list-1-col.html"> list 1 column</a>
                      </li>
                      <li>
                        <a href="shop-list-2-col.html">list 2 column</a>
                      </li>
                      <li>
                        <a href="shop-list-box.html">list box style</a>
                      </li>
                      <li>
                        <a href="product-details.html">tab style 1</a>
                      </li>
                      <li>
                        <a href="product-details-2.html">tab style 2</a>
                      </li>
                      <li>
                        <a href="product-details-3.html"> tab style 3</a>
                      </li>
                      <li>
                        <a href="product-details-4.html">sticky style</a>
                      </li>
                      <li>
                        <a href="product-details-5.html">sticky style 2</a>
                      </li>
                      <li>
                        <a href="product-details-6.html">gallery style</a>
                      </li>
                      <li>
                        <a href="product-details-7.html">gallery style 2</a>
                      </li>
                      <li>
                        <a href="product-details-8.html">fixed image style</a>
                      </li>
                      <li>
                        <a href="product-details-9.html">fixed image style 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">BLOG</a>
                    <ul>
                      <li>
                        <a href="blog.html">blog 3 colunm</a>
                      </li>
                      <li>
                        <a href="blog-2-col.html">blog 2 colunm</a>
                      </li>
                      <li>
                        <a href="blog-sidebar.html">blog sidebar</a>
                      </li>
                      <li>
                        <a href="blog-details.html">blog details</a>
                      </li>
                      <li>
                        <a href="blog-details-sidebar.html">blog details 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html"> Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* header end */}
  <div className="slider-area">
    <div className="slider-active owl-carousel">
      <div
        className="single-slider single-slider-book1 bg-img"
        style={{ backgroundImage: "url(assets/img/slider/3.jpg)" }}
      >
        <div className="container">
          <div className="slider-animation slider-content-book fadeinup-animated">
            <h1 className="animated">
              <span>Knowledge</span> is
            </h1>
            <h2 className="animated">Power.</h2>
            <p className="animated">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a href="shop.html">More Books</a>
          </div>
        </div>
      </div>
      <div
        className="single-slider single-slider-book1 bg-img"
        style={{ backgroundImage: "url(assets/img/slider/4.jpg)" }}
      >
        <div className="container">
          <div className="slider-animation slider-content-book fadeinup-animated">
            <h1 className="animated">
              <span>Knowledge</span> is
            </h1>
            <h2 className="animated">Power.</h2>
            <p className="animated">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a href="shop.html">More Books</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* banner area start */}
  <div className="banner-area pt-120 pb-110">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="book-banner-wrapper mr-20">
            <img src="assets/img/banner/13.jpg" alt="" />
            <div className="banner-book-style1">
              <h3>
                Big Sell For <br />
                December
              </h3>
              <h2>50% OFF</h2>
              <a className="banner-book-style-btn" href="product-details.html">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="book-banner-wrapper ml-20">
            <img src="assets/img/banner/14.jpg" alt="" />
            <div className="banner-book-style2 text-center">
              <h2>Learn More </h2>
              <img src="assets/img/icon-img/2.png" alt="" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <a className="banner-book-style-btn" href="product-details.html">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* banner area end */}
  {/* best product area start */}
  <div className="best-product-area pb-15">
    <div className="pl-100 pr-100">
      <div className="container-fluid">
        <div className="section-title-3 text-center mb-40">
          <h2>Best Products</h2>
        </div>
        <div className="best-product-style">
          <div
            className="product-tab-list2 text-center mb-95 nav product-menu-mrg"
            role="tablist"
          >
            <a className="active" href="#home6" data-bs-toggle="tab" role="tab">
              <h4>Fiction </h4>
            </a>
            <a href="#home7" data-bs-toggle="tab" role="tab">
              <h4>Satire </h4>
            </a>
            <a href="#home8" data-bs-toggle="tab" role="tab">
              <h4>Anthologies</h4>
            </a>
            <a href="#home9" data-bs-toggle="tab" role="tab">
              <h4> Art</h4>
            </a>
            <a href="#home10" data-bs-toggle="tab" role="tab">
              <h4>Journals </h4>
            </a>
            <a href="#home11" data-bs-toggle="tab" role="tab">
              <h4>History </h4>
            </a>
          </div>
          <div className="tab-content">
            <div
              className="tab-pane active show fade"
              id="home6"
              role="tabpanel"
            >
              <div className="custom-row">
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/1.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">World At War Vol2</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/2.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/3.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Tour Gide for Africa </a>
                      </h4>
                      <span>By: Selim Rana &amp; Newaz Sharif</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/4.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">History of Moon</a>
                      </h4>
                      <span>By: shakara tasnim</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/5.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Best Freelancing Guide</a>
                      </h4>
                      <span>By: kohinur tabassum</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/6.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">We Are Going Down</a>
                      </h4>
                      <span>By: Momen Bhuiyan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/7.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/8.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fallen Light</a>
                      </h4>
                      <span>By: Arif Khan &amp; Newaz Sharif</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/9.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Sky Fall</a>
                      </h4>
                      <span>By: Dr. KB Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/10.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fly High</a>
                      </h4>
                      <span>By: Maksud Reza</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="home7" role="tabpanel">
              <div className="custom-row">
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/10.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">World At War Vol2</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/9.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/8.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Tour Gide for Africa </a>
                      </h4>
                      <span>By: Selim Rana &amp; Newaz Sharif</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/7.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">History of Moon</a>
                      </h4>
                      <span>By: shakara tasnim</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/6.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Best Freelancing Guide</a>
                      </h4>
                      <span>By: kohinur tabassum</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/5.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">We Are Going Down</a>
                      </h4>
                      <span>By: Momen Bhuiyan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/4.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/3.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fallen Light</a>
                      </h4>
                      <span>By: Arif Khan &amp; Newaz Sharif</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/2.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Sky Fall</a>
                      </h4>
                      <span>By: Dr. KB Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/1.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fly High</a>
                      </h4>
                      <span>By: Maksud Reza</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="home8" role="tabpanel">
              <div className="custom-row">
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/5.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">World At War Vol2</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/4.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/3.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Tour Gide for Africa </a>
                      </h4>
                      <span>By: Selim Rana &amp; Newaz Sharif</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/2.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">History of Moon</a>
                      </h4>
                      <span>By: shakara tasnim</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/1.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Best Freelancing Guide</a>
                      </h4>
                      <span>By: kohinur tabassum</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/10.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">We Are Going Down</a>
                      </h4>
                      <span>By: Momen Bhuiyan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/9.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/8.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fallen Light</a>
                      </h4>
                      <span>By: Arif Khan &amp; Newaz Sharif</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/7.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Sky Fall</a>
                      </h4>
                      <span>By: Dr. KB Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/6.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fly High</a>
                      </h4>
                      <span>By: Maksud Reza</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="home9" role="tabpanel">
              <div className="custom-row">
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/3.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">World At War Vol2</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/1.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/2.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Tour Gide for Africa </a>
                      </h4>
                      <span>By: Selim Rana &amp; Newaz Sharif</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/5.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">History of Moon</a>
                      </h4>
                      <span>By: shakara tasnim</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/4.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Best Freelancing Guide</a>
                      </h4>
                      <span>By: kohinur tabassum</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/8.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">We Are Going Down</a>
                      </h4>
                      <span>By: Momen Bhuiyan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/7.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/6.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fallen Light</a>
                      </h4>
                      <span>By: Arif Khan &amp; Newaz Sharif</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/10.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Sky Fall</a>
                      </h4>
                      <span>By: Dr. KB Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/9.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fly High</a>
                      </h4>
                      <span>By: Maksud Reza</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="home10" role="tabpanel">
              <div className="custom-row">
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/10.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">World At War Vol2</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/10.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/9.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Tour Gide for Africa </a>
                      </h4>
                      <span>By: Selim Rana &amp; Newaz Sharif</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/4.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">History of Moon</a>
                      </h4>
                      <span>By: shakara tasnim</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/8.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Best Freelancing Guide</a>
                      </h4>
                      <span>By: kohinur tabassum</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/3.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">We Are Going Down</a>
                      </h4>
                      <span>By: Momen Bhuiyan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/7.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/2.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fallen Light</a>
                      </h4>
                      <span>By: Arif Khan &amp; Newaz Sharif</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/6.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Sky Fall</a>
                      </h4>
                      <span>By: Dr. KB Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/1.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fly High</a>
                      </h4>
                      <span>By: Maksud Reza</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="home11" role="tabpanel">
              <div className="custom-row">
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/1.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">World At War Vol2</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/2.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/3.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Tour Gide for Africa </a>
                      </h4>
                      <span>By: Selim Rana &amp; Newaz Sharif</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/4.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">History of Moon</a>
                      </h4>
                      <span>By: shakara tasnim</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/5.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Best Freelancing Guide</a>
                      </h4>
                      <span>By: kohinur tabassum</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/6.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">We Are Going Down</a>
                      </h4>
                      <span>By: Momen Bhuiyan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/7.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="product-details.html">Learn With Arif</a>
                      </h4>
                      <span>By: Arif Khan</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/8.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fallen Light</a>
                      </h4>
                      <span>By: Arif Khan &amp; Newaz Sharif</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/9.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Sky Fall</a>
                      </h4>
                      <span>By: Dr. KB Arif Khan</span>
                    </div>
                  </div>
                </div>
                <div className="custom-col-5 custom-col-style mb-95">
                  <div className="product-wrapper">
                    <div className="product-img-2">
                      <a href="#">
                        <img src="assets/img/product/book/10.jpg" alt="" />
                      </a>
                      <div className="product-action-2">
                        <a
                          className="animate-left add-style-2"
                          title="Add To Cart"
                          href="#"
                        >
                          Add to Cart <i className="ti-shopping-cart" />
                        </a>
                        <a
                          className="animate-right wishlist-style-2"
                          title="wishlist"
                          href="#"
                        >
                          <i className="ti-heart" />
                        </a>
                      </div>
                    </div>
                    <div className="product-content-2 text-center">
                      <h4>
                        <a href="#">Fly High</a>
                      </h4>
                      <span>By: Maksud Reza</span>
                      <div className="product-rating">
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star black" />
                        <i className="ti-star" />
                        <i className="ti-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* best product area end */}
  {/* top month area start */}
  <div className="top-month pb-120">
    <div className="container">
      <div className="section-title-3 text-center mb-70">
        <h2>Top Writer In this Month</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="writer-wrapper">
            <img src="assets/img/product/book/11.jpg" alt="" />
            <div className="writer-content">
              <h4>Mildred Turner</h4>
              <span>
                Book Writer &amp; <br />
                Member of bishwo shahitto kendro
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="book-list-hover">
            <div className="book-list-active owl-carousel">
              <div className="product-wrapper">
                <div className="product-img-2">
                  <a href="#">
                    <img src="assets/img/product/book/12.jpg" alt="" />
                  </a>
                  <div className="product-action-2">
                    <a
                      className="animate-left add-style-2"
                      title="Add To Cart"
                      href="#"
                    >
                      Add to Cart <i className="ti-shopping-cart" />
                    </a>
                    <a
                      className="animate-right wishlist-style-2"
                      title="wishlist"
                      href="#"
                    >
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
                <div className="product-content-3 text-center">
                  <h4>
                    <a href="#">Be like Me (magazine)</a>
                  </h4>
                  <div className="product-rating-2">
                    <i className="ti-star" />
                    <i className="ti-star" />
                    <i className="ti-star" />
                    <i className="ti-star" />
                    <i className="ti-star" />
                  </div>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="product-img-2">
                  <a href="#">
                    <img src="assets/img/product/book/13.jpg" alt="" />
                  </a>
                  <div className="product-action-2">
                    <a
                      className="animate-left add-style-2"
                      title="Add To Cart"
                      href="#"
                    >
                      Add to Cart <i className="ti-shopping-cart" />
                    </a>
                    <a
                      className="animate-right wishlist-style-2"
                      title="wishlist"
                      href="#"
                    >
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
                <div className="product-content-3 text-center">
                  <h4>
                    <a href="#">Sky Fall (Book)</a>
                  </h4>
                  <div className="product-rating-2">
                    <i className="ti-star" />
                    <i className="ti-star" />
                    <i className="ti-star" />
                    <i className="ti-star" />
                    <i className="ti-star" />
                  </div>
                </div>
              </div>
              <div className="product-wrapper">
                <div className="product-img-2">
                  <a href="#">
                    <img src="assets/img/product/book/12.jpg" alt="" />
                  </a>
                  <div className="product-action-2">
                    <a
                      className="animate-left add-style-2"
                      title="Add To Cart"
                      href="#"
                    >
                      Add to Cart <i className="ti-shopping-cart" />
                    </a>
                    <a
                      className="animate-right wishlist-style-2"
                      title="wishlist"
                      href="#"
                    >
                      <i className="ti-heart" />
                    </a>
                  </div>
                </div>
                <div className="product-content-3 text-center">
                  <h4>
                    <a href="#">Be like Me (magazine)</a>
                  </h4>
                  <div className="product-rating-2">
                    <i className="ti-star" />
                    <i className="ti-star" />
                    <i className="ti-star" />
                    <i className="ti-star" />
                    <i className="ti-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* top month area end */}
  {/* testimonials area start */}
  <div
    className="testimonials-area bg-img pt-145 pb-160"
    style={{ backgroundImage: "url(assets/img/bg/2.jpg)" }}
  >
    <div className="container">
      <div className="testimonials-active owl-carousel">
        <div className="single-testimonial text-center">
          <i className="ti-quote-left" />
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form. There are many
            variations of passages.
          </p>
          <h4>tayeb rayed</h4>
          <span>ui ux - Designer</span>
        </div>
        <div className="single-testimonial text-center">
          <i className="ti-quote-left" />
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form. There are many
            variations of passages.
          </p>
          <h4>KB Arif Vashar</h4>
          <span>ui ux - Designer</span>
        </div>
        <div className="single-testimonial text-center">
          <i className="ti-quote-left" />
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form. There are many
            variations of passages.
          </p>
          <h4>KB Arif Vashar</h4>
          <span>ui ux - Designer</span>
        </div>
      </div>
    </div>
  </div>
  {/* testimonials area end */}
  {/* discount area start */}
  <div className="discount-area pr-205 gray-bg-4 pt-115 pb-90">
    <div className="discount-left text-center">
      <img className="tilter" src="assets/img/product/book/1.png" alt="" />
      <h4>Photo Realistic - 50% Discount</h4>
      <a href="#">Buy Now</a>
    </div>
    <div className="discount-right gray-bg-4">
      <div className="row g-0">
        <div className="col-lg-6 col-xl-6 col-md-12">
          <div className="new-top mr-15">
            <h3 className="new-top-title">New Arrival</h3>
            <div className="new-top-product">
              <div className="new-top-wrapper mb-50">
                <div className="new-top-img">
                  <a href="#">
                    <img src="assets/img/product/book/14.jpg" alt="" />
                  </a>
                  <div className="discount-book-cart">
                    <a
                      className="animate-left add-style-2"
                      href="#"
                      title="Add To Cart"
                    >
                      <i className="ti-shopping-cart" />
                    </a>
                  </div>
                </div>
                <div className="new-top-content">
                  <h4>
                    <a href="product-details.html">Learn With Arif</a>
                  </h4>
                  <span>Dr. KB Arif</span>
                  <div className="product-price">
                    <div className="old-price">
                      <span>$49.00</span>
                    </div>
                    <div className="new-price">
                      <span>$32.00</span>
                    </div>
                  </div>
                  <div className="product-rating-3">
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                  </div>
                </div>
              </div>
              <div className="new-top-wrapper mb-50">
                <div className="new-top-img">
                  <a href="#">
                    <img src="assets/img/product/book/16.jpg" alt="" />
                  </a>
                  <div className="discount-book-cart">
                    <a
                      className="animate-left add-style-2"
                      href="#"
                      title="Add To Cart"
                    >
                      <i className="ti-shopping-cart" />
                    </a>
                  </div>
                </div>
                <div className="new-top-content">
                  <h4>
                    <a href="product-details.html">Fallen Light</a>
                  </h4>
                  <span>Dr. KB Arif</span>
                  <div className="product-price">
                    <div className="old-price">
                      <span>$49.00</span>
                    </div>
                    <div className="new-price">
                      <span>$32.00</span>
                    </div>
                  </div>
                  <div className="product-rating-3">
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-6 col-md-12">
          <div className="new-top ml-15">
            <h3 className="new-top-title">Sky Fall</h3>
            <div className="new-top-product">
              <div className="new-top-wrapper mb-50">
                <div className="new-top-img">
                  <a href="#">
                    <img src="assets/img/product/book/15.jpg" alt="" />
                  </a>
                  <div className="discount-book-cart">
                    <a
                      className="animate-left add-style-2"
                      href="#"
                      title="Add To Cart"
                    >
                      <i className="ti-shopping-cart" />
                    </a>
                  </div>
                </div>
                <div className="new-top-content">
                  <h4>
                    <a href="product-details.html">Fly High</a>
                  </h4>
                  <span>Dr. KB Arif</span>
                  <div className="product-price">
                    <div className="old-price">
                      <span>$49.00</span>
                    </div>
                    <div className="new-price">
                      <span>$32.00</span>
                    </div>
                  </div>
                  <div className="product-rating-3">
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                  </div>
                </div>
              </div>
              <div className="new-top-wrapper mb-50">
                <div className="new-top-img">
                  <a href="#">
                    <img src="assets/img/product/book/17.jpg" alt="" />
                  </a>
                  <div className="discount-book-cart">
                    <a
                      className="animate-left add-style-2"
                      href="#"
                      title="Add To Cart"
                    >
                      <i className="ti-shopping-cart" />
                    </a>
                  </div>
                </div>
                <div className="new-top-content">
                  <h4>
                    <a href="product-details.html">History of Moon</a>
                  </h4>
                  <span>Dr. KB Arif</span>
                  <div className="product-price">
                    <div className="old-price">
                      <span>$49.00</span>
                    </div>
                    <div className="new-price">
                      <span>$32.00</span>
                    </div>
                  </div>
                  <div className="product-rating-3">
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                    <i className="pe-7s-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* discount area end */}
  {/* blog area start */}
  <div className="blog-area pt-120 pb-80">
    <div className="container">
      <div className="section-title-3 text-center mb-50">
        <h2>From Our Blog</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="blog-wrapper mb-40">
            <div className="blog-img blog-hover mb-15">
              <a href="blog-details-sidebar.html">
                <img src="assets/img/blog/1.jpg" alt="" />
              </a>
            </div>
            <div className="blog-info">
              <h4>
                <a href="blog-details-sidebar.html">
                  Bangla Academy Book fair.
                </a>
              </h4>
              <span>February 13, 2022</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-wrapper mb-40">
            <div className="blog-img blog-hover mb-15">
              <a href="blog-details-sidebar.html">
                <img src="assets/img/blog/2.jpg" alt="" />
              </a>
            </div>
            <div className="blog-info">
              <h4>
                <a href="blog-details-sidebar.html">Bangla New Book Shop.</a>
              </h4>
              <span>February 13, 2022</span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-wrapper mb-40">
            <div className="blog-img blog-hover mb-15">
              <a href="blog-details-sidebar.html">
                <img src="assets/img/blog/3.jpg" alt="" />
              </a>
            </div>
            <div className="blog-info">
              <h4>
                <a href="blog-details-sidebar.html">
                  Latest Book Collection 2022.
                </a>
              </h4>
              <span>February 13, 2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* blog area end */}
  {/* subscribe area start */}
  <div
    className="subscribe bg-img ptb-80"
    style={{ backgroundImage: "url(assets/img/bg/2.jpg)" }}
  >
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <div className="subscribe-content">
            <h3>Subscribe to outr newsletter</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's dummy{" "}
            </p>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div id="mc_embed_signup" className="subscribe-form-2 pr-40">
            <form
              action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate=""
            >
              <div id="mc_embed_signup_scroll" className="mc-form">
                <input
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  className="email"
                  placeholder="Enter Your E-mail"
                  required=""
                />
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                <div className="mc-news" aria-hidden="true">
                  <input
                    type="text"
                    name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                    tabIndex={-1}
                    defaultValue=""
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    defaultValue="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* subscribe area end */}
  <footer className="footer-area">
    <div className="footer-top-area gray-bg-5 pt-105 pb-65">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget mb-40">
              <h3 className="footer-widget-title-2">Ezone Boos</h3>
              <div className="footer-info-wrapper">
                <div className="footer-address">
                  <div className="footer-info-icon">
                    <i className="ti-location-pin" />
                  </div>
                  <div className="footer-info-content">
                    <p>
                      77 Seventh Streeth, Banasree.
                      <br />
                      USA -215568
                    </p>
                  </div>
                </div>
                <div className="footer-address">
                  <div className="footer-info-icon">
                    <i className="ti-headphone-alt" />
                  </div>
                  <div className="footer-info-content">
                    <p>
                      +880 1124 22365 2223
                      <br />
                      +880 1124 22365 5455
                    </p>
                  </div>
                </div>
                <div className="footer-address">
                  <div className="footer-info-icon">
                    <i className="ti-email" />
                  </div>
                  <div className="footer-info-content">
                    <p>
                      <a href="#">domain@company.com</a>
                      <br />
                      <a href="#">company@domain.info</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-widget mb-40 pl-70">
              <h3 className="footer-widget-title-2">USeful Links</h3>
              <div className="footer-widget-content-2">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="#">Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="footer-widget mb-40">
              <h3 className="footer-widget-title-2">Shopping</h3>
              <div className="footer-widget-content-2">
                <ul>
                  <li>
                    <a href="#">How to buy</a>
                  </li>
                  <li>
                    <a href="#">Payments</a>
                  </li>
                  <li>
                    <a href="#">Shipment</a>
                  </li>
                  <li>
                    <a href="#">Tracking</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Condition</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="footer-widget mb-40 pl-30">
              <h3 className="footer-widget-title-2">Find US</h3>
              <iframe
                className="footer-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.693667617067!2d144.946279515845!3d-37.82064364221098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4cee0cec83%3A0xd019c5f69915a4a0!2sCollins%20St%2C%20West%20Melbourne%20VIC%203003%2C%20Australia!5e0!3m2!1sen!2sbd!4v1607512676761!5m2!1sen!2sbd"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom  gray-bg-6 ptb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="copyright-2">
              <p>
                Copyright ©<a href="hastech.company/index.html">HasTech</a> 2022
                . All Right Reserved.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="payment-img">
              <img src="assets/img/icon-img/3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>

      
    {/* </DashboardLayout> */}
    </div>
  )
}

export default index