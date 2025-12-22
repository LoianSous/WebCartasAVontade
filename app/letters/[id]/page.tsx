import Template1 from "@/app/templates/Template1";
import { getLetterByToken } from "@/app/services/letters";

export default async function Page({ params }: any) {
  const { id } = await params;

  let response;

  try {
    response = await getLetterByToken(id);
  } catch (err) {
    console.error(err);
    return (
      <div className="text-center p-8 text-red-600 text-xl">
        Erro ao carregar a carta. Verifique se o link está correto.
      </div>
    );
  }

  if (!response || !response.letter) {
    return (
      <div className="text-center p-8 text-red-600 text-xl">
        Carta não encontrada.
      </div>
    );
  }

  const letter = response.letter;
  const photos = response.photos || [];

  const templates: any = {
    1: <Template1 letter={letter} photos={photos} />,
  };

  return (
    <main className="min-h-screen bg-rose-100 relative overflow-hidden py-8 flex justify-center">

      {/* Corações no fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-8 text-red-500 opacity-60 text-2xl">♥</div>
        <div className="absolute top-32 right-12 text-red-600 opacity-50 text-lg">♥</div>
        <div className="absolute top-48 left-1/4 text-red-400 opacity-60 text-xl">♥</div>
        <div className="absolute top-64 right-1/3 text-red-500 opacity-50 text-2xl">♥</div>
        <div className="absolute top-80 left-12 text-red-600 opacity-60 text-lg">♥</div>
        <div className="absolute top-96 right-20 text-red-400 opacity-50 text-2xl">♥</div>
        <div className="absolute bottom-64 left-1/3 text-red-500 opacity-60 text-xl">♥</div>
        <div className="absolute bottom-48 right-1/4 text-red-600 opacity-50 text-2xl">♥</div>
        <div className="absolute bottom-32 left-20 text-red-400 opacity-60 text-lg">♥</div>
        <div className="absolute bottom-12 right-32 text-red-500 opacity-50 text-2xl">♥</div>
        <div className="absolute top-1/2 right-8 text-red-600 opacity-60 text-xl">♥</div>
        <div className="absolute top-1/3 right-1/2 text-red-400 opacity-50 text-lg">♥</div>
      </div>

      {/* Container */}
      <div className="max-w-2xl w-full relative z-10 px-4">
        {templates[1]}
      </div>

    </main>
  );
}
