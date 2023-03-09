import { memo } from 'react';
import PropTypes from 'prop-types';

const Title = ({ children }) => {
    return (
        <h2 className="relative text-[45px] font-bold text-white text-center before:absolute before:bg-orange before:block before:w-14 before:h-[1px] before:-bottom-2 before:left-[50%] before:-translate-x-2/4">
            {children}
        </h2>
    );
};

Title.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default memo(Title);
