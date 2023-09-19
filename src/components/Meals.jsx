import { useGlobalContext } from '../context';

function Meals() {
  const { meals } = useGlobalContext();
  return (
    <section className="section-center">
      {meals.map(meal => {
        const { idMeal, strMealThumb: image, strMeal: title } = meal;
        console.log(meal);
        return (
          <article key={idMeal} className="single=meal">
            <img
              src={image}
              alt={title}
              className="img"
              style={{ width: '200px' }}
            />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">click me</button>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default Meals;
