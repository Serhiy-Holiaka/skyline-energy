import Link from 'next/link';
import Image from "next/image";
import Menu from '@/components/Menu';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className="absolute w-full flex items-center justify-between px-[50px] py-[16px] bg-white">
            <Link href="/">
                <Image width={267} height={56} src="/images/logo.svg" alt="logo"/>
            </Link>
            <Menu />
        </div>
    );
};  

export default Header;