import { categories } from "../data";
import "../styles/Categories.scss"
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1>Explore Top Categories</h1>
      <p>
        Check out our awesome and affordable rentals, perfect for locals and visitors who need a place to stay. Enjoy great offers, dive into the local culture, kick back with all the comforts of home, and make unforgettable memories in your own backyard.
      </p>

      <div className="categories_list">
        {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index}>
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
