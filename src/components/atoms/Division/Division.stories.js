import React from "react";

import Division from "./Division";

export default {
  title: "Atoms/Division",
  component: Division,
};

const Template = (args) => <Division {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Content",
};
