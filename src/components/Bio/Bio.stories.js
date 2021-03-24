import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio,
};

const Template = () => (
    <Bio 
      headshot="https://pbs.twimg.com/profile_images/1372200541800050691/BVROgIlO_400x400.jpg"
      name="Leo Miranda"
      tagline="Helping others to learn by doing!"
      role="Web Developer"
    />
  );

export const Default = Template.bind({});
