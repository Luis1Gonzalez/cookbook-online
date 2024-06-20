import useAppContext from "../hooks/useAppContext";

const Card = () => {
  const { dishesFound } = useAppContext();
  console.log(dishesFound);
  return (
    <div>
      {dishesFound.length >= 1 ? (
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-blue-600 mt-3 mb-5 font-semibold">
            Platos encontrados:
          </h2>
          {dishesFound.map((dishes, index) => (
            <div
              key={index}
              className="bg-white p-5 m-3 rounded-lg shadow-md w-[90%] flex flex-col gap-5"
            >
              <h3 className="text-blue-500 font-semibold">{dishes.label}</h3>

              {dishes.cuisineType.map((cuisine, index) => (
                <p key={index} className="text-gray-600 italic">
                  Cuisine {cuisine}
                </p>
              ))}

              <p>{dishes.mealType[0]}</p>

              <img src={dishes.image} alt={`imagen de ${dishes.label}`} />

              <p className="font-semibold">Ingredients:</p>
              <ul>
                {dishes.ingredientLines.map((dish, index) => (
                  <li key={index} className="text-gray-600 italic">
                    {dish}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap">
                {dishes.healthLabels.map((health, index) => (
                  <li key={index} className="text-red-500 italic">
                    #{health}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <h2 className="text-2xl text-blue-600 mt-3 mb-5">
          No se encontraton platos
        </h2>
      )}
    </div>
  );
};

export default Card;
