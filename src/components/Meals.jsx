import { useGlobalContext } from '../context';

function Meals() {
  const context = useGlobalContext();
  console.log(context);
  return <div>Meals</div>;
}

export default Meals;
