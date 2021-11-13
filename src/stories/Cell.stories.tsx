import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Cell from "../components/Cell/Cell";
import Avatar from '../components/Avatar/Avatar';
import img from "../image/1.jpg";

export default {
  title: "Blocks/Cell",
  component: Cell
} as ComponentMeta<typeof Cell>;

const foto = <img style={{ width: 48, height: 48 }} src={img} alt="" />;
const check = <input style={{ width: 20, height: 20 }} type="checkbox" />;
const arrow = <i style={{
  width: 10,
  height: 10,
  borderBottom: "2px solid #5181b8",
  borderRight: "2px solid #5181b8",
  transform: "rotate(-45deg)"
}}></i>
const styleApps = { background: "#5181b8", width: 9, height: 9, margin: 1, borderRadius: "3px" };
const apps = <div>
  <div style={{ display: "flex" }}>
    <div style={styleApps} />
    <div style={{ background: "#5181b8", width: 9, height: 9, margin: 1, borderRadius: "3px", transform: "rotate(-45deg)" }} />
  </div>
  <div style={{ display: "flex" }}>
    <div style={styleApps} />
    <div style={styleApps} />
  </div>
</div>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: "Бесплатные книги"
};

export const AfterText = Template.bind({});
AfterText.args = {
  after: "Русский",
  children: "Язык"
};

export const AfterIcon = Template.bind({});
AfterIcon.args = {
  after: arrow,
  children: "Дела на сегодня"
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  before: check,
  children: "Сделать уборку дома"
};

export const BeforeIcon = Template.bind({});
BeforeIcon.args = {
  before: apps,
  children: "Приложения"
};

export const BeforeAvatar = Template.bind({});
BeforeAvatar.args = {
  before: <Avatar shadow>{foto}</Avatar>,
  children: "Marianna Shmotkina"
};

export const Rich = Template.bind({});
Rich.args = {
  description: "Привет, я приеду в гости завтра.",
  before: <Avatar shadow>{foto}</Avatar>,
  after: "30 сентября",
  children: "Алиса Балабанова"
}
