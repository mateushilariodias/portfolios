import PortfolioSection from "@/components/PortfolioSection";

export default function writerPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="py-12 text-center">
        <h1 className="text-4xl font-bold">Escritor</h1>
        <p className="text-lg text-gray-700 mt-2">Formações e experiências profissionais</p>
      </div>
      <PortfolioSection area="writer" />
    </main>
  );
}