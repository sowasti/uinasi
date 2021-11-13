import React, { useEffect, useRef  } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import WriteBar from "../components/WriteBar/WriteBar";
import Avatar from '../components/Avatar/Avatar';

export default {
  title: "Forms/WriteBar",
  component: WriteBar
} as ComponentMeta<typeof WriteBar>;


const Template: ComponentStory<typeof WriteBar> = (args) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    console.log(ref)
  })
  return <WriteBar {...args}/>;
}

export const RichBar = Template.bind({});
RichBar.args = {
  before: <Avatar size={28} background="#76a6ff" />,
  placeholder: "Сообщение",
  childAfter: <Avatar size={28} background="#76a6ff" />,
  after: <Avatar size={28} background="#76a6ff" />,
  maxRows: 3
};

export const DoubleAfterBar = Template.bind({});
DoubleAfterBar.args = {
  placeholder: "Напишите сообщение",
  childAfter: <Avatar size={28} background="#76a6ff" />,
  after: <Avatar size={28} background="#76a6ff" />,
  maxRows: 5
};

export const AfterBar = Template.bind({});
AfterBar.args = {
  placeholder: "Сообщение...",
  after: <Avatar size={28} background="#76a6ff" />,
  maxRows: 10
};