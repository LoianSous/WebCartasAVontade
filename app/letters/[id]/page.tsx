import Template1 from "@/app/templates/Template1";
import { getLetterByToken } from "@/app/services/letters";
import Image from "next/image";

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
        <div
          className="
            absolute
            sm:mt-25
            top-10
            sm:-top-24
            left-[75%]
            z-20
          "
        >
          <Image
            src="/coracao2.png"
            alt="coração"
            width={90}
            height={90}
            className="opacity-70"
          />
        </div>
         <div
          className="
            absolute
            sm:mt-20
            top-6
            sm:-top-20
            left-[65%]
            z-20
          "
        >
          <Image
            src="/coracao2.png"
            alt="coração"
            width={100}
            height={100}
            className="opacity-80"
          />
        </div>
        <div
          className="
            absolute
            sm:mt-17
            top-0
            sm:-top-16
            left-[58%]
            -translate-x-1/2
            z-20
          "
        >
          <Image
            src="/coracao1.png"
            alt="coração"
            width={120}
            height={120}
            className="opacity-90 drop-shadow-[0_0_18px_rgba(220,38,38,0.7)]"
          />
        </div>

        <div className="absolute top-12 -left-20 opacity-60">
          <Image src="/coracaofundo.png" alt="" width={240} height={240} />
        </div>

        <div className="absolute top-100 -right-20 opacity-60">
          <Image src="/coracaofundo.png" alt="" width={240} height={240} />
        </div>

        <div className="absolute top-188 -left-20 opacity-60">
          <Image src="/coracaofundo.png" alt="" width={240} height={240} />
        </div>

        <div className="absolute top-276 -right-20 opacity-60">
          <Image src="/coracaofundo.png" alt="" width={240} height={240} />
        </div>

        <div className="absolute top-364 -left-20 opacity-60">
          <Image src="/coracaofundo.png" alt="" width={240} height={240} />
        </div>

        <div className="absolute top-452 -right-20 opacity-60">
          <Image src="/coracaofundo.png" alt="" width={240} height={240} />
        </div>

        <div className="absolute top-540 -left-20 opacity-60">
          <Image src="/coracaofundo.png" alt="" width={240} height={240} />
        </div>


      </div>

      {/* Container */}
      <div className="max-w-2xl w-full relative z-10 px-4">
        {templates[1]}
      </div>

    </main>

  );
}
