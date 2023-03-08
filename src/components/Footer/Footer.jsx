import Link from 'next/link';
import Button from '@/components/ui/Button';
import { SOCIALS_LIST } from '@/constants/socialsList';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="bg-black-light w-full py-6 px-[30px]">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="flex text-[14px] leading-none">
                    <p className="text-grey pr-10">{`${year} © Skyline Energy Development, LLC.`} </p>
                    <Link className="text-white hover:underline is-clickable" href="/terms">Terms of Use</Link>
                </div>
                <ul className="flex">
                    {SOCIALS_LIST.map(({ icon: Icon, link }, i) => (
                        <li key={i} className="flex mr-6 last:mr-0"><Button isDefaultLink={true} href={link} icon={<Icon/>} /></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Footer;