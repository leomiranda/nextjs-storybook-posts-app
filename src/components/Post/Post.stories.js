import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post,
};

const Template = () => (
    <Post 
      content="I'm working on Figma trying to design a new website that show all of my tweets!" 
      date='9/9/1999'
    />
  );

export const Default = Template.bind({});
