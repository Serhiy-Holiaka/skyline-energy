import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@/components/ui/Button';
import SearchIcon from '@/components/ui/icons/SearchIcon';
import Menu from '@/components/Menu';

import { NAV_MENU } from '@/constants/navMenu';

function Header() {
    const { basePath } = useRouter();
    const imageBasePath = basePath ? `${basePath}/images` : '/images';

    return (
        <div className="absolute w-full flex items-center px-[30px] xl:px-[50px] py-[16px] bg-white z-10">
            <Link onClick={(e) => e.stopPropagation()} href="/" className="max-w-[180px] xl:max-w-none">
                <Image width={267} height={56} src={`${imageBasePath}/logo.svg`} alt="logo" />
            </Link>
            <Menu navList={NAV_MENU} />
            <div className="flex ml-[20px] xl:ml-[40px] 2xl:ml-[80px]">
                <Button type="rounded" additionalClasses='mr-[15px] xl:mr-[30px]' icon={<SearchIcon />}/>
                <Button type="rounded" additionalClasses={'uppercase'}>ua</Button>
            </div>
        </div>
    );
}  

export default Header;