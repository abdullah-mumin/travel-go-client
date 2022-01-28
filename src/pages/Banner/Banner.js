import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <>
        <section id='home' className='home overflow-hidden mb-5'>
            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselBasicExample"
      data-bs-slide-to="0"
      className="active btnslide"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselBasicExample"
      className="btnslide"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselBasicExample"
      data-bs-slide-to="2"
      className="btnslide"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselBasicExample"
      data-bs-slide-to="3"
      className="btnslide"

      aria-label="Slide 4"
    ></button>
  </div>

  <div className="carousel-inner">
  <div className="carousel-item first active">
        <div className='home-banner home-banner-1'>
            <div className='home-banner-text mt-md-3'>
            <h1 className='ms-5'>100% trusted and purity</h1>

            <p className='ms-5'><b>We provide most cheap rate pricing in Bangladesh.</b></p>
            </div>
        </div>
    </div>
    <div className="carousel-item second">
    <div className='home-banner home-banner-1'>
            <div className='home-banner-text mt-md-3'>
            <h1 className='ms-5'>100% trusted and purity</h1>
            <p className='ms-5'><b>We provide most cheap rate pricing in Bangladesh.</b></p>
            </div>

        </div>
    </div>
    <div className="carousel-item third">
    <div className='home-banner home-banner-1'>
            <div className='home-banner-text mt-md-3'>
            <h1 className='ms-5'>Better Hotel Arrangement</h1>
            <p className='ms-5'><b>We provide one of the most cheap rate pricing in Bangladesh.</b></p>
            </div>
        </div>
    </div>
    <div className="carousel-item fourth">
    <div className='home-banner home-banner-1'>
            <div className='home-banner-text mt-md-3'>
            <h1 className='ms-5'>Most cheap pricing rate</h1>
            <p className='ms-5'><b>We provide one of the most cheap rate pricing in Bangladesh.</b></p>
            </div>
        </div>
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <i className="fal fa-arrow-circle-left text-dark"></i>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <i className="fal fa-arrow-circle-right text-dark"></i>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
        </section>
      </>
    );
};

export default Banner;
