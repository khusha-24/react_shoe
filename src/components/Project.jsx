import React from 'react'
import project from './data/project.json'
function Project() {
  return (
    <>
      <project />
      <div className="container projects my-3" id='project'>
        <h2>Projects</h2>
        <div className=" projects-container row d-flex justify-content-center align-items-center">
          {project.map((data) => (
            <>
              <div key={data.id} className=" card-wid my-3 col-sm-6 col-md-4 col-lg-3 mx-3"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <div className="card bg-dark text-light" style={{ width: '18rem', border: "1px solid yellow", boxShadow: "5px 10px 10px 0px rgba(101, 175, 10, 0.5)" }}>
                  <div className="img d-flex align-items-center justify-content-center p-3">
                    <img src={data.imageSrc} className="card-img-top bg-light" alt=""
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text"> {data.description}   </p>
                    <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                    <a href={data.source} className="btn btn-warning">Source</a>

                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Project