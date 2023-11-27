import './AddGift.css';

import React, { FormEvent, useState } from "react";
import { CreateGiftReq, GiftEntity } from 'types';
import { Loading } from "../Loader/Loader";

export const AddGift = () => {
  const [form, setForm] = useState<CreateGiftReq>({
    name: "",
    count: 0,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const [resultsInfo, setResultsInfo] = useState<string | null>(null);

  const updateForm = (key: string, value: any) => {
    setForm(form => ({
      ...form,
      [key]: value,
    }));
  }

  const sendForm = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch('http://localhost:3002/gift', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data: GiftEntity = await res.json();

      setLoading(false);
      setResultsInfo(`${data.name} został dodany z ID ${data.id}`);
      if (res.status === 400 || res.status === 500) {
        const error = await res.json();
        alert(`An error occurred: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return <Loading />
  }

  if (resultsInfo !== null) {
    return (
      <div>
        <p>
          <strong className="added">{resultsInfo}</strong>
          <button onClick={() => { setResultsInfo(null) }}>Dodaj kolejny prezent</button>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={sendForm}>
      <h2>Dodaj prezent</h2>
      <label>
        <input
          type="text"
          placeholder="Nazwa prezentu"
          value={form.name}
          onChange={e => updateForm('name', e.target.value)}
        />
      </label>
      <label>
        <input
          type="number"
          placeholder="liczba sztuk"
          value={form.count}
          onChange={e => updateForm('count', e.target.value)}
        />
      </label>
      <button type="submit">Dodaj</button>
    </form>
  )
}