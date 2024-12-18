
function MainComponent() {

  return (
    <>
      <div>
        <div className="hero_area">
          <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container d-block">
                <div className="main_nav_menu">
                  <div className="fk_width">
                    <div className="custom_menu-btn">
                      <button onClick={()=>openNav()}>
                        <span className="s-1"> </span>
                        <span className="s-2"> </span>
                        <span className="s-3"> </span>
                      </button>
                    </div>
                    <div className="overlay" id="myNav">
                      <div className="overlay-content">
                        <a className="" href="index.html">
                          Home <span className="sr-only">(current)</span>
                        </a>
                        <a className="" href="about.html">
                          About{" "}
                        </a>
                        <a className="" href="gallery.html">
                          Gallery{" "}
                        </a>
                        <a className="" href="blog.html">
                          Blog{" "}
                        </a>
                        <a className="" href="testimonial.html">
                          Testimonial{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <a className="navbar-brand" href="index.html">
                    <span> Joshua Jackson </span>
                  </a>
                  <div className="user_option">
                    <a href="#"> login </a>
                    <form className="form-inline">
                      <button className="btn nav_search-btn" type="submit" />
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          <section className="slider_section position-relative">
            <div className="container-fluid">
              <div className="row slider-row">
                <div className="col-lg-3 offset-lg-1">
                  <div
                    className="carousel slide"
                    data-ride="carousel"
                    id="carouselExampleIndicators">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="detail-box">
                          <h1>
                            Joshua <br />
                            Jackson
                          </h1>
                          <p>
                            I worked at 8th Light, Inc as a Senior Graphic Designer
                          </p>
                          <div>
                            <a href="#"> UI/UX Designer </a>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="detail-box">
                          <h1>
                            Joshua <br />
                            Jackson
                          </h1>
                          <p>
                            Designer in Dream. I'm sure that I can make a wonder...
                          </p>
                          <div>
                            <a href="#"> Photographer </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel_control-box">
                      <div className="carousel_btn-container">
                        <a
                          className="carousel-control-prev"
                          data-slide="prev"
                          href="#carouselExampleIndicators"
                          role="button">
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          data-slide="next"
                          href="#carouselExampleIndicators"
                          role="button">
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                      <ol className="carousel-indicators">
                        <li
                          className="active li_one"
                          data-slide-to="0"
                          data-target="#carouselExampleIndicators">
                          01
                        </li>
                        <li
                          className="li_two"
                          data-slide-to="1"
                          data-target="#carouselExampleIndicators">
                          02
                        </li>
                        <li className="ol_design" />
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 px-0">
                  <div className="img-box">
                    <img alt="" src="images/slider-img.png" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="about_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>About Me</h2>
                    <p>
                      I’m a skilled designer specializing in UI/UX, graphic design,
                      and motion graphics, with expertise in tools like Figma, Adobe
                      XD, Photoshop, Illustrator, and After Effects. I create
                      user-focused, visually engaging designs that enhance brand
                      identity and drive results. In remote settings, I excel at
                      collaboration and delivering
                      <br />
                      impactful projects on time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="img-box">
            <div className="play_btn">
              <a href="#">
                <img alt="" src="images/play.png" />
              </a>
            </div>
            <img alt="" className="about-img" src="images/about-img.png" />
          </div>
        </section>
        <section className="gallery_section layout_padding-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 ml-auto">
                <div className="heading_container">
                  <h2>My latest Design</h2>
                  <p>
                    It is a long established fact that a reader will be distracted by
                    the readable content of a page
                  </p>
                  <a href=""> See More </a>
                </div>
              </div>
            </div>
          </div>
          <div className="gallery_container">
            <div className="gallery_bg">
              <img alt="" src="images/gallery-bg.png" />
            </div>
            <div className="container">
              <div className="gallery_box">
                <div className="box b1 m">
                  <a href="http://leica.com" target="_blank">
                    <div className="img-box mysite">
                      <img alt="" src="images/Leica.png" />
                      <h5 className="latest_design">Leica</h5>
                    </div>
                  </a>
                </div>
                <div className="box b2">
                  <a href="http://clickup.com" target="_blank">
                    <div className="img-box mysite">
                      <img alt="" src="images/Click-Up.JPG" />
                      <h5 className="latest_design">Click-Up</h5>
                    </div>
                  </a>
                  <div className="img-box mysite">
                    <img alt="" src="images/Morpheus.JPG" />
                    <h5 className="latest_design">Morpheus</h5>
                  </div>
                </div>
                <div className="box b3">
                  <a href="http://dipainhouse.com" target="_blank">
                    <div className="img-box mysite">
                      <img alt="" src="images/dipainhouse.JPG" />
                      <h5 className="latest_design">dipainhouse</h5>
                    </div>
                  </a>
                  <div className="img-box mysite">
                    <img alt="" src="images/Ribbert.JPG" />
                    <h5 className="latest_design">Ribbert</h5>
                  </div>
                </div>
                <div className="box b4">
                  <div className="img-box mysite">
                    <img alt="" src="images/Plant Aid.JPG" />
                    <h5 className="latest_design">Plant Aid</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>Experience</h2>
                    <p>
                      After graduating the university, I was hired by these companies
                      and I did my best for them.
                    </p>
                    <a href=""> Read More </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog_container">
            <div className="blog_bg">
              <img alt="" src="images/gallery-bg.png" />
            </div>
            <div className="container">
              <div className="blog_box">
                <div className="row">
                  <div className="col-md-6">
                    <div className="box b1">
                      <div className="img-box">
                        <img alt="" src="images/blog1.jpg" />
                      </div>
                      <div className="blog-detail">
                        <div className="blog_title">
                          <h5>Senior Graphic Designer</h5>
                          <div className="blog_post">
                            <h6>8th Light, Inc</h6>
                            <h6>11/2023 – 09/2024</h6>
                          </div>
                        </div>
                        <p>
                          While designing a mobile app, I noticed users were
                          struggling to navigate the settings menu because of unclear
                          icons. To improve their experience, I introduced more
                          intuitive iconography paired with subtle animations, such as
                          a hover effect and micro-interactions that provided feedback
                          (e.g., buttons changing color when tapped). I also adjusted
                          the visual hierarchy with improved spacing and typography.
                          These creative details reduced confusion and made navigation
                          more seamless, leading to a 15% increase in user engagement
                          with the settings menu.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="box b2">
                      <div className="img-box">
                        <img alt="" src="images/blog2.jpg" />
                      </div>
                      <div className="blog-detail">
                        <div className="blog_title">
                          <h5>Graphic Designer</h5>
                          <div className="blog_post">
                            <h6>XYZ Creative Agency</h6>
                            <h6>06/2019 – 12/2021</h6>
                          </div>
                        </div>
                        <p>
                          During user interviews,I learned that many users felt
                          overwhelmed by the huge number of products and categories
                          presented at once. So I implemented the "Occasion-Based
                          Shopping" feature such as "Gifts for Christmas" or "Summer
                          Essentials" in the final design. As the result the
                          engagement and conversion rates increased 57% and the users
                          increased 48%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="client_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 ml-auto">
                <div className="heading_container">
                  <h2>What Says Customer</h2>
                  <p>
                    Always I respected customers' feedbacks and those were very
                    helpful for me and also my company.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="client_container">
            <div className="client_bg">
              <img alt="" src="images/gallery-bg.png" />
            </div>
            <div className="container">
              <div className="client_box">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="box b1">
                      <div
                        className="carousel slide"
                        data-ride="carousel"
                        id="carouselExampleControls">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="client_content-box layout_padding">
                              <div className="img-box">
                                <img alt="" src="images/client.png" />
                              </div>
                              <div className="detail-box">
                                <h4>Plio Dorak</h4>
                                <p>
                                  Working with Joshua was truly a transformative
                                  experience for our project. Joshua has an incredible
                                  eye for detail and a deep understanding of user
                                  needs, which brought our product to life in ways we
                                  hadn't imagined. Their intuitive UI/UX designs not
                                  only made our platform visually stunning but also
                                  improved user engagement and satisfaction
                                  significantly. Since implementing the new design,
                                  we've seen a 40% increase in user retention and
                                  overwhelmingly positive feedback from our customers.
                                  I can't recommend Joshua enough—professional,
                                  creative, and a joy to work with!
                                </p>
                                <img alt="" src="images/quote.png" />
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="client_content-box layout_padding">
                              <div className="img-box">
                                <img alt="" src="images/client2.png" />
                              </div>
                              <div className="detail-box">
                                <h4>Lena Maynard</h4>
                                <p>
                                  Joshua completely exceeded our expectations. Their
                                  designs were not only visually stunning but also
                                  highly functional, resulting in a seamless user
                                  experience. Joshua has an amazing ability to combine
                                  creativity with practicality, ensuring our users
                                  could navigate the platform effortlessly. After
                                  implementing the new design, we saw a 30% increase
                                  in user engagement and a significant drop in bounce
                                  rates. Working with Joshua was an absolute pleasure,
                                  and I would highly recommend them to anyone looking
                                  to elevate their product design.
                                </p>
                                <img alt="" src="images/quote.png" />
                              </div>
                            </div>
                          </div>
                          <div className="carousel-item">
                            <div className="client_content-box layout_padding">
                              <div className="img-box">
                                <img alt="" src="images/client3.png" />
                              </div>
                              <div className="detail-box">
                                <h4>Ismael Howard</h4>
                                <p>
                                  Collaborating with Joshua was one of the best
                                  decisions for our product. Their ability to truly
                                  understand user behavior and translate it into
                                  thoughtful, beautiful design was remarkable. The new
                                  interface not only looks modern and engaging but
                                  also streamlined our user flow, reducing friction
                                  and improving customer satisfaction. Since launching
                                  the redesign, we’ve experienced a 50% increase in
                                  user conversions. Joshua is a brilliant designer
                                  with exceptional attention to detail, and I can’t
                                  recommend them enough!
                                </p>
                                <img alt="" src="images/quote.png" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev"
                          data-slide="prev"
                          href="#carouselExampleControls"
                          role="button">
                          <span className="sr-only">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          data-slide="next"
                          href="#carouselExampleControls"
                          role="button">
                          <span className="sr-only">Next</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="box b2">
                      <div className="camera_img-box">
                        <img alt="" src="images/camera.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="info_section">
          <div className="info_container layout_padding-top">
            <div className="container">
              <div className="heading_container">
                <h2>Contact Me</h2>
              </div>
              <div className="info_main">
                <div className="row">
                  <div className="col-md-4 col-lg-3">
                    <div className="info_contact">
                      <a className="link-box" href="#">
                        <div className="img-box">
                          <img alt="" src="images/location.png" />
                        </div>
                        <div className="detail-box">
                          <h6>Austin,TX,USA</h6>
                        </div>
                      </a>
                      <a className="link-box" href="#">
                        <div className="img-box">
                          <img alt="" src="images/mail.png" />
                        </div>
                        <div className="detail-box">
                          <h6>joshua.freeman.passion@gmail.com</h6>
                        </div>
                      </a>
                      <a className="link-box" href="#">
                        <div className="img-box">
                          <img alt="" src="images/call.png" />
                        </div>
                        <div className="detail-box">
                          <h6>+01 8302762555</h6>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default MainComponent;