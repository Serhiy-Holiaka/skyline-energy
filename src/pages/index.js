import Head from 'next/head';
import MainLayout from '@/components/layout/MainLayOut';

const Home = () => {
    return (
        <>
            <Head>
                <title>Skyline Energy - Home</title>
                <meta name="description" content="Skyline Energy" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="mx-auto h-screen max-h-[970px] bg-hero-bg bg-cover">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <p className="text-white text-lg font-medium tracking-[0.2em] uppercase pb-4">
                        Providing quality service and maximizing return investment
                    </p>
                    <h1 className="text-white text-center text-[95px] leading-[130%] font-light max-w-[850px]">Beneficial partnership with Skyline</h1>
                </div>
            </div>
        </>
    );
};

Home.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
