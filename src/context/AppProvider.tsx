import { ReactNode, createContext, useState } from "react";
import { AppContextType, Dish } from "../types";
import axios from "axios";
const appId = import.meta.env.VITE_APP_ID;
const appKey = import.meta.env.VITE_APP_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const AppContext = createContext<AppContextType | undefined>(undefined);
// significa que estás creando un contexto de la aplicación (AppContext) utilizando la función createContext proporcionada por React. Aquí te explico qué hace cada parte de esa línea:

//         1.      createContext<AppContextType | undefined>(undefined):
//         •       createContext es una función de React que crea un contexto nuevo. Este contexto permite pasar datos a través del árbol de componentes sin necesidad de pasar props manualmente en cada nivel.
//         •       AppContextType | undefined: Especifica el tipo de datos que se esperan en este contexto. En este caso, AppContextType define la estructura de los datos que estarán disponibles en el contexto. El | undefined indica que el contexto podría ser inicializado como undefined hasta que se le asigne un valor válido.
//         •       (undefined): Este es el valor inicial que se asigna al contexto. En este caso, se inicializa como undefined.
//         2.      const AppContext = ...:
//         •       AppContext es la constante que guarda el contexto creado por createContext. Este contexto es un objeto especial que proporciona un Provider y un Consumer.
//         •       AppContext se utiliza para acceder a los datos proporcionados por el Provider dentro de cualquier componente que esté envuelto por él.

// En resumen, esta línea de código está configurando un contexto llamado AppContext que espera recibir valores de tipo AppContextType, o puede inicializarse como undefined hasta que se le asigne un valor concreto mediante un Provider. Este contexto luego se puede usar para compartir y acceder a datos en diferentes partes de tu aplicación React.
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>("");
  const [dishesFound, setDishesFound] = useState<Dish[]>([]);

  const getRecipes = async (search: string) => {
    const url = `${apiUrl}/search?q=${search}&app_id=${appId}&app_key=${appKey}&lang=es`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      setDishesFound(data.hits.map((dish: Dish) => dish.recipe));
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        getRecipes,
        dishesFound, setDishesFound
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppProvider };
export default AppContext;
