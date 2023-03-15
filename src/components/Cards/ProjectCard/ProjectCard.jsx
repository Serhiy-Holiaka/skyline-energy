import { memo } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import CheckMarkIcon from '@/components/ui/icons/CheckMarkIcon';

const ProjectCard = ({ title, description, image }) => {
    const { basePath } = useRouter();
    const imageBasePath = basePath ? `${basePath}/images` : '/images';
    return (
        <div className="relative flex pl-[64px] pb-[50px] border-l-[1px] border-orange">
            <div className="absolute -top-[12px] -left-[21px] flex justify-center items-center w-[42px] h-[42px] bg-white border rounded-full border-orange">
                <CheckMarkIcon />
            </div>
            <div className="flex w-full flex-col max-w-[570px] pr-[30px]">
                <h6 className="text-black text-[26px] leading-none font-bold pb-6">{title}</h6>
                <p className="text-[#3C4344] text-lg leading-[150%] font-medium">{description}</p>
            </div>
            <div className="w-full max-w-[470px] relative rounded-lg overflow-hidden">
                <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    src={`${imageBasePath}/cards/${image}`}
                    alt="about-image"
                    priority="true"
                />
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
};

export default memo(ProjectCard);
