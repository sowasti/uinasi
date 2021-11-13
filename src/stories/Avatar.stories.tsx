import React, { Children } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from '../components/Avatar/Avatar';
import img from "../image/1.jpg";

export default {
  title: "Blocks/Avatar",
  component: Avatar,
  argTypes: {
    background: { control: 'color' },
  }
} as ComponentMeta<typeof Avatar>;

const foto = <img style={{width: 48, height: 48}}  src={img} alt="" />;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Background = Template.bind({});
Background.args = {
  background: "red"
};

export const Size24 = Template.bind({});
Size24.args = {
  size: 24,
  background: "#2175f3d6",
};

export const Size72 = Template.bind({});
Size72.args = {
  size: 72,
  src: img
};

export const UserAvatar = Template.bind({});
UserAvatar.args = {
  children: foto
};

export const App = Template.bind({});
App.args = {
  mode: "app",
  children: foto
};

export const Image = Template.bind({});
Image.args = {
  mode: "image",
  children: foto
};

export const Default = Template.bind({});
Default.args = {
  mode: "default",
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true
};



