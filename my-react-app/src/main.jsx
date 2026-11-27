import { createRoot } from 'react-dom/client'

const myElement = <h1>Hello {/* Wonderful */} World </h1>;

createRoot(document.getElementById('root')).render(myElement);