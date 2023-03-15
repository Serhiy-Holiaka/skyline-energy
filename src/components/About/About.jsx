import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Title from '@/components/ui/Title';
import LocationIcon from '@/components/ui/icons/LocationIcon';
import EmailIcon from '@/components/ui/icons/EmailIcon';
import Input from '@/components/ui/form/Input';

const About = () => {
    const { basePath } = useRouter();
    const imageBasePath = basePath ? `${basePath}/images` : '/images';

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submit');
    };
    return (
        <section className="w-full pt-20 pb-20 px-[30px] -mt-1 -mb-1 bg-about-bg bg-cover">
            <Title>About our company</Title>
            <div className="max-w-6xl mx-auto mt-14 grid grid-cols-2 gap-7">
                <div>
                    <Link href="/" className="block max-w-[180px] xl:max-w-none">
                        <Image width={232} height={59} src={`${imageBasePath}/logo-white.svg`} alt="logo" />
                    </Link>
                    <p className="text-white my-6 font-medium text-[15px] leading-[150%]">
                        Skyline Energy Development, LLC., is an independent oil and gas company engaged in the
                        development, exploitation, exploration and investments to the oil and gas properties in the
                        United States. Оur company offers new and manufactured equipment, speciality chemicals, and
                        consulting services domestically and internationally.
                    </p>
                    <h4 className="text-white font-bold text-xl">{'"With God All Things Are Possible!"'}</h4>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <Image
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        src="/images/about-img.webp"
                        alt="about-image"
                    />
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-36 grid grid-cols-2 gap-7">
                <div className="flex items-center flex-col">
                    <Title>Contact info</Title>
                    <div className="mt-10 max-w-[255px] text-[15px] font-medium leading-[150%] text-white">
                        <p className="relative ml-10">
                            <span className="absolute -left-7">
                                <LocationIcon />
                            </span>
                            2804 St. Johns Bluff Rd. S. Suite 107, Jacksonville, FL 32246 USA Main: 253.576.4893
                        </p>
                        <p className="relative mt-4 ml-10 max-w-[255px] text-[15px] font-medium leading-[150%] text-white">
                            <span className="absolute -left-7 top-1">
                                <EmailIcon />
                            </span>
                            Email: info@skyledllc.com
                        </p>
                    </div>
                </div>
                <div>
                    <Title>Newsletter</Title>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 max-w-[370px] mt-10 mx-auto">
                        <Input type="email" placeholder="Email Address" additionalClasses="row-span-1 [&>div>input]:pr-[117px]" />
                        <button
                            className="is-clickable row-span-1 h-[52px] -mt-[52px] ml-auto w-[115px] border border-white rounded-r-[65px] bg-orange text-white text-[15px] leadin-none hover:bg-orange-400 active:bg-orange-500 z-10"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default About;
