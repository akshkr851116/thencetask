import React from "react";
import Hero from "../../assets/hero.jpg";

export default function Home() {
  return (
    <>
      <div className="h3 ">Sucess stories</div>
      <div className="h1">Every Success journey</div>
      <div className="d-flex p-2">
        <div className="">
            <img src={Hero} className="rounded-4" width={"250px"} alt="img" />
        </div>
        <div className="">
          <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="h3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, molestias.
                </div>
              </div>
              <div class="carousel-item">
                <div className="h2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, molestias.
                </div>
              </div>
              <div class="carousel-item">
                <div className="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, molestias.
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
