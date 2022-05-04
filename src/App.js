import { useState } from 'react';

import Navbar from './components/Navbar';
import Container from './components/Container';
import FromInput from './components/FromInput';
import Info from './components/Info';
import Todos from './components/Todos';
import Empty from './components/Empty';

function App() {
  const [value, setValue] = useState('');
  // console.log(value);
  const [todos, setTodos] = useState([
    { title: 'Susu Ultra', count: 1 },
    { title: 'Tahu Sumedang', count: 1 },
    { title: 'Semangka', count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault(); // mencegah browser refresh

    if (!value) {
      alert('No blank List!');
      return;
    }
    const addedTodos = [
      ...todos,
      {
        title: value,
        count: 1,
      },
    ];
    setTodos(addedTodos);
    setValue('');
  };

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;

    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newsTodos = [...todos];

    if (newsTodos[index].count > 0) {
      // selama jumlah count masih diatas 0
      // bisa lakuin pengurangan
      newsTodos[index].count = newsTodos[index].count - 1;
    } else {
      //kalau sudah 0 dan masih dikurangin juga
      //hapus array value dengan index sesuai
      newsTodos.splice(index, 1);
    }
    setTodos(newsTodos);
  };

  const getTotalCounts = () => {
    const totalCount = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);
    return totalCount;
  };

  return (
    <>
      <Navbar />
      <Container>
        <FromInput onSubmit={handleSubmit} onChange={(e) => setValue(e.target.value)} value={value} />
        <Info todosLength={todos.length} totalCounts={getTotalCounts()} onDelete={() => setTodos([])} />
        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => {
              handleSubstractionCount(index);
            }}
            onAdditon={(index) => {
              handleAdditionCount(index);
            }}
          />
        ) : (
          <Empty />
        )}
      </Container>
    </>
  );
}

export default App;
// react fragment (<></>) adalah memwrap 2 element atau lebih tanpa membuat alter div
