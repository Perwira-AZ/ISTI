import { useRouter } from 'next/router';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

function ReadArticle() {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getArticleByID(article_id) {
    try {
      const response = await fetch(
        `https://${process.env.NEXT_PUBLIC_HOST}/api/article/${article_id}`
      );
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      if (id) {
        setLoading(true);
        const article_data = await getArticleByID(id);
        setArticle(article_data);

        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  const handleReadOther = () => {
    router.push(`/article/`); // Adjust the route as needed
  };

  return (
    <>
      {loading ? (
        <>
          <Head>
            <title>ISTI</title>
          </Head>
          <main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-6">
            loading
          </main>
        </>
      ) : (
        <>
          <Head>ISTI - article: {article.title}</Head>
          <main className="flex items-center justify-center min-h-screen">
            <div className="pt-16 px-12 max-w-[1200px]">
              <h1 className="text-green-700 text-[60px] mt-10 text-center">
                {article.title}
              </h1>
              <p className="mb-8 text-green-700 text-center">
                {article.date.split('T')[0]}
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
                {article.content}
              </p>
              <button
                className="my-6 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-green-500 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
                onClick={handleReadOther}
              >
                Baca artikel lainnya &#10095; &#10095;
              </button>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default ReadArticle;
