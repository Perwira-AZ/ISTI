import { useRouter } from 'next/router';

function ArticleCard({ article }) {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/article/${article.id}`); // Adjust the route as needed
  };

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl max-w-96 border-black border-[1px]">
      <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40">
        <img
          src="https://images.unsplash.com/photo-1545308562-050974fb9ac4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile-picture"
        />
      </div>
      <div className="p-6 pb-2">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 w-full max-h-[60px] truncate text-wrap">
          {article.title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit max-h-[180px] truncate text-wrap">
          {article.content}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          onClick={handleReadMore}
        >
          Lanjut Baca
        </button>
      </div>
    </div>
  );
}

export default ArticleCard;
