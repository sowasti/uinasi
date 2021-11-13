import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Div from '../components/Div/Div';
import Button from '../components/Button/Button';

export default {
  title: "Blocks/Div",
  component: Div
} as ComponentMeta<typeof Div>;

const child = <div style={{ border: "1px solid #d3d9de", borderRadius: "8px" }}>
  <div style={{ borderBottom: "1px solid #d3d9de", textAlign: "center", padding: 10, fontSize: 20 }}>
    Div дает падинги содержимому
  </div>
  <Div>
    <Button stretched mode="secondary">Button</Button>
  </Div>
</div>

const Template: ComponentStory<typeof Div> = (args) => <Div {...args}>{child}</Div>;

export const div = Template.bind({});
