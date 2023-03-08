import { useState, useEffect } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { useDebounce } from '@/hooks/useDebounce';
import { FONTS } from '@/constants/constants';
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || (page => page);
    const [clickable, setClickable] = useState();
    const hide = useDebounce(() => {
        clickable.map(block => {
            block.className = block.className.replace(' active-clickable', '');
        });
    }, 1000);

    useEffect(() => {
        const allWithClass = Array.from(document.getElementsByClassName('is-clickable'));
        setClickable(allWithClass);
    }, []);

    const isClickable = e => {
        const allWithClass = Array.from(document.getElementsByClassName('is-clickable'));
        setClickable(allWithClass);

        if (e.target.className.includes('is-clickable')) {
            return;
        } else {
            clickable.map(block => {
                !block.className.includes('active-clickable') === true
                    ? (block.className += ' active-clickable')
                    : (block.className += '');
            });
        }
        hide();
    };

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                <style
                    dangerouslySetInnerHTML={{
                        __html: FONTS,
                    }}
                />
                <title>Surprisy</title>
            </Head>
            <div onClick={(e) => isClickable(e)}>
                {getLayout(<Component {...pageProps} />)}
            </div>
        </>
    );
};

App.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default App;
