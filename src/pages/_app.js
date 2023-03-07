import Head from 'next/head';
import PropTypes from 'prop-types';
import { FONTS } from '@/constants/constants';
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || (page => page);
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
            {getLayout(<Component {...pageProps} />)}
        </>
    );
};

App.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default App;
