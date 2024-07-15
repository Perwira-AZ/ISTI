import ArticleCard from './articleCard';

function ArticleCardContainer({ list }) {
  return (
    <>
      {list.length === 0 ? (
        <p className="text-center">No articles found.</p>
      ) : (
        <div className="px-12 pb-12 grid grid-cols-3 justify-center justify-items-center items-center content-center gap-8 max-w-[1500px]">
          {list.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </>
  );
}

export default ArticleCardContainer;
