
import React from 'react';

type IconProps = {
  className?: string;
  title?: string;
};

export const SunIcon: React.FC<IconProps> = ({ className, title }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <title>{title}</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const WaterIcon: React.FC<IconProps> = ({ className, title }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <title>{title}</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 11a7 7 0 0114 0c0 4.418-4.224 8-7 8s-7-3.582-7-8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
    </svg>
);

export const OxygenIcon: React.FC<IconProps> = ({ className, title }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <title>{title}</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636a9 9 0 010 12.728m-12.728 0a9 9 0 010-12.728m12.728 0L5.636 18.364" />
    </svg>
);

export const ProtonIcon: React.FC<IconProps> = ({ className, title }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <title>{title}</title>
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1-5h-2v-3H9v-2h2V7h2v3h2v2h-2v3z" />
    </svg>
);

export const ATPIcon: React.FC<IconProps> = ({ className, title }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <title>{title}</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

export const NADPHIcon: React.FC<IconProps> = ({ className, title }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <title>{title}</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8.5 8.5-4.5-4.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 118 0 4 4 0 01-8 0z" />
    </svg>
);

export const LeafIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 4.293a1 1 0 011.414 1.414l-13 13A1 1 0 013 18H2a1 1 0 01-1-1v-1a1 1 0 01.293-.707l13-13zM9 8a1 1 0 112 0 1 1 0 01-2 0z" />
    </svg>
);

export const ImageIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 2a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06l-2.475 2.475a.75.75 0 11-1.06-1.06l2.475-2.475a.75.75 0 011.06 0zm9.192 0a.75.75 0 011.06 0l2.475 2.475a.75.75 0 11-1.06 1.06L15.657 5.404a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5A.75.75 0 012 10zm14.5 0a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zm-9.843 5.404a.75.75 0 011.06 0l2.475 2.475a.75.75 0 01-1.06 1.06l-2.475-2.475a.75.75 0 010-1.06zM10 18a.75.75 0 01.75-.75v-3.5a.75.75 0 01-1.5 0v3.5A.75.75 0 0110 18z" clipRule="evenodd" />
    </svg>
);
