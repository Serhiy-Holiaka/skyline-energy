import { memo } from 'react';
import PropTypes from 'prop-types';
import classes from './Label.module.css';

const Label = ({ component, htmlFor, children }) => {
    const CustomTag = component;
    return (
        <CustomTag htmlFor={htmlFor} className={classes.label}>
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
