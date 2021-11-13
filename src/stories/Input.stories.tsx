import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from '../components/Input/Input';

export default {
  title: "Forms/Input",
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "Петров"
};

export const Center = Template.bind({});
Center.args = {
  align: "center",
  value: "Петров"
};

export const Right = Template.bind({});
Right.args = {
  align: "right",
  value: "Петров"
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "Введите email"  
};

export const StatusError = Template.bind({});
StatusError.args = {
  status: "error", 
  placeholder: "Email"
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Введите пароль"
};

