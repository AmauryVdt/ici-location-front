'use client'
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react"
import React from "react";

interface HookUsageProps {
    value: number | null;
    onValueChange: (value: number | null) => void;
}
export const NULLABLE_POSITIVE_INTEGER_REGEX = /^\d*$/;

export const strToPositiveInteger = (str: string): number | null => {
    const num = parseInt(str, 10);
    return Number.isNaN(num) ? null : num;
}

const HookUsage: React.FC<HookUsageProps> = ({ onValueChange, value }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(NULLABLE_POSITIVE_INTEGER_REGEX.test(e.target.value))
            onValueChange(strToPositiveInteger(e.target.value));
        else
            e.preventDefault();
    }

    const inputValue = value === null ? '' : value;
    const dec = () => {
        onValueChange(Math.max(0, (value || 0) - 1))
    }
    const inc = () => {
            onValueChange((value || 0) + 1)
    }
    return (
        <HStack maxW='auto'>
            <Button size='sm' onClick={dec}>-</Button>
            <Input size='sm' borderRadius='md' onChange={handleChange} value={inputValue} />
            <Button size='sm' onClick={inc}>+</Button>
        </HStack>
    )
}

export default HookUsage;