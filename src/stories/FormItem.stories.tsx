import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FormItem from "../components/FormItem/FormItem";
import Input from "../components/Input/Input";

export default {
  title: "Forms/FormItem",
  component: FormItem
} as ComponentMeta<typeof FormItem>;

const Template: ComponentStory<typeof FormItem> = (args) => <FormItem {...args} />;

export const Top = Template.bind({});
Top.args = {
  top: "Имя",
  children: <Input />
};

export const Bottom = Template.bind({});
Bottom.args = {
  bottom: "Пароль может содержать только латинские буквы и цифры.",
  children: <Input type="password" />
};

export const Form = Template.bind({});
Form.args = {
  top: "Email",
  bottom: "Пожалуйста введите корректый адрес електронной почты.",
  children: <Input />
};