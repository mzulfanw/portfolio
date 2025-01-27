type tParams = Promise<{ underdevelopment: string }>;

export default async function About({ params }: { params: tParams }) {
  const { underdevelopment } = await params;
  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold">
        Page Under Work: {underdevelopment}
      </h1>
      <p className="mt-4 text-lg">
        This page is currently being worked on. Check back soon!
      </p>
    </div>
  );
}
