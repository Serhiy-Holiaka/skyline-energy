import { memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Error = ({ children, additionalClasses }) => {
    return (
        <div
            className={clsx(
                'absolute top-[56px] right-6 left-6 font-medium text-xs leading-[150%] text-red-600 first-letter:capitalize',
                additionalClasses
            )}
        >
            {children}
        </div>
    );
};

Error.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
    additionalClasses: PropTypes.string,
};

export default memo(Error);
