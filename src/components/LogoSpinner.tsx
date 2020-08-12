import React from 'react';

export interface ILogoPath {
    logo: string;
}

export const LogoSpinner = ({ logo }: ILogoPath) => {
    return <img src={logo} className="logo-spinner" alt="logo" />;
};
