import { useGlobalContext } from '../context';
import { SlLike } from 'react-icons/sl';

function Meals() {
  const { meals, loading } = useGlobalContext();

  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }
  return (
    <section className="section-center">
      {meals.map(meal => {
        const { idMeal, strMealThumb: image, strMeal: title } = meal;
        console.log(meal);
        return (
          <article key={idMeal} className="single-meal">
            <img src={image} alt={title} className="img" />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">
                <SlLike />
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default Meals;
