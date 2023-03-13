import Head from 'next/head';
import MainLayout from '@/components/layout/MainLayOut';
import About from '@/components/About';
import Title from '@/components/ui/Title';
import Button from '@/components/ui/Button';
import ExploreCard from '@/components/Cards/ExploreCard';
import EnergyCard from '@/components/Cards/EnergyCard';
import ChartIcon from '@/components/ui/icons/ChartIcon';
import Graphicon from '@/components/ui/icons/Graphicon';
import CheckIcon from '@/components/ui/icons/CheckIcon';
import WaterIcon from '@/components/ui/icons/WaterIcon';
import ArrowRightIcon from '@/components/ui/icons/ArrowRightIcon';
import { EXPLORE_CARDS, ENERGY_CARDS } from '@/data/dummyData';

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
                    {EXPLORE_CARDS.map((item, i) => (
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
            <section className="pt-[200px] pb-[75px] bg-[#151515] px-[30px] xl:px-[50px]">
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
            <section className="bg-white py-[72px] px-[30px] xl:px-[50px]">
                <Title textTransform="uppercase" color="black">
                    News
                </Title>
                <p className="text-center pt-6 text-lg">Stay tuned</p>
                <div className="max-w-6xl mx-auto grid grid-cols-3 gap-[1.6%] mt-[52px]">
                    <div>
                        <h5 className="text-2xl font-bold">Does Ukraine have oil and gas?</h5>
                        <p className="text-[15px] leading-[150%] text-black text-opacity-80 py-6">
                            So, is Ukraine capable to reach energy independence? The answer to this question now
                            interests not only Ukrainians, but also the world community.
                        </p>
                        <Button
                            additionalClasses="[&>svg]:hover:transform [&>svg]:hover:translate-x-[6px]"
                            href="/news"
                            icon={<ArrowRightIcon className="transition-transform duration-200" />}
                        >
                            Learn more
                        </Button>
                    </div>
                    <div>
                        <h5 className="text-2xl font-bold">Does Ukraine have oil and gas?</h5>
                        <p className="text-[15px] leading-[150%] text-black text-opacity-80 py-6">
                            So, is Ukraine capable to reach energy independence? The answer to this question now
                            interests not only Ukrainians, but also the world community.
                        </p>
                        <Button
                            additionalClasses="[&>svg]:hover:transform [&>svg]:hover:translate-x-[6px]"
                            href="/news"
                            icon={<ArrowRightIcon className="transition-transform duration-200" />}
                        >
                            Learn more
                        </Button>
                    </div>
                    <div>
                        <h5 className="text-2xl font-bold">Does Ukraine have oil and gas?</h5>
                        <p className="text-[15px] leading-[150%] text-black text-opacity-80 py-6">
                            So, is Ukraine capable to reach energy independence? The answer to this question now
                            interests not only Ukrainians, but also the world community.
                        </p>
                        <Button
                            additionalClasses="[&>svg]:hover:transform [&>svg]:hover:translate-x-[6px]"
                            href="/news"
                            icon={<ArrowRightIcon className="transition-transform duration-200" />}
                        >
                            Learn more
                        </Button>
                    </div>
                </div>
                <div className="pt-[56px] flex justify-center">
                    <Button
                        type="outline"
                        additionalClasses="!border-black !text-black hover:!border-orange hover:!bg-yellow [&>svg]:active:transform [&>svg]:active:translate-x-[6px]"
                        href="/news"
                        icon={<ArrowRightIcon className="transition-transform duration-200" />}
                    >
                        View all
                    </Button>
                </div>
            </section>
            <section className="bg-market-bg bg-cover bg-no-repeat py-[72px] px-[30px] xl:px-[50px]">
                <Title>Energy Market Update</Title>
                <ul className="flex justify-center flex-wrap gap-y-4 lg:flex-nowrap w-full [&>li:not(:last-child)]:mr-[1.6%] mt-[55px]">
                    {ENERGY_CARDS.map((item, i) => (
                        <li key={i}>
                            <EnergyCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                stats={item.stats}
                                period={item.period}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <About />
        </>
    );
};

Home.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Home;
