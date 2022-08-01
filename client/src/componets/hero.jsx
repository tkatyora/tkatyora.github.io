import React from 'react'

const hero = () => {
  return (
    <>
      <section class="hero-index">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button"data-bs-target="#carouselExampleDark" data-bs-slide-to="1"aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="9000">
                    <img src="../imagies/Data Center2.jpg" class="d-block w-100" alt="..." />
                    <div class="caption d-none d-md-block">
                        <h1 class="display-1">TELECOMMUNICATIONS</h1>
                        <p >
                            HOME OF TELECOMMUNICATIONS GOODS AND SERVICES
                        </p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="9000">
                    <img src="../imagies/slide2-webdev.jpeg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption caption d-none d-md-block slide2">
                    
                        <p>
                            Home Of Fast And Realiabe <br/>
                            Website Development
                        </p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="9000">
                    <img src="../imagies/slide-3.jpg" class="d-block w-100" alt="..." />
                    <div class="caption d-none d-md-block">
                        <h1>PROJECT GUIDES</h1>
                        <p>
                            WE OFFER FAST AND RELIABLE HELP IN YOUR ENGENEERING PROJECT
                        </p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev"type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            
        </div>
      </section>
    </>
  )
}

export default hero
