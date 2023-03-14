import Head from 'next/head';
import MainLayout from '@/components/layout/MainLayOut';
import About from '@/components/About';
import Image from 'next/image';

const Company = () => {
    return (
        <>
            <Head>
                <title>Skyline Energy - Home</title>
                <meta name="description" content="Skyline Energy" />
            </Head>
            <section className="w-full max-w-[1920px] mx-auto grid grid-cols-2 min-h-[870px] pt-[88px]">
                <div className="relative bg-black-light">
                    <Image
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
                        style={{ objectFit: 'cover' }}
                        src="/images/company-img.webp"
                        alt="about-image"
                        priority="true"
                    />
                </div>
                <div className="bg-black-light py-[72px]  px-10 xl:px-[80px]">
                    <h1 className="text-3xl xl:text-[42px] font-bold leading-[150%] text-center text-white">
                        Welcome to Skyline Energy!
                    </h1>
                    <p className="pt-8 text-base xl:text-xl text-[#d0d0d0] leading-[150%]">
                        Our experience, team spirit, and innovation allows us to be successful and create a platform for
                        long-standing opportunity and growth. We believe in openness, honesty and integrity. We
                        demonstrate principles based on deep-rooted morals and value ethics in every aspect of our
                        business, especially when it comes to the safety of the industry and the responsibility we
                        uphold with our investors. <br /> <br />
                        Our company actively seeks and produces oil and gas in the United States. We are engaged in the
                        investment and placement of funds from private investors in the exploration, production and
                        development of this industry. As a company invested in oil and gas projects, we work solely on
                        the individual level, adhering to local, state and federal rules and regulations while observing
                        confidentiality to protect our customers’ interests. In this case, our goals remain the same: to
                        bring the best return for our investors while utilizing innovative technologies in the energy
                        sector, all while maintaining ethical standards and practices.
                    </p>
                    <Image
                        className="mx-auto my-10"
                        width={255}
                        height={82}
                        src="/images/signature.webp"
                        alt="signature"
                    />
                    <p className="max-w-[327px] mx-auto text-white text-lg leading-[150%] text-center">Andrey Avramenko <br /> CEO, Skyline Energy Development</p>
                </div>
            </section>
            <About />
        </>
    );
};

Company.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Company;
