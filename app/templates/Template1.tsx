import Image from "next/image";
import { Dancing_Script, Montserrat } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

export default function Template1({ letter, photos }: any) {
  return (
    <div className="template-wrapper rounded-3xl overflow-visible sm:overflow-hidden drop-shadow-[0_0_18px_rgba(220,38,38,0.7)]">

      {/* Glow decorativo */}
      <div className="relative z-10">

        {/* --- TOPO DA CARTA --- */}
        <div className="template-top relative px-20 sm:px-10 py-10">

          <div className="text-center space-y-6 mt-25">

            {/* Título */}
            <p
              className={`
              ${dancingScript.className}
              text-red-600 font-semibold
              text-3xl sm:text-4xl md:text-5xl
              drop-shadow-[0_0_18px_rgba(220,38,38,0.7)]
            `}
            >
              Eu te amo! {letter.to_name}
            </p>

          </div>
        </div>

        {/* --- MIÓLO DA CARTA --- */}
        <div className="template-middle">
          <div
            className={`
            ${greatVibes.className}
            template-content
            px-4 sm:px-12 py-12
            space-y-14
          `}
          >

            {/* Você é... */}
            <div
              className={`
              ${greatVibes.className}
              max-w-xl mx-auto
              px-4 sm:px-8
              text-center text-red-600 font-semibold
            `}
            >
              <p className="text-base sm:text-lg leading-relaxed">
                <span>Você é </span>
                <span className="whitespace-pre-wrap">
                  {letter.compliment}
                </span>
              </p>
            </div>

            {/* Texto pronto */}
            <div
              className={`
              ${greatVibes.className}
              max-w-xl mx-auto
              px-4 sm:px-8
              text-center text-red-600 font-semibold
            `}
            >
              <p className="text-sm sm:text-base leading-relaxed">
                Esta carta é um presente feito com amor, pensado especialmente
                para você, para celebrar tudo o que sentimos juntos.
              </p>
            </div>

            {/* DE / PARA */}
            <div className="text-center text-red-600 font-semibold space-y-6">
              <p className="text-base sm:text-lg">
                <span className="text-red-700">DE:</span>
                <span className="ml-2 border-b-2 border-red-700 inline-block px-4 py-1 min-w-[180px]">
                  {letter.from_name}
                </span>
              </p>

              <p className="text-base sm:text-lg">
                <span className="text-red-700">PARA:</span>
                <span className="ml-2 border-b-2 border-red-700 inline-block px-4 py-1 min-w-[180px]">
                  {letter.to_name}
                </span>
              </p>
            </div>

            {/* Separador */}
            <div className="flex justify-center">
              <Image
                src="/coracaosepara.png"
                alt="Separador coração"
                width={360}
                height={240}
                className="opacity-80"
              />
            </div>

            {/* Mensagens especiais */}
            {letter.special_messages && (
              <div className="max-w-xl mx-auto px-4 sm:px-8 text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-6">
                  MENSAGENS ESPECIAIS
                </h2>
                <p className="text-red-600 leading-relaxed whitespace-pre-wrap">
                  {letter.special_messages}
                </p>
              </div>
            )}

            {/* Separador */}
            <div className="flex justify-center">
              <Image
                src="/coracaosepara.png"
                alt="Separador coração"
                width={360}
                height={240}
                className="opacity-80"
              />
            </div>

            {/* SOBRE NÓS */}
            <div className="text-center space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-red-600">
                SOBRE NÓS!
              </h2>

              <div className="space-y-3 text-red-600 font-semibold text-sm">
                {letter.time_together && (
                  <p className="uppercase mb-15">
                    Nós estamos há {letter.time_together} juntos
                  </p>
                )}
                <p className="uppercase italic">NOSSOS MOMENTOS...</p>
              </div>
            </div>

            {/* Galeria */}
            {photos?.length > 0 && (
              <div className="relative w-full">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 py-6 scrollbar-hide drop-shadow-[0_0_18px_rgba(220,38,38,0.7)]">
                  {photos.map((url: string, i: number) => (
                    <div
                      key={i}
                      className="
                      snap-center shrink-0
                      w-[70vw] sm:w-[260px]
                      bg-white border-8 border-red-300 shadow-lg
                      transform -rotate-2 hover:rotate-1 transition-transform
                    "
                    >
                      <img
                        src={url}
                        alt={`Foto ${i + 1}`}
                        className="
                        w-full h-[60vw] sm:h-[260px]
                        max-h-[400px]
                        object-cover object-center
                        rounded-sm
                      "
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Separador */}
            <div className="flex justify-center">
              <Image
                src="/coracaosepara.png"
                alt="Separador coração"
                width={360}
                height={240}
                className="opacity-80"
              />
            </div>

            {/* SOBRE VOCÊ */}
            <div className="max-w-xl mx-auto px-4 sm:px-8 text-center space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-red-600">
                SOBRE VOCÊ...
              </h2>

              <div className="space-y-2 text-red-600 font-semibold text-sm uppercase">
                {letter.birthday && (
                  <p>
                    Data de aniversário:
                    <span className="text-red-700 ml-1">
                      {new Date(letter.birthday).toLocaleDateString("pt-BR")}
                    </span>
                  </p>
                )}

                {letter.favorite_color && (
                  <p className="mt-10">Cor preferida: <span className="text-red-700">{letter.favorite_color}</span></p>
                )}

                {letter.favorite_movie && (
                  <p className="mt-10">Filme preferido: <span className="text-red-700">{letter.favorite_movie}</span></p>
                )}

                {letter.favorite_food && (
                  <p className="mt-10">Comida preferida: <span className="text-red-700">{letter.favorite_food}</span></p>
                )}

                {letter.zodiac_sign && (
                  <p className="mt-10">Signo: <span className="text-red-700">{letter.zodiac_sign}</span></p>
                )}
              </div>

              {letter.things_they_like && (
                <p className="text-red-600 leading-relaxed">
                  <span className="font-semibold block mb-1">
                    Coisas que gosta:
                  </span>
                  {letter.things_they_like}
                </p>
              )}
            </div>

            {/* Envelope */}
            <div className="flex justify-center">
              <Image
                src="/cartacoracaofinal.png"
                alt="Envelope final"
                width={200}
                height={120}
                className="opacity-80"
              />
            </div>

          </div>
        </div>

        {/* --- FUNDO FINAL --- */}
        <div className="template-bottom py-10">
          <div className="text-center space-y-4">
            <p className="text-xl sm:text-2xl font-bold text-red-600 italic">
              COM TODO AMOR E CARINHO...
            </p>
            <p className="text-2xl mt-20 sm:text-3xl font-bold text-red-700">
              {letter.from_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
