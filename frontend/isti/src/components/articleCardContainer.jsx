import ArticleCard from './articleCard';

function ArticleCardContainer({ list }) {
  if (!list || list.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg">No articles found.</p>
    );
  }

  return (
    <div className="px-6 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center justify-items-center items-center content-center gap-8 max-w-[1500px] mx-auto">
      {list.map((article) => (
        <ArticleCard key={article.id || article.slug} article={article} />
      ))}
    </div>
  );
}

export default ArticleCardContainer;
