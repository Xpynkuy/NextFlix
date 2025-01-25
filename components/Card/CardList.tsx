"use client";

import { CardData } from "@/types/types";
import { Card } from "../Card/Card";
import React from "react";

interface CardListProps {
  items: CardData[];
}

const CardList: React.FC<CardListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {items.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export { CardList };
