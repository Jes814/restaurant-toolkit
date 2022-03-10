import React from "react";
import { getFilterCategory } from "../menu/menuSlice";

function FilterTab({ tabCategory, activeCategory, filterItems }) {
  return (
    <div className="flex mb-14">
      {tabCategory.map((category, index) => {
        return (
          <div className="w-1/4 text-center text-3xl" key={index}>
            <button
              className={`${
                activeCategory === category
                  ? "w-full border-b-4 border-rose-600"
                  : ""
              }`}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default FilterTab;
