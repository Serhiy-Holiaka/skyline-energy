import { memo } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import ArrowUpIcon from '@/components/ui/icons/ArrowUpIcon';
import { useRouter } from 'next/router';


const EnergyCard = ({ image, title, stats, description, period }) => {
    const { basePath } = useRouter();
    const imageBasePath = basePath ? `${basePath}/images` : '/images';

    return (
        <div className="flex flex-col max-w-[370px] w-full max-h-[460px] bg-white rounded-lg pt-[42px] pb-[50px] px-5 [&>*:not(:last-child)]:mb-[30px]">
            <h5 className="text-[26px] leading-none font-bold text-[#0D0D0D]">{title}</h5>
            <ul className="flex justify-between">
                {stats.map((item, i) => (
                    <li
                        key={i}
                        className={`flex justify-center items-center text-xl font-medium ${
                            (item?.step || item?.percent) === 'up'
                                ? 'text-green'
                                : (item?.step || item?.percent) === 'down'
                                ? 'text-red-600'
                                : 'text-black'
                        } mr-[5px] last:mr-0 border-solid border-grey-light border rounded-lg h-[52px] w-full min-w-[80px] max-w-[97px]`}
                    >
                        {item.value}
                        {item?.step && (
                            <ArrowUpIcon
                                className={`mb-[4px] ml-[7px] ${
                                    item?.step === 'up'
                                        ? '[&>path]:stroke-green'
                                        : 'transform rotate-90 [&>path]:stroke-red-600'
                                }`}
                            />
                        )}
                    </li>
                ))}
            </ul>
            <p className="text-[15px] leading-none text-grey-mid font-medium">{description}</p>
            <Image width={330} height={132} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={`${imageBasePath}/cards/${image}`} alt="graph" />
            <ul className="flex justify-around items-center">
                {period.map(({ active, value }, i) => (
                    <li key={i} className={`text-[15px] font-medium rounded-lg py-2 px-4 ${active ? 'text-white bg-orange' : 'text-grey-mid'}`}>{value}</li>
                ))}
            </ul>
        </div>
    );
};

EnergyCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    stats: PropTypes.string,
    period: PropTypes.arrayOf(PropTypes.object),
    stats: PropTypes.arrayOf(PropTypes.object)
};

export default memo(EnergyCard);
