import Head from 'next/head';
import MainLayout from '@/components/layout/MainLayOut';
import About from '@/components/About';
import Title from '@/components/ui/Title';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <>
            <Head>
                <title>Skyline Energy - About Us</title>
                <meta name="description" content="Skyline Energy" />
            </Head>
            <section className="flex flex-col items-center justify-center mx-auto bg-about-hero-bg bg-cover pt-40 pb-[75px] px-[30px]">
                <Title>About Us</Title>
                <p className="max-w-3xl text-xl leading-[150%] font-medium text-white text-center pt-7">
                    Skyline Energy Development, LLC., is an independent oil and gas company engaged in the development,
                    exploitation, exploration and investments to the oil and gas properties in the United States. Оur
                    company offers new and manufactured equipment, speciality chemicals, and consulting services
                    domestically and internationally.
                </p>
            </section>
            <section className="max-w-6xl mx-auto grid grid-cols-2 gap-7 py-[72px] px-[30px]">
                <div className="py-4">
                    <Title textColor="black-border" textAlign="left">
                        Our Vision
                    </Title>
                    <p className="pt-7 text-lg leading-[150%]">
                        Skyline Energy Company understands that success depends on the efforts of the whole team and its
                        experience. We thrive towards maximizing the productivity of each well and financial success of
                        each project. We develop relationships with each individual investor, take direct and active
                        roles in the exploration and development of new fields, and reenter wells by using the most
                        advanced fracturing techniques and technology!
                    </p>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <Image
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        src="/images/vision-img.webp"
                        alt="about-image"
                    />
                </div>
            </section>
            <section className="py-[72px] bg-strategy-goals-bg bg-cover bg-no-repeat px-[30px]">
                <div className="max-w-6xl mx-auto grid grid-cols-2 gap-7">
                    <div>
                        <Title>Strategy</Title>
                        <p className="pt-7 text-xl leading-[150%] text-white text-center">
                            The staff behind Skyline Energy includes leading specialists that have decades of hands-on
                            experience in the United States and Canada. We also take pride in employing a vast majority
                            of professionals in the industry on an international level from a variety of leading
                            educational institutions that carry out drilling and operation of wells while critically
                            selecting the projects with only the greatest potential for commercial success. We
                            consistently review and rationalize all aspects of our work in order to increase the
                            efficient profitability in the exploration, and development of the extraction and processing
                            of oil and gas.
                        </p>
                    </div>
                    <div>
                        <Title>Goals</Title>
                        <p className="pt-7 text-xl leading-[150%] text-white text-center">
                            Skyline Energy is focused on increasing the number of proven reserves in the U.S. by
                            research, exploration of new fields, and revision of previously drilled wells using advanced
                            technologies that have been proven effective in both restoring or improving existing
                            productions. Creative approaches, ingenuity, experience, along with physical labor, are
                            always exercised in our business. These attributes have never been in our short supply!
                        </p>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto grid grid-cols-2 gap-7 py-[72px] px-[30px]">
                <div className="py-4">
                    <Title textColor="black-border" textAlign="left">
                        Our Advantages
                    </Title>
                    <p className="pt-7 text-lg leading-[150%]">
                        In this complex energy market, Skyline Energy is consistently developing innovative oil and gas
                        projects, which have a sound geological basis and location in areas where the best
                        infrastructure can be developed with the greatest potential for commercial success. Particular
                        importance is given to the ownership of mineral rights as well as the conditions and the type of
                        purchase. We work in close collaboration with the best experts in the industry which in turn
                        enables us to evaluate our projects from different angles in order to minimize risks. We are
                        resourcefully using new technological innovations as we work to restore and increase oil and gas
                        reserves in the U.S, while providing speciality chemicals and consulting services domestically
                        and worldwide.
                    </p>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <Image
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        src="/images/advance-img.webp"
                        alt="about-image"
                        priority="true"
                    />
                </div>
            </section>
            <About />
        </>
    );
};

AboutUs.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default AboutUs;
