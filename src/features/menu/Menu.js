import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterTab from "../components/FilterTab";
import Header from "../components/Header";
import MenuLists from "../components/MenuLists";
import { selectManu, getCategories } from "./menuSlice";

function Menu() {
  const dispatch = useDispatch();
  const { menus, tabCategory } = useSelector(selectManu);
  const [foodLists, setFoodLists] = useState(menus);
  const [activeCategory, setActiveCategory] = useState("");

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFoodLists(menus);
      return;
    }
    const newItems = menus.filter((item) => item.category === category);
    setFoodLists(newItems);
  };

  useEffect(() => {
    const allCategories = [
      "All",
      ...new Set(menus.map((item) => item.category)),
    ];
    dispatch(getCategories(allCategories));
  }, [dispatch, menus]);

  return (
    <div className="max-w-6xl mx-auto">
      <Header />
      <FilterTab
        tabCategory={tabCategory}
        activeCategory={activeCategory}
        filterItems={filterItems}
      />
      <MenuLists menus={foodLists} />
    </div>
  );
}

export default Menu;
