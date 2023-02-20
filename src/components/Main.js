import MainImage from "../img/restauranfood.jpg";
import Special1 from "../img/special1.jpg";
import Special2 from "../img/special2.jpg";
import Special3 from "../img/special3.jpg";
import Delivery from "../img/delivery.png";

const specials = [
  {
    image: Special1,
    title: "Greek Salad",
    price: 12.99,
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: Special2,
    title: "Bruschetta",
    price: 5.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image: Special3,
    title: "Lemon Dessert",
    price: 5.0,
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const testimonials = [
  {
    rating: 4.9,
    name: "Zahraa Doherty",
    image: "https://xsgames.co/randomusers/assets/avatars/female/52.jpg",
    review:
      "The restaurant is a great place to relax with family and friends. The quality of the food is very good and it is reasonably priced.",
  },
  {
    rating: 4.3,
    name: "Imogen Warren",
    image: "https://xsgames.co/randomusers/assets/avatars/male/48.jpg",
    review:
      "I love Little Lemon. It's one of those places that you can go to and know you are going to get good food. It's a cool atmosphere and I would definitely recommend it to my friends.",
  },
  {
    rating: 4.5,
    image: "https://xsgames.co/randomusers/assets/avatars/female/34.jpg",
    name: "Maisie Leonard",
    review:
      "The restaurant is cute and has a great atmosphere, and the food is delicious! Highly recommend.",
  },
  {
    rating: 5.0,
    image: "https://xsgames.co/randomusers/assets/avatars/male/52.jpg",
    name: "Euan Irwin",
    review:
      "I have been a customer of their restaurant for a few years now. I love their food, and I think it is better than most restaurants I have been to in.",
  },
];

const Main = () => {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
          <picture>
            <img src={MainImage} alt="restaurant food" />
          </picture>
        </div>
      </section>
      <section className="specials">
        <div className="specials_heading">
          <h2>This weeks's specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="special_blocks">
          {specials.map((special) => {
            return (
              <div className="special_block" key={special.title}>
                <img src={special.image} alt={special.title} />
                <div className="special_block_content">
                  <div className="special_block_header">
                    <h4>{special.title}</h4>
                    <span>${special.price}</span>
                  </div>
                  <p>{special.description}</p>
                  <div className="delivery_btn">
                    <a href="/">
                      Order a Delivery
                      <img src={Delivery} alt="delivery" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="testimonials">
        <div className="testimonials_container">
          <h2 className="testimonial_heading">Testimonials</h2>
          <div className="testimonials_alignment">
            {testimonials.map((testimonial) => {
              return (
                <div className="single_testimonial">
                  <h2>{testimonial.rating}</h2>
                  <div className="testimonial_img-name">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <h3>{testimonial.name}</h3>
                  </div>
                  <p>
                    <i>
                      <span>“</span>
                      {testimonial.review}
                      <span>”</span>
                    </i>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="about">
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Our concept is simple: Tap into the extraordinary cuisine of the
            nearly 2 dozen cultures surrounding the Mediterranean… add extra
            emphasis to Italian and Spanish… pair our largely locally sourced
            ingredients with an ever-changing but always superb collection of
            fine and affordable wine… and nurture a staff of restaurant
            professionals who will treat you as the valued guest that you are.
          </p>
        </div>
        <img
          src="https://topbrunchspots.com/wp-content/uploads/2022/04/AF1QipOitaoPmmGIqySl7aOg9MOmLUUEz8MY2cY744s3w1600-h1000-k-no.jpeg"
          alt="Little Lemon Interior"
        />
      </section>
    </main>
  );
};

export default Main;
