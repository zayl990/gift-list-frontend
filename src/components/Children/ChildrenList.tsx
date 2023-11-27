import './ChildrenList.css';
import React, { useEffect, useState } from 'react';
import { ChildrenTable } from "./ChildrenTable";
import { ListChildrenRes } from 'types';
import { Loading } from '../Loader/Loader';

export const ChildrenList = () => {
  const [data, setData] = useState<ListChildrenRes | null>(null);

  const refreshGifts = async () => {
    setData(null);
    const res = await fetch('http://localhost:3002/child');
    setData(await res.json());
  };

  useEffect(() => {
    refreshGifts();
  }, []);

  if (data === null) {
    return <Loading />;
  }

  return <>
    <h1>Gifts</h1>
    <ChildrenTable childrenList={data.childrenList} giftsList={data.giftsList} />
  </>;
};