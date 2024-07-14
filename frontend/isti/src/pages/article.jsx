import Head from 'next/head';
import ArticleCardContainer from '@/components/articleCardContainer';

function Article() {
  return (
    <>
      <Head>
        <title>Artikel - ISTI</title>
      </Head>
      <main className="pt-16 flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-green-700 text-center text-[80px] font-bold">
          Mau baca apa hari ini?
        </h1>
        <ArticleCardContainer />
      </main>
    </>
  );
}

export default Article;
