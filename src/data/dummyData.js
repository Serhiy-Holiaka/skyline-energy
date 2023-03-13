export const EXPLORE_CARDS = [
    {
        image: 'explore-img.png',
        title: 'Explore',
        description: 'The latest equipment and chemicals',
        link: '/about',
    },
    {
        image: 'invest-img.png',
        title: 'Invest',
        description: 'Maximize business investment',
        link: '/about',
    },
    {
        image: 'consult-img.png',
        title: 'Consult',
        description: 'Increase efficiency, reliability, profitability',
        link: '/about',
    },
];

export const ENERGY_CARDS = [
    {
        image: 'graph-1.webp',
        title: 'WTI Crude Oil',
        description: '2016.10.06 end-of-day',
        stats: [
            {
                value: '$50.44',
            },
            {
                step: 'up',
                value: '0.61',
            },
            {
                percent: 'up',
                value: '0.25%',
            },
        ],
        period: [
            {
                active: false,
                value: '1m',
            },
            {
                active: false,
                value: '1q',
            },
            {
                active: true,
                value: '1y',
            },
            {
                active: false,
                value: '5y',
            },
        ]
    },
    {
        image: 'graph-2.webp',
        title: 'Natural Gas',
        description: '2016.10.06 end-of-day',
        stats: [
            {
                value: '$3.05',
            },
            {
                step: 'up',
                value: '0.01',
            },
            {
                percent: 'up',
                value: '0.26%',
            },
        ],
        period: [
            {
                active: false,
                value: '1m',
            },
            {
                active: false,
                value: '1q',
            },
            {
                active: false,
                value: '1y',
            },
            {
                active: true,
                value: '5y',
            },
        ]
    },
    {
        image: 'graph-3.webp',
        title: 'Brent Crude Oil',
        description: '2016.10.06 end-of-day',
        stats: [
            {
                value: '$52.51',
            },
            {
                step: 'up',
                value: '0.65',
            },
            {
                percent: 'up',
                value: '1.24%',
            },
        ],
        period: [
            {
                active: false,
                value: '1m',
            },
            {
                active: true,
                value: '1q',
            },
            {
                active: false,
                value: '1y',
            },
            {
                active: false,
                value: '5y',
            },
        ]
    },
];