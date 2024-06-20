import { useContext } from "react";
import AppContext from "../context/AppProvider";
import { AppContextType } from "../types";

export default function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}


// Este código implementa un hook personalizado llamado useAppContext, que facilita el acceso al contexto AppContext creado con AppProvider en tu aplicación React. Aquí está el significado de cada parte del código:

//         1.      import { useContext } from "react";:
//         •       useContext es una función proporcionada por React que permite a los componentes de React suscribirse a un contexto y leer su valor actual.
//         2.      import AppContext from "../context/AppProvider";:
//         •       AppContext es la referencia al contexto que has creado usando createContext en el archivo AppProvider. Este contexto contiene la información que quieres compartir globalmente en tu aplicación.
//         3.      import { AppContextType } from "../types";:
//         •       AppContextType es el tipo que has definido para el contexto en el archivo de tipos types/index.ts. Esto asegura que el hook useAppContext devuelva datos con la estructura esperada.
//         4.      export default function useAppContext(): AppContextType { ... }:
//         •       export default function useAppContext() define una función llamada useAppContext que es exportada para que otros archivos de tu aplicación puedan utilizarla.
//         •       (): AppContextType especifica que esta función devuelve un valor de tipo AppContextType, es decir, el tipo de datos que has definido para el contexto (search y setSearch).
//         5.      const context = useContext(AppContext);:
//         •       useContext(AppContext) es donde se accede al contexto AppContext. Esto devuelve el valor actual del contexto que has establecido con AppProvider.
//         6.      if (!context) { throw new Error("useAppContext must be used within an AppProvider"); }:
//         •       Este bloque de código verifica si context es null o undefined. Si no hay un AppProvider envolviendo el componente que usa useAppContext, useContext devolverá undefined.
//         •       Si context es null o undefined, se lanza un error indicando que useAppContext debe utilizarse dentro de un AppProvider para funcionar correctamente.
//         7.      return context;:
//         •       Finalmente, la función useAppContext devuelve el valor actual del contexto AppContext. Este valor es de tipo AppContextType, que en tu caso incluye la propiedad search y la función setSearch.

// En resumen, useAppContext es un hook personalizado que simplifica la obtención y uso del contexto AppContext en tu aplicación React. Facilita el acceso al estado global (search y setSearch) definido en AppProvider de una manera encapsulada y reutilizable en cualquier componente que necesite consumir esos datos.