"use client"
import { ToastProvider } from '@heroui/react';
import React from 'react';

const ToastProviders = ({children}) => {
    return (
        <div>
            <ToastProvider>
                {children}
                
            </ToastProvider>
        </div>
    );
};

export default ToastProviders;