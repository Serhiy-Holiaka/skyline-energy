import Head from 'next/head';
import MainLayout from '@/components/layout/MainLayOut';
import About from '@/components/About';
import ProjectCard from '@/components/Cards/ProjectCard';

const Projects = () => {
    return (
        <>
            <Head>
                <title>Skyline Energy - Home</title>
                <meta name="description" content="Skyline Energy" />
            </Head>
            <section className="flex items-center justify-center bg-what-we-do-bg bg-cover bg-no-repeat pt-[160px] pb-[72px] px-[30px]">
                <h1 className="text-white text-[42px] leading-none font-bold">What we do</h1>
            </section>
            <section className="py-20">
                <div className="max-w-6xl mx-auto">
                    <ProjectCard />
                </div>
            </section>
            <About />
        </>
    );
};

Projects.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>;
};

export default Projects;
