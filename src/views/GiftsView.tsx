import React from "react";
import { GiftsList } from "../components/Gifts/GiftsList";
import { AddGift } from "../components/AddGift/AddGift";

export const GiftsView = () => {
  return (
    <>
      <GiftsList />
      <AddGift />
    </>
  )
}