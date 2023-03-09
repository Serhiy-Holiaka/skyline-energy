import { memo } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import PlusIcon from '@/components/ui/icons/PlusIcon';

const Menu = ({ navList = null }) => {
    return (
        <ul className="flex items-center ml-auto text-[14px]">
            {navList?.map(({ lable, link, subMenu }, i) => {
                if (subMenu) {
                    return (
                        <li className="mr-3 xl:mr-6 2xl:mr-10 last:mr-0" key={i}>
                            <Link className="group font-medium flex items-baseline pt-1 pb-1 hover:text-orange whitespace-nowrap is-clickable" href={link}>
                                {lable}<PlusIcon className="ml-2 group-hover:[&>path]:stroke-orange" />
                            </Link>
                        </li>
                    );
                } else {
                    return (
                        <li className="mr-3 xl:mr-6 2xl:mr-10 last:mr-0" key={i}>
                            <Link className="font-medium pt-1 pb-1 hover:text-orange whitespace-nowrap is-clickable" href={link}>
                                {lable}
                            </Link>
                        </li>
                    );
                }
            })}
        </ul>
    );
};

Menu.propTypes = {
    navList: PropTypes.arrayOf(PropTypes.object),
};

export default memo(Menu);
