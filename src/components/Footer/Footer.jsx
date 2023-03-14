import Link from 'next/link';
import Button from '@/components/ui/Button';
import { SOCIALS_LIST } from '@/constants/socialsList';
import ArrowIcon from '@/components/ui/icons/ArrowIcon';

const Footer = () => {
    const year = new Date().getFullYear();
    const handleClick = e => {
        e.stopPropagation();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="relative bg-black-light w-full py-6 px-[30px]">
            <button
                className="absolute right-[30px] -top-[18px] bg-white w-9 h-9 rounded-full flex items-center justify-center"
                type="button"
                onClick={handleClick}
            >
                <ArrowIcon />
            </button>
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div className="flex text-[14px] leading-none">
                    <p className="text-grey pr-10">{`${year} © Skyline Energy Development, LLC.`} </p>
                    <Link className="text-white hover:underline is-clickable" href="/terms">
                        Terms of Use
                    </Link>
                </div>
                <ul className="flex">
                    {SOCIALS_LIST.map(({ icon: Icon, link }, i) => (
                        <li key={i} className="flex mr-6 last:mr-0">
                            <Button isDefaultLink={true} href={link} icon={<Icon />} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Footer;
