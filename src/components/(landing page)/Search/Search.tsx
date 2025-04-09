import { useRootContext } from "@/components/(landing page)/context/context";
import { Input } from "@/components/ui/input";
import React from "react";

const Search = () => {
  const { openSearch, toggleSearch } = useRootContext();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("search"));
    toggleSearch();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center transition-transform duration-500 ease-in-out ${
        openSearch ? "translate-y-0 opacity-100 z-[9999]" : "-translate-y-full opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={toggleSearch}
        className="absolute inset-0 bg-black opacity-75 cursor-pointer"
      ></div>

      {/* Search Content */}
      <div className="w-full max-w-[560px] relative">
        <form
          onSubmit={handleSearch}
          className="flex relative bg-white overflow-hidden rounded-md shadow-lg"
        >
          <label htmlFor="search" className="sr-only">
            Search here
          </label>
          <Input              
            type="text"
            id="search"
            name="search"
            placeholder="Search Here..."
            className="w-full h-[66px] pl-6 text-lg outline-none border-none bg-white"
          />
          <button
            type="submit"
            aria-label="search submit"
            className="w-[70px] h-[68px] flex justify-center items-center bg-green-800 hover:bg-green-700 text-white transition-colors"
          >
            <i className="icon-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
