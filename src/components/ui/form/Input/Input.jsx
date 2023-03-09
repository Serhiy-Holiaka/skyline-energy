import { forwardRef, memo } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Label from '@/components/ui/form/Label';
import Error from '@/components/ui/form/Error';

const Input = forwardRef(
    (
        {
            id,
            label,
            type = 'text',
            name,
            value,
            placeholder,
            error,
            helperText = '',
            onChange,
            onBlur,
            additionalClasses = '',
            ...rest
        },
        ref
    ) => {
        const changeHandler = e => {
            if (typeof onChange === 'function') {
                onChange(e);
            }
        };

        const blurHandler = e => {
            if (typeof onBlur === 'function') {
                onBlur(e);
            }
        };

        return (
            <div
                className={clsx(
                    'relative min-w-0',
                    additionalClasses
                )}
            >
                {label && <Label htmlFor={id}>{label}</Label>}
                <div className="relative flex w-full">
                        <input
                            id={id}
                            type={type}
                            name={name}
                            value={value}
                            placeholder={placeholder}
                            onChange={changeHandler}
                            onBlur={blurHandler}
                            className="is-clickable outline-none w-full border border-white rounded-[65px] bg-transparent px-6 h-[52px] placeholder-grey text-[15px] leading-none text-white"
                            {...rest}
                            ref={ref}
                        />
                </div>
                {error && <Error>{helperText}</Error>}
            </div>
        );
    }
);

Input.displayName = 'Input';

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    additionalClasses: PropTypes.string,
};

export default memo(Input);
