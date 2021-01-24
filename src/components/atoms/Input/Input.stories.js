import React from "react";

import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  placeholder: "Placeholder",
  onChange: (value) => console.log("CHANGE", value),
};
