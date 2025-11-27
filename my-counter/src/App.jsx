import React, { useState, useEffect } from 'react';

export default function App() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('simple-click-counter');
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('simple-click-counter', count);
  }, [count]);

  return (
    <div style={{ fontFamily: 'Arial', padding: 20, maxWidth: 360, margin: '40px auto' }}>
      <h2 style={{ textAlign: 'center' }}>Счётчик кликов</h2>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: 16, border: '1px solid #ddd', borderRadius: 8, background: '#fff'
      }}>
        <button onClick={() => setCount(c => c - 1)}>−</button>
        <div style={{ fontSize: 32, fontWeight: '600' }}>{count}</div>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button onClick={() => setCount(0)}>Сброс</button>
        <button onClick={() => setCount(c => c + 5)}>+5</button>
        <button onClick={() => setCount(c => c - 5)}>−5</button>
      </div>
    </div>
  );
}
