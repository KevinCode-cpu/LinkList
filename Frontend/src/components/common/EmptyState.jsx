export default function EmptyState({ title, description }) {
  return (
    <div className="text-center py-12 text-gray-500">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
}

