const fontBasePath = process.env.APP_BASE_PATH ? `${process.env.APP_BASE_PATH}/fonts` : '/fonts';
console.log(process.env.APP_BASE_PATH);
export const FONTS = `
        @font-face {
            font-family: "Gilroy";
            src: url("/fonts/Gilroy-Light.woff2") format("woff2");
            font-weight: 300;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: "Gilroy";
            src: url(${fontBasePath}/Gilroy-Regular.woff2) format("woff2");
            font-weight: 400;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: "Gilroy";
            src: url(${fontBasePath}/Gilroy-Medium.woff2) format("woff2");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: "Gilroy";
            src: url(${fontBasePath}/Gilroy-Bold.woff2) format("woff2");
            font-weight: 700;
            font-style: normal;
            font-display: swap;
        }
`;

export const DEFAULT_TRANSITION = { type: 'linear', duration: 0.3 };
