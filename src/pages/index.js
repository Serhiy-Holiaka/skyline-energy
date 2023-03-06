import Head from 'next/head'
import MainLayout from "@/components/layout/MainLayOut";

const Home = () => {
  return (
    <>
      <Head>
        <title>Skyline Energy - Home</title>
        <meta name="description" content="Skyline Energy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container mx-auto">Home</div>
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;