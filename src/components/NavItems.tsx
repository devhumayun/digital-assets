"use client";

import { useState } from "react";
import { PRODUCTCATEGORIES } from "../../config";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;

  return (
    <div className="flex gap-4 h-full">
      {PRODUCTCATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === 1) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        const handleClose = () => setActiveIndex(null);
        const isOpen = i === activeIndex;
        return (
          <NavItem
            key={i}
            category={category}
            onOpen={handleOpen}
            onClose={handleClose}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
