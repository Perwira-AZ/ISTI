import Head from 'next/head';
import Image from 'next/image';

function readArticle() {
  return (
    <>
      <Head>ISTI - Judul Article</Head>
      <main className="flex items-center justify-center min-h-screen">
        <div className="pt-16 px-12 max-w-[1200px]">
          <h1 className="text-green-700 text-[60px] mt-10 text-center">
            Judul Artikel
          </h1>
          <p className="mb-8 text-green-700 text-center">
            Oleh: Admin | 21 Juni 2024
          </p>
          {/* <Image
        className="w-full"
        src="https://images.unsplash.com/photo-1545308562-050974fb9ac4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hero images"
      /> */}
          <img
            className="w-full max-h-[500px] object-cover"
            src="https://images.unsplash.com/photo-1545308562-050974fb9ac4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero images"
          />
          <p className="text-black mt-6 text-justify text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est totam
            consequatur nostrum amet quae sapiente beatae tenetur architecto
            ipsam? Maxime omnis ut voluptate dolor voluptatem iste sint facilis
            est amet, rem, voluptates consectetur dolores. Eum atque
            consequuntur omnis, sed, facere eveniet similique maxime provident
            quos quod cumque. Quia, quasi. Repellendus, molestiae, ea numquam
            accusantium voluptatum cupiditate officiis omnis voluptatibus est
            dolorem minima! Cum quasi totam molestias iusto accusamus tempora
            hic beatae quam odio, alias corporis rem saepe perspiciatis
            laudantium adipisci impedit autem magni, enim voluptate ipsa
            praesentium est illo? Adipisci dolorum illum quia repellat quasi
            molestiae possimus temporibus, saepe incidunt! Voluptates quisquam
            eligendi exercitationem accusantium accusamus labore porro delectus
            possimus eaque expedita! Mollitia quo obcaecati eaque voluptates.
            Minima voluptates, voluptatem voluptatibus aspernatur eum sit sed
            magni? Enim perferendis, dolorem aperiam tenetur optio veritatis
            nesciunt maxime eligendi quam magni vero necessitatibus alias dicta
            ducimus neque est! Quaerat beatae odio modi magni deserunt quis
            eligendi quas temporibus sed fugiat vero aliquam nesciunt,
            voluptatibus tempore, adipisci tenetur voluptate illo perferendis
            voluptatem, corrupti laudantium incidunt. Labore corrupti illum
            nostrum nam harum distinctio atque eius rem molestiae iusto soluta
            ipsam, ex delectus dolore quidem tenetur sit aut expedita
            accusantium consequatur, neque architecto a! Harum assumenda, ut
            ipsa error ducimus hic earum magnam atque voluptatem cum animi,
            nemo, reprehenderit numquam fugit accusantium repellat laboriosam
            autem tempore porro deleniti in consequatur at voluptates tenetur?
            Nesciunt, sit ullam! Sit magnam voluptas at rerum natus eum qui est
            sequi et. Repellendus impedit laudantium eligendi nesciunt quos aut
            facere velit amet dolores eaque officiis cum, facilis nihil
            necessitatibus exercitationem alias consectetur itaque sit nemo
            cupiditate in totam! Rem, id pariatur facere cumque nulla, dolorem
            praesentium esse ducimus minus placeat laudantium consequatur a
            maxime. Numquam dicta eligendi, eum cupiditate suscipit debitis.
            Voluptatum porro voluptatibus saepe eum libero eaque perspiciatis
            nobis expedita.
          </p>
          <button
            className="my-6 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
          >
            Baca artikel lainnya &#10095; &#10095;
          </button>
        </div>
      </main>
    </>
  );
}

export default readArticle;
