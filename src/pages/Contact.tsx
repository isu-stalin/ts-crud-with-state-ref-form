import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormValues = { item: string };

const Contact = () => {
  const { register, handleSubmit, reset, setValue } = useForm<FormValues>();
  const [items, setItems] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const onSubmit = (data: FormValues) => {
    const val = data.item.trim();
    if (!val) return;

    if (editIndex !== null) {
      const updated = [...items];
      updated[editIndex] = val;
      setItems(updated);
      setEditIndex(null);
    } else {
      setItems([...items, val]);
    }

    reset();
  };

  const deleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    if (editIndex === index) {
      reset();
      setEditIndex(null);
    }
  };

  const editItem = (index: number) => {
    setValue('item', items[index]);
    setEditIndex(index);
  };

  return (
    <>
      <h2>CRUD: react-hook-form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('item', { required: true })} />
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

export default Contact;
