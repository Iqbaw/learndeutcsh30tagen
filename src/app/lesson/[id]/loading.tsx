export default function LessonLoading() {
  return (
    <div className="max-w-6xl mx-auto animate-[pulse_1.6s_ease-in-out_infinite]">
      <div className="h-4 w-40 rounded skeleton mb-4" />
      <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
        <div className="space-y-5">
          <div className="h-56 rounded-2xl skeleton" />
          <div className="h-96 rounded-2xl skeleton" />
        </div>
        <div className="space-y-4">
          <div className="h-64 rounded-2xl skeleton" />
          <div className="h-40 rounded-2xl skeleton" />
        </div>
      </div>
    </div>
  );
}
