import React from 'react'
import image4 from './../assets/img/testimonials-1.jpg'
import image5 from './../assets/img/testimonials-2.jpg'
import image6 from './../assets/img/testimonials-3.jpg'

function testimonial() {
  return (
    <div>{/* <!-- Testimonials--> */}
    <section className="testimonials text-center bg-light">
        <div className="container">
            <h2 className="mb-5">What people are saying...</h2>
            <div className="row">
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img src={image4} className="img-fluid rounded-circle mb-3" alt="Margaret E." />
                        <h5>Margaret E.</h5>
                        <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img src={image5} className="img-fluid rounded-circle mb-3" alt="Margaret E." />
                        <h5>Fred S.</h5>
                        <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                        
                    <img src={image6} className="img-fluid rounded-circle mb-3" alt="Margaret E." />
                        <h5>Sarah W.</h5>
                        <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                    </div>
                </div>
            </div>
        </div>
    </section></div>
   
  )
}

export default testimonial