import Head from 'next/head';
import MainLayout from '@/components/layout/MainLayOut';
import About from '@/components/About';
import Title from '@/components/ui/Title';
import ExploreCard from '@/components/Cards/ExploreCard';
import ChartIcon from '@/components/ui/icons/ChartIcon';
import Graphicon from '@/components/ui/icons/Graphicon';
import CheckIcon from '@/components/ui/icons/CheckIcon';
import WaterIcon from '@/components/ui/icons/WaterIcon';

const exploreCardsList = [
    {
        image: 'explore-img.png',
        title: 'Explore',
        description: 'The latest equipment and chemicals',
        link: '/about',
    },
    {
        image: 'invest-img.png',
        title: 'Invest',
        description: 'Maximize business investment',
        link: '/about',
    },
    {
        image: 'consult-img.png',
        title: 'Consult',
        description: 'Increase efficiency, reliability, profitability',
        link: '/about',
    },
];

const Home = () => {
    return (
        <>
            <Head>
                <title>Skyline Energy - Home</title>
                <meta name="description" content="Skyline Energy" />
            </Head>
            <section className="relative mx-auto h-screen max-h-[970px] bg-hero-bg bg-cover">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <p className="text-white text-lg font-medium tracking-[0.2em] uppercase pb-4">
                        Providing quality service and maximizing return investment
                    </p>
                    <h1 className="text-white text-center text-[95px] leading-[130%] font-light max-w-[850px]">
                        Beneficial partnership with Skyline
                    </h1>
                </div>
                <ul className="absolute -bottom-[135px] flex w-full justify-center [&>li:not(:last-child)]:mr-[1.6%] px-[30px] xl:px-[50px]">
                    {exploreCardsList.map((item, i) => (
                        <li key={i} className="w-full max-w-[370px]">
                            <ExploreCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                link={item.link}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <section className="pt-[200px] pb-[75px] bg-[#151515]">
                <Title>Areas of Activity</Title>
                <div className="h-[800px] -mt-[80px] xl:-mt-[0px] bg-[#151515] bg-areas-bg bg-cover bg-center bg-no-repeat" />
                <div className="flex w-full justify-center">
                    <div className="flex flex-col items-center w-full max-w-[235px] mr-5">
                        <WaterIcon />
                        <h5 className="pt-6 text-[26px] leading-[130%] font-medium text-white text-center">
                            Oil and Gas Exploration
                        </h5>
                    </div>
                    <div className="flex flex-col items-center w-full max-w-[235px] mr-5">
                        <CheckIcon />
                        <h5 className="pt-6 text-[26px] leading-[130%] font-medium text-white text-center">
                            Proven fields
                        </h5>
                    </div>
                    <div className="flex flex-col items-center w-full max-w-[235px] mr-5">
                        <Graphicon />
                        <h5 className="pt-6 text-[26px] leading-[130%] font-medium text-white text-center">
                            Stability Zone
                        </h5>
                    </div>
                    <div className="flex flex-col items-center w-full max-w-[235px]">
                        <ChartIcon />
                        <h5 className="pt-6 text-[26px] leading-[130%] font-medium text-white text-center">
                            Resource Potential
                        </h5>
                    </div>
                </div>
            </section>
            <About />
        </>
    );
};

Home.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
