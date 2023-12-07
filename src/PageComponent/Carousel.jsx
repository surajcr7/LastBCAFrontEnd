// import carousel1 from "../images/carousel_1.png";
import courosel2 from "../images/courosel2.jpg"
import courosel3 from "../images/courosel3.jpg"
import courosel4 from "../images/courosel4.jpg"
import courosel5 from "../images/courosel5.jpg"

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="false"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={courosel3} class="d-block w-100 " alt="..f." style={{ height:"90vh"}} />
        </div>
        <div class="carousel-item">
          <img src={courosel2} class="d-block w-100" alt="...a" style={{ height:"90vh"}} />
        </div>
        <div class="carousel-item">
          <img src={courosel3} class="d-block w-100" alt="..fs." style={{ height:"90vh"}} />
        </div>
        <div class="carousel-item">
          <img src={courosel4} class="d-block w-100 " alt="...sd" style={{ height:"90vh"}} />
        </div>
        <div class="carousel-item">
          <img src={courosel5} class="d-block w-100" alt=".sss.."  style={{ height:"90vh"}}/>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
