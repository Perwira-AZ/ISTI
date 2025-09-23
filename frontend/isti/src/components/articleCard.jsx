import { useRouter } from 'next/router';
import Image from 'next/image';

function ArticleCard({ article }) {
  const router = useRouter();
  const handleReadMore = () => router.push(`/article/${article.id}`);

  const contentClamp = article.image ? 'line-clamp-6' : 'line-clamp-10';

  return (
    <div className="relative flex h-[360px] flex-col overflow-hidden rounded-xl border border-black bg-white text-gray-700 shadow-2xl max-w-96 mt-6">
      {/* Image (optional) */}
      {article.image && (
        <div className="relative mx-4 mt-4 h-40 overflow-hidden rounded-xl">
          <Image
            src={`https://lh3.googleusercontent.com/d/${article.image}`}
            alt={article.title}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      )}

      {/* Content fills remaining space */}
      <div className="flex-1 min-h-0 px-6 py-2 overflow-hidden">
        <h5 className="mb-1 line-clamp-2 font-sans text-xl font-semibold leading-snug text-blue-gray-900">
          {article.title}
        </h5>
        <p
          className={`font-sans text-base font-light leading-relaxed text-gray-700 ${contentClamp}`}
        >
          {article.content}
        </p>
      </div>

      {/* Button sits at bottom with 24px gap */}
      <div className="mt-auto px-6 pb-6">
        <button
          className="select-none rounded-lg bg-green-500 px-6 py-3 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
          type="button"
          onClick={handleReadMore}
        >
          Baca
        </button>
      </div>
    </div>
  );
}

export default ArticleCard;
