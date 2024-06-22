import useAppContext from "../hooks/useAppContext";

const Card = () => {
  const { dishesFound } = useAppContext();

  return (
    <div>
      {dishesFound.length >= 1 ? (
        <div className="flex flex-col items-center lg:flex-row flex-wrap lg:justify-center  lg:items-stretch">

          {dishesFound.map((dishes, index) => (
            <div
              key={index}
              className="bg-white p-5 m-3 rounded-lg shadow-md w-[90%] flex flex-col gap-5 lg:w-[45%] xl:w-[33%]"
            >
              <h3 className="text-blue-500 font-semibold">{dishes.label}</h3>

              {dishes.cuisineType.map((cuisine, index) => (
                <p key={index} className="text-gray-600 italic">
                  Cuisine {cuisine}
                </p>
              ))}

              <p>{dishes.mealType[0]}</p>

              <div className="w-[100%] flex flex-col md:flex-row md:gap-3 lg:flex-col">
                <img
                  src={dishes.image}
                  alt={`imagen de ${dishes.label}`}
                  className="md:w-76 md:h-76 w-60 h-60 object-cover rounded-lg shadow-md mx-auto"
                />

                
                <ul className="text-star w-full">
                <p className="font-semibold">Ingredients:</p>
                  {dishes.ingredientLines.map((dish, index) => (
                    <li key={index} className="text-gray-600 italic">
                      {dish}
                    </li>
                  ))}
                </ul>
              </div>

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
        <h2 className="text-2xl text-blue-600 mt-3 mb-5 p-5">
          No se encontraton platos
        </h2>
      )}
    </div>
  );
};

export default Card;
