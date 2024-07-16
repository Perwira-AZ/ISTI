import Head from 'next/head';
import ArticleCardContainer from '@/components/articleCardContainer';
import React, { useState, useEffect } from 'react';

function Article() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getArticles() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HTTP_URL}/api/article/`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching articles: ', error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const article_data = await getArticles();
      setArticles(article_data); // Set articles here
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Head>
            <title>ISTI</title>
          </Head>
          <main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-6 text-black">
            loading
          </main>
        </>
      ) : (
        <>
          <Head>
            <title>Artikel - ISTI</title>
          </Head>
          <main className="pt-16 flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-green-700 text-center text-[80px] font-bold">
              Mau baca apa hari ini?
            </h1>
            <ArticleCardContainer list={articles} />{' '}
            {/* Pass articles as prop */}
          </main>
        </>
      )}
    </>
  );
}

export default Article;
