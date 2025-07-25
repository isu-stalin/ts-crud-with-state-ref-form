import { useRef, useState } from 'react';

const About = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = inputRef.current?.value.trim();
    if (!val) return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = val;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, val]);
    }

    if (inputRef.current) inputRef.current.value = '';
  };

  const deleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    if (editIndex === index && inputRef.current) {
      inputRef.current.value = '';
      setEditIndex(null);
    }
  };

  const editItem = (index: number) => {
    if (inputRef.current) {
      inputRef.current.value = items[index];
      setEditIndex(index);
    }
  };

  return (
    <div>
      <h2>CRUD: useRef</h2>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder='type...' />
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
    </div>
  );
};

export default About;
