export default function Text({ text }) {
  return (
    <div className="bg-primary p-2 border rounded-2">
      <pre>{text}</pre>
    </div>
  );
}
