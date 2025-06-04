export default function EnergyMessage({ message }) {
  if (!message) return null;
  return (
    <div style={{ border: '1px solid #ccc', padding: 10, marginBottom: 20 }}>
      <h3>Message énergétique du jour</h3>
      <p>{message}</p>
    </div>
  );
}
