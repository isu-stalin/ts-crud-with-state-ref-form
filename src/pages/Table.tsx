import { useState } from 'react';

const Table = () => {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = input;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, input]);
    }

    setInput('');
  };

  const deleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    if (editIndex === index) {
      setInput('');
      setEditIndex(null);
    }
  };

  const editItem = (index: number) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  return (
    <>
      <h2>CRUD: useState</h2>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='type..' />
        <button type="submit">{editIndex !== null ? 'Save' : 'Add'}</button>
      </form>
      <ul>
        {items.map((val, i) => (
          <li key={i}>
            {val}
            <button onClick={() => editItem(i)}>Edit</button>
            <button onClick={() => deleteItem(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Table;
