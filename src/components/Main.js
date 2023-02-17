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
    </main>
  );
};

export default Main;
