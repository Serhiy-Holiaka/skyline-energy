import Link from 'next/link';
import clsx from 'clsx';
import Button from '@/components/ui/Button';
import SearchIcon from '@/components/ui/icons/SearchIcon';

const Menu = () => {
    return (
        <>
            <ul className="flex items-center text-[14px]">
            <li>
                <Link className="pt-1 pb-1 mr-10 hover:text-[#F6A63A]" href="/">
                    Home
                </Link>
            </li>
            <li>
                <Link className="pt-1 pb-1 mr-10 hover:text-[#F6A63A]" href="/company">
                    Company
                </Link>
            </li>
            <li>
                <Link className="pt-1 pb-1 mr-10 hover:text-[#F6A63A]" href="/investor">
                    Investor
                </Link>
            </li>
            <li>
                <Link className="pt-1 pb-1 mr-10 hover:text-[#F6A63A]" href="/store">
                    Store
                </Link>
            </li>
            <li>
                <Link className="pt-1 pb-1 mr-10 hover:text-[#F6A63A]" href="/biogas">
                    Biogas
                </Link>
            </li>
            <li>
                <Link className="pt-1 pb-1 mr-10 hover:text-[#F6A63A]" href="/projects">
                    Projects
                </Link>
            </li>
            <li>
                <Link className="pt-1 pb-1 mr-10 hover:text-[#F6A63A]" href="/pressroom">
                    Pressroom
                </Link>
            </li>
            <li>
                <Link className="pt-1 pb-1 mr-10 hover:text-[#F6A63A]" href="/consult">
                    Consult
                </Link>
            </li>
            <li>
                <Link className="pt-1 pb-1 hover:text-[#F6A63A]" href="/contact-us">
                    Contact us
                </Link>
            </li>
        </ul>
        <Button type="rounded" additionalClasses='ml-[80px] mr-[3%]' icon={<SearchIcon />}/>
        <Button type="rounded" additionalClasses={'uppercase'}>ua</Button>
        </>
    );
};

export default Menu;
