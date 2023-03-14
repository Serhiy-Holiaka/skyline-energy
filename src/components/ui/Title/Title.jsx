import { memo } from 'react';
import PropTypes from 'prop-types';

const Title = ({ children, textColor, textTransform, textAlign }) => {
    const color = `text-${textColor}`
    return (
        <h2 className={`relative text-[45px] font-bold ${textAlign === 'right' ? 'text-right' : textAlign === 'left' ? 'tetx-left' : textAlign === 'justify' ? 'text-justify' : 'text-center'} ${color} ${textTransform} before:absolute before:bg-orange before:block before:w-14 before:h-[1px] before:-bottom-2 ${textAlign === 'right' ? 'before:right-0' : textAlign === 'left' ? 'before:left-0' : 'before:left-[50%] before:-translate-x-2/4'}`}>
            {children}
        </h2>
    );
};

Title.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    textColor: PropTypes.string,
    textTransform: PropTypes.oneOf(['normal-case', 'uppercase', 'capitalize', 'lowercase']),
    textAlign: PropTypes.oneOf(['', 'left', 'right', 'justify'])
};

Title.defaultProps = {
    textTransform: 'normal-case',
    textAlign: '',
    textColor: 'white'
}

export default memo(Title);
