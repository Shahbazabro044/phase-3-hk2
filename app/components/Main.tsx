'use client';

import { useState } from 'react';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export default function Main() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState<string | null>(null);

  const addTodo = () => {
    if (!input.trim()) return;

    if (editId) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: input,
          completed: false,
        },
      ]);
    }

    setInput('');
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const startEdit = (todo: Todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-6">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          ✨ My Todo List
        </h1>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border border-gray-200 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button
            onClick={addTodo}
            className="bg-indigo-600 text-white px-5 rounded-xl hover:bg-indigo-700 transition"
          >
            {editId ? 'Update' : 'Add'}
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.map(todo => (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 border border-gray-100 p-4 rounded-xl hover:shadow-md transition"
            >
              <div
                onClick={() => toggleComplete(todo.id)}
                className={`cursor-pointer font-medium ${
                  todo.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-700'
                }`}
              >
                {todo.text}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(todo)}
                  className="bg-indigo-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-indigo-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-rose-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-rose-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
