export default function Card({ title, description, imageUrl }) {
  return (
    <article className="bg-whiten rounded-xl shadow-md p-6">
      <img
        src={imageUrl}
        alt={title}
        className="h-40 w-full rounded-lg object-cover"
      />
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      <p className="mt-2 text-slate-600">{description}</p>

      <button
        type="button"
        className="mt-4 rounded-lg bg-blue-700 px-4 py-2 text-white"
      >
        View course
      </button>
    </article>
  );
}
