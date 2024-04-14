"use client";
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";
//TODO: modularizar todas las funciones dividido por vistas

function FormSearch() {
  const router = useRouter();
  //TODO: mejorar el manejo del form para validar que no se esta haciendo el submit sin tener un valor el input
  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target.search.value;
    if (target) router.push(`/search/${target}`);
  };

  return (
    <form
      className="mt-10 flex items-center mx-auto  bg-white py-2 px-2 gap-3 rounded-3xl max-w-sm"
      onSubmit={handleSubmit}
    >
      <BsSearch className="text-black w-10 " />
      <input
        type="text"
        name="search"
        id="search"
        className="w-9/12 outline-none text-black"
        placeholder="Search for a movie"
      />
    </form>
  );
}

export default FormSearch;
