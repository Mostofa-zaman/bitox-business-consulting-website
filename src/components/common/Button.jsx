export default function Button({ label }) {
  const style = {
    borderRadius: "90px",
    padding: "20px 30px",
    cursor: "pointer",
  };

  return <button style={style}>{label}</button>;
}