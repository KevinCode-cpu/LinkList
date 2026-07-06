export default function ErrorState({ message }) {
  return (
    <div className="text-center text-red-600 py-6">
      {message || 'Something went wrong'}
    </div>
  );
}
