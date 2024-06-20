import useAppContext from "../hooks/useAppContext";

const Form = () => {
  const { search, setSearch, getRecipes } = useAppContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getRecipes(search);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col my-5 gap-5 items-center"
    >
      <input
        className="w-[90%] lg:w-[60%] shadow-2xl rounded-md text-xl text-center p-2 border border-gray-400"
        type="text"
        placeholder="¿Que plato estas buscando?"
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        className="w-full sm:w-[50%] md:rounded-md bg-indigo-500 hover:bg-indigo-600 p-2 text-xl text-white font-semibold cursor-pointer"
        value="BUSCAR"
        type="submit"
      />
    </form>
  );
};

export default Form;
