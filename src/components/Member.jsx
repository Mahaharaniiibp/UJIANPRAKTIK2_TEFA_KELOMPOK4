import React, { useEffect, useState } from "react";
import data from "../components/memberempat.json";
import ImageCard from "./MemberCard";

function App() {
  const [search, setSearch] = useState("");
  const [isLoading] = useState(false);
  const [setShowModal] = useState(false);
  const [q] = useState("");
  const [searchParam] = useState(["name", "description", "category"]);
  const [labelCategory] = useState([
    { value: "Hobi", label: "Hobi All Member" },
    { value: "Basket", label: "Basket" },
    { value: "Berenang", label: "Berenang" },
    { value: "Voli", label: "Voli" },
    { value: "Menonton Film", label: "Menonton Film" },
  ]);
  const [filterParam, setFilterParam] = useState("All");
  const [product, setProduct] = useState([]);

  function cari(data) {
    isLoading(true);
    return data.filter((item) => {
      if (data.category == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
      isLoading(false);
    });
  }

  useEffect(() => {
    console.log(filterParam);
    const searchTerm = search.toLowerCase();
    let filteredData;
    if (search === "" && filterParam === "All") {
      setProduct(data);
    } else {
      if (search !== "" && filterParam === "All") {
        filteredData = data.filter((value) => {
          return value.name.toLowerCase().match(new RegExp(searchTerm, "g"));
        });
      } else if (search !== "" && filterParam !== "All") {
        filteredData = data.filter((value) => {
          return (
            value.name.toLowerCase().match(new RegExp(searchTerm, "g")) &&
            value.category === filterParam
          );
        });
      } else if (search === "" && filterParam === "All") {
        filteredData = data.filter((value) => {
          return value.category === filterParam;
        });
      } else if (search === "" && filterParam !== "All") {
        filteredData = data.filter((value) => {
          return value.category === filterParam;
        });
      }
      setProduct(filteredData);
    }
  }, [filterParam, search]);

  useEffect(() => {
    setProduct(data);
  }, []);

  return (
    <div className="container mx-auto mb-16">
      <div className="text-center font-bold">
        <h1 className="text-4xl text-indigo-600 mb-8 mt-20">
          Member Kelompok 4 TEF4
        </h1>
      </div>
      <div className="flex max-w-lg rounded overflow-hidden my-4 mx-auto mt-0 space-x-4">
        <form className="w-full max-w-sm bg-white/60 p-1">
          <div className="flex items-center border-b border-b-2 border-indigo-500 py-2">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search Member"
            />
          </div>
        </form>
        <div className="place-items-center flex-2">
          <select
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
            className="custom-select px-4 py-3 rounded-md bg-slate-300/70 text-indigo-500"
            aria-label="Filter Member By Category"
          >
            {labelCategory.map((item) => {
              return <option value={item.value}>{item.label}</option>;
            })}
          </select>
          <span className="focus"></span>
        </div>
      </div>
      <div className="text-center text-indigo-500 text-lg mb-8">
        <p>{product.length} Member found</p>
      </div>
      {isLoading && (
        <h1 className="text-5xl text-center mx-auto mt-32">Loading ...</h1>
      )}
      {!isLoading && data.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">Images Not Found</h1>
      )}
      {data.length !== 0 && (
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          onClick={() => setShowModal(true)}
        >
          {product.map((image) => (
            <ImageCard key={image.id} image={image} coba={image.image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
