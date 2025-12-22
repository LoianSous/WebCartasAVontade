export default function Template1({ letter, photos }: any) {
  return (
    <div className="template-wrapper rounded-3xl overflow-hidden">

      {/* --- TOPO DA CARTA --- */}
      <div className="template-top"></div>

      {/* --- MIÓLO DA CARTA (REPETE) --- */}
      <div className="template-middle">
        <div className="template-content p-12 space-y-12">

          {/* Cabeçalho */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 text-4xl text-red-500">
              <span>♥</span><span>♥</span><span>♥</span>
            </div>

            <h1 className="text-5xl font-bold text-red-500 italic font-cursive">
              {letter.letter_title || "Uma Carta Especial ❤️"}
            </h1>

            <p className="text-red-600 text-xl font-semibold">{letter.to_name}</p>
          </div>

          {/* DE / PARA */}
          <div className="space-y-2 text-center text-red-600 font-semibold">
            <p className="text-lg">
              <span className="text-red-700">DE:</span>
              <span className="ml-2 border-b-2 border-red-700 inline-block px-4 py-1 min-w-48">
                {letter.from_name}
              </span>
            </p>

            <p className="text-lg">
              <span className="text-red-700">PARA:</span>
              <span className="ml-2 border-b-2 border-red-700 inline-block px-4 py-1 min-w-48">
                {letter.to_name}
              </span>
            </p>
          </div>

          {/* separador */}
          <div className="flex justify-center text-4xl text-red-500">♥</div>

          {/* Mensagens especiais */}
          {letter.special_messages && (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 mb-6">MENSAGENS ESPECIAIS</h2>
              <p className="text-red-600 leading-relaxed text-justify whitespace-pre-wrap">
                {letter.special_messages}
              </p>
            </div>
          )}

          {/* separador */}
          <div className="flex justify-center text-4xl text-red-500">♥</div>

          {/* SOBRE NÓS */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-red-600">SOBRE NÓS!</h2>

            <div className="space-y-3 text-red-600 font-semibold text-sm">
              {letter.time_together && (
                <p className="uppercase">{letter.time_together}</p>
              )}
              <p className="uppercase italic">NOSSOS MOMENTOS...</p>
            </div>
          </div>

          {/* Galeria */}
          {photos.length > 0 && (
            <div className="flex flex-col items-center gap-6">
              {photos.map((url: string, i: number) => (
                <div
                  key={i}
                  className="bg-white border-8 border-red-300 shadow-lg transform -rotate-2 hover:rotate-1 transition-transform"
                >
                  <img
                    src={url}
                    alt="Foto"
                    className="w-64 h-64 object-cover rounded-sm"
                  />
                  <div className="h-12"></div>
                </div>
              ))}
            </div>
          )}

          {/* separador */}
          <div className="flex justify-center text-4xl text-red-500">♥</div>

          {/* TUDO SOBRE ELA */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-red-600">TUDO SOBRE ELA....</h2>

            <div className="space-y-3 text-red-600 font-semibold text-sm uppercase">
              {letter.birthday && (
                <p>DATA DE ANIVERSÁRIO:
                  <span className="text-red-700 ml-1">
                    {new Date(letter.birthday).toLocaleDateString("pt-BR")}
                  </span>
                </p>
              )}

              {letter.favorite_color && (
                <p>COR PREFERIDA: <span className="text-red-700">{letter.favorite_color}</span></p>
              )}

              {letter.favorite_movie && (
                <p>FILME PREFERIDO: <span className="text-red-700">{letter.favorite_movie}</span></p>
              )}

              {letter.favorite_food && (
                <p>COMIDA PREFERIDA: <span className="text-red-700">{letter.favorite_food}</span></p>
              )}

              {letter.zodiac_sign && (
                <p>MÚSICA FAVORITA: <span className="text-red-700">{letter.zodiac_sign}</span></p>
              )}
            </div>

            {letter.things_they_like && (
              <p>
                <span className="font-semibold text-red-600 block mb-1">
                  Coisas que ela gosta:
                </span>
                <span className="text-red-600">
                  {letter.things_they_like}
                </span>
              </p>
            )}
          </div>

          {/* envelope */}
          <div className="flex justify-center">
            <div className="text-6xl opacity-40">✉</div>
          </div>

          {/* separador */}
          <div className="flex justify-center text-4xl text-red-500">♥</div>

          {/* Final */}
          <div className="text-center space-y-6">
            <p className="text-2xl font-bold text-red-600 italic">COM TODO AMOR E CARINHO....</p>
            <p className="text-3xl font-bold text-red-700">{letter.from_name}</p>
          </div>

        </div>
      </div>

      {/* --- FUNDO FINAL DA CARTA --- */}
      <div className="template-bottom"></div>

    </div>
  );
}
