 import React from 'react';

function Products() {
  return (
    <React.Fragment >
    <div>
      <div class="container text-start   services">
        <h1 class=" p-4 text-center">PRODUCTS AND SERVICES</h1>
        <div class="row  g-5">
          <div class="col-4">
            {/* <img src="../imagies/WEB.jpeg" class="pic img-fluid" alt=""> */}
            <div class="p-4 border  shadow bg-light">
              <div class="txt">
                <h2>Web Development </h2>
                <p>
                  We can Design your front end websites(staic) maintain the frontend
                  websites
                </p>
                <p>Write your blog post</p>
                <br />
               <button type="button" class="btn btn-secondary more-btn">More Services</button>
              </div>
            </div>
          </div>
          <div class="col-4">
            {/* <img src="../imagies/PRODUCTS.png" class="img-fluid" alt=""> */}
            <div class="p-4 border shadow bg-light">
              <div class="txt">
                <h2>Products</h2>
                <p>
                  We can Design your front end websites(staic) maintain the frontend
                  websites
                </p>
                <p>Write your blog post</p>
                <br />
                <button type="button" class="btn btn-secondary more-btn">More Products</button>
              </div>
            </div>
          </div>
          <div class="col-4">
            {/* <img src="../imagies/PROJECT-G.jpeg" class=" pic img-fluid" alt=""> */}
            <div class="p-4 border shadow bg-light">
              
              <div class="txt">
               
                <h2>Project Guides</h2>
                <p>
                  We can Design your front end websites(staic) maintain the frontend
                  websites
                </p>
                <p>Write your blog post</p>
                <br />
                <button type="button" class="btn btn-secondary more-btn">More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      
    </React.Fragment>
  );
}

export default Products;
