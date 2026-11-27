import { createRoot } from 'react-dom/client'

function Car() {
  const x = "myclass";
  return (
    <h1 className={x}>Hello World</h1>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);
