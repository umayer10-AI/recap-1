"use client"
import { Button, toast } from '@heroui/react';
import React from 'react';

const Toastify = () => {
    return (
        <div>
            <Button size="sm" variant="secondary" onPress={() => toast.success("Operation completed")}>
            Success
            </Button>
        </div>
    );
};

export default Toastify;