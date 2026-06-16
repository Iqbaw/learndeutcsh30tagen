export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto animate-[pulse_1.6s_ease-in-out_infinite]">
      <div className="h-7 w-56 rounded-lg skeleton mb-3" />
      <div className="h-4 w-80 max-w-full rounded skeleton mb-8" />

      <div className="grid lg:grid-cols-3 gap-4 mb-4">
        <div className="lg:col-span-2 h-48 rounded-2xl skeleton" />
        <div className="h-48 rounded-2xl skeleton" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-20 rounded-2xl skeleton" />
        ))}
      </div>
      <div className="h-64 rounded-2xl skeleton" />
    </div>
  );
}
