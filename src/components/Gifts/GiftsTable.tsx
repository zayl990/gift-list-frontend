import React, { useEffect, useState } from 'react';
import { GiftEntity } from 'types';
import { GiftsTableRow } from './GiftTableRow';

interface Props {
  gifts: GiftEntity[];
  onGiftsChange: () => void;
}

export const GiftsTable = (props: Props) => (
  <table>
    <thead>
      <th>ID</th>
      <th>Name</th>
      <th>Count</th>
      <th>Action</th>
    </thead>
    <tbody>
      {
        props.gifts.map(gift =>
          <GiftsTableRow gift={gift} key={gift.id} onGiftsChange={props.onGiftsChange} />
        )
      }
    </tbody>

  </table>
)