import './AddChild.css';

import React, { FormEvent, useState } from 'react';
import { ChildEntity, CreateChildReq, GiftEntity } from 'types';
import { Loading } from '../Loader/Loader';

export const AddChild = () => {
  const [form, setForm] = useState<CreateChildReq>({
    name: '',
    giftId: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [resultInfo, setResultInfo] = useState<string | null>(null);

  const updateForm = (key: string, value: any) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }));
  };

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3002/child`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data: ChildEntity = await res.json();
      setLoading(false);
      setResultInfo(`${data.name} has been created on Santa's list.`);
      if (res.status === 400 || res.status === 500) {
        const error = await res.json();
        alert(`An error occurred: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (resultInfo !== null) {
    return <div>
      <p><strong>{resultInfo}</strong></p>
      <button onClick={() => setResultInfo(null)}>Add another one</button>
    </div>;
  }

  return <form onSubmit={sendForm}>
    <h2>Add child</h2>
    <p>
      <label>
        Name: <br />
        <input
          type="text"
          value={form.name}
          onChange={e => updateForm('name', e.target.value)}
        />
      </label>
    </p>
    <button type="submit">Add</button>
  </form>;
};