import type React from 'react';

export type Product = {
    id: string;
    type: string;
    imageSrc: string;
    srcSet: string;
    sizes: string;
    name: string;
    capacity: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
};