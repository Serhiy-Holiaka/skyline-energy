import { memo } from 'react';
import PropTypes from 'prop-types';

const Label = ({ component, htmlFor, children }) => {
    const CustomTag = component;
    return (
        <CustomTag htmlFor={htmlFor} className="block text-sm font-medium leading-[150%] whitespace-nowrap ml-6 mb-2 text-black transition-colors duration-300">
            {children}
        </CustomTag>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string,
    component: PropTypes.oneOf(['label', 'div']),
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

Label.defaultProps = {
    component: 'label',
};

export default memo(Label);
