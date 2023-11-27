import { error } from 'console';
import React, { MouseEvent } from 'react';
import { GiftEntity } from 'types';


interface Props {
  gift: GiftEntity;
  onGiftsChange: () => void;
}

export const GiftsTableRow = (props: Props) => {
  const deleteGift = async (e: MouseEvent) => {
    e.preventDefault();

    if (!window.confirm(`Are you sure you want to remove ${props.gift.name}?`)) {
      return;
    }

    const res = await fetch(`http://localhost:3002/gift/${props.gift.id}`, {
      method: 'DELETE',
    });
    if ([400, 500].includes(res.status)) {
      const error = await res.json();
      alert(`Error ${error.message}`);
      return;
    }

    props.onGiftsChange();
  }

  return (
    <tr>
      <th>
        {props.gift.id}
      </th>
      <td>
        {props.gift.name}
      </td>
      <td>
        {props.gift.count}
      </td>
      <td><a href="#" onClick={deleteGift}>🗑️</a></td>
    </tr>
  )
}