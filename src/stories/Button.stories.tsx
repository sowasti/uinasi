import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '../components/Button/Button';

export default {
  title: "Blocks/Button",
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  mode: "primary",
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: "secondary",
  children: "Secondary"
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  mode: "tertiary",
  children: "Tertiary"
}

export const Commerce = Template.bind({});
Commerce.args = {
  mode: "commerce",
  children: "Commerce"
}

export const Destructive = Template.bind({});
Destructive.args = {
  mode: "destructive",
  children: "Destructive"
}

export const Outline = Template.bind({});
Outline.args = {
  mode: "outline",
  children: "Outline"
}

export const OutlineDarkTheme = Template.bind({});
OutlineDarkTheme.args = {
  mode: "outline__dark__theme",
  children: "Outline Dark theme"
}

export const PrimaryDarkTheme = Template.bind({});
PrimaryDarkTheme.args = {
  mode: "primary__dark__theme",
  children: "Primary Dark theme"
}

export const TertiaryDarkTheme = Template.bind({});
TertiaryDarkTheme.args = {
  mode: "tertiary__dark__theme",
  children: "Tertiary Dark theme"
}

export const Small = Template.bind({});
Small.args = {
  size: "small",
  children: "Small"
}

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  children: "Medium"
}

export const Large = Template.bind({});
Large.args = {
  size: "large",
  children: "Large"
}

export const Stretched = Template.bind({});
Stretched.args = {
  stretched: true,
  children: "Stretched"
}

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "Disabled"
}


