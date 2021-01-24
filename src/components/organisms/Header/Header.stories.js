import React from "react";

import Header from "./Header";

export default {
  title: "Organisms/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Header Title",
};

export const WithActionButton = Template.bind({});
WithActionButton.args = {
  title: "Header Title",
  actionButton: "Action title",
  onActionButtonClick: () => console.log("CLICK"),
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  search: true,
  title: "Header Title",
  inputPlaceholder: "Placeholder",
  onInputChange: (value) => console.log("CHANGE", value),
  onInputSubmit: () => console.log("CLICK"),
};
