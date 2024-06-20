export type Dish = {
    label: string;
    recipe: []
    image: string
    ingredientLines: []
    cuisineType: []
    mealType: string[]
    healthLabels: []
  };

export type AppContextType = {
    search: string;
    setSearch: (search: string) => void;
    getRecipes: (search: string) => Promise<void>;
    dishesFound: Dish[];
    setDishesFound: (dishes: Dish[]) => void;
};

// 1.      export type:
// •       export es una palabra clave en TypeScript que permite que el tipo (AppContextType en este caso) esté disponible para ser importado desde otros archivos TypeScript o módulos.
// 2.      AppContextType:
// •       AppContextType es el nombre del tipo que estás definiendo. Es un tipo personalizado que define la estructura de los datos que esperas tener en tu contexto de la aplicación (como se usa en tu contexto AppContext).
// 3.      search: string:
// •       search es una propiedad dentro de AppContextType. Indica que se espera que haya una propiedad llamada search dentro de los datos del contexto, y que esta propiedad debe ser de tipo string.
// 4.      setSearch: (search: string) => void:
// •       setSearch es otra propiedad dentro de AppContextType. Indica que se espera que haya una función llamada setSearch dentro de los datos del contexto.
// •       (search: string) especifica que setSearch es una función que toma un parámetro de tipo string llamado search.
// •       => void significa que la función setSearch no devuelve ningún valor (void en TypeScript indica ausencia de tipo).

// En resumen, AppContextType define la estructura del contexto que estás utilizando en tu aplicación React. En este caso, el contexto contiene una propiedad search que es una cadena (string), y una función setSearch que acepta una cadena (string) como parámetro y no devuelve ningún valor. Esto es típico cuando se usa un contexto para manejar un estado global dentro de una aplicación React, como parece ser el caso en tu código.