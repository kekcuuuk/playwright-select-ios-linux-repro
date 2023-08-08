import React from 'react';

import { Meta } from '@storybook/react';

import BasicSelect from './BasicSelect';

const meta: Meta<typeof BasicSelect> = {
    component: BasicSelect,
};
export default meta;

export function GoodStory() {
    return <>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
    </>
}

export function BadStory() {
    return <>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
        <BasicSelect/>
    </>
}
