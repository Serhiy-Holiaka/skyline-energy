import PropTypes from 'prop-types';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ExploreCard = ({ image, title, description, link }) => {
    const { basePath } = useRouter();
    const imageBasePath = basePath ? `${basePath}/images` : '/images';

    return (
        <div className="relative flex flex-col items-start justify-between h-[270px] w-full max-w-[370px] px-[21px] pt-[50px] pb-[37px] rounded-lg overflow-hidden shadow-[4px_4px_8px_rgba(0,0,0,0.07)] border border-transparent hover:shadow-yellow hover:border-orange hover:border-solid [&>img]:hover:scale-110 transition-all duration-300">
            <Image
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
                src={`${imageBasePath}/cards/${image}`}
                alt="card-img"
                className="transition-transform duration-300"
            />
            <div>
                <h5 className="relative z-[2] text-[32px] leading-none font-bold text-white">{title}</h5>
                <p className="relative z-[2] text-lg leading-[21px] text-white font-medium pt-6">{description}</p>
            </div>
            <Button type="outline" additionalClasses="relative z-[2]" href={link}>
                Learn more
            </Button>
        </div>
    );
};

ExploreCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
};

export default ExploreCard;
