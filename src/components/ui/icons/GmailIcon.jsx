const GmailIcon = props => (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width={20} height={20} rx={10} fill="#D93025" />
        <g fill="#fff">
            <path opacity={0.3} d="M15.625 5.417H4.375l.417 9.062h10.416l.417-9.062Z" />
            <path opacity={0.3} d="M15.625 5.417H4.375l5.182 3.867h.964l5.104-3.867Z" />
            <path opacity={0.1} d="M5.313 14.479 10 10.26l4.688 4.219H5.312Z" />
            <g fillRule="evenodd" clipRule="evenodd">
                <path d="M5.313 6.198a.781.781 0 1 0-1.562 0v7.343c0 .518.42.938.937.938h.625v-8.28ZM14.687 6.198a.78.78 0 1 1 1.562-.001v7.344c0 .518-.419.938-.937.938h-.625v-8.28Z" />
                <path d="M4.14 6.874a.781.781 0 0 1-.285-1.065v-.001a.782.782 0 0 1 1.067-.286L10 8.454l5.079-2.933a.778.778 0 0 1 1.066.286.78.78 0 0 1-.286 1.068l-4.297 2.48-1.562.903-1.562-.903-4.298-2.48Z" />
            </g>
        </g>
    </svg>
);

export default GmailIcon;
