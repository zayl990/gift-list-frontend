import React, { useEffect, useState } from 'react';
import { GetSingleGiftRes } from 'types';
import { Link, useParams } from "react-router-dom";

export const SingleGiftView = () => {
  const [giftInfo, setGiftInfo] = useState<GetSingleGiftRes | null>(null);
  const { idOfGift } = useParams();

  useEffect(() => {
    (async () => {

      const res = await fetch(`http://localhost:3002/gift/${idOfGift}`);
      setGiftInfo(await res.json());

    })();
  }, []);

  if (giftInfo === null) {
    return null;
  }

  return <>
    <h2>{giftInfo.gift.name}</h2>
    <p>This gift has ID <strong>{giftInfo.gift.id}</strong>. <br /> We had <strong>{giftInfo.gift.count}</strong> of this item and <strong>{giftInfo.givenCount}</strong> were already given.</p>
    <p>
      <Link to="/gift">Go back to list</Link>
    </p>
  </>;
};