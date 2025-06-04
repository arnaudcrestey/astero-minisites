import { useEffect, useState } from 'react';

export default function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  return (
    <div>
      <h1>Boutique ésotérique</h1>
      {products.length === 0 && <p>Aucun produit disponible.</p>}
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.price}€
          </li>
        ))}
      </ul>
    </div>
  );
}
