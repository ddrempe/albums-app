import React from "react";
import AlbumList from "./AlbumList";
import { albums } from "components/organisms/AlbumList/mockData";

export default {
  title: "Organisms/AlbumList",
  component: AlbumList,
};

const Template = (args) => <AlbumList {...args} />;

export const Default = Template.bind({});
Default.args = {
  onClickMarkFavorite: (value) => console.log("CLICK", value),
  albums: albums,
};

export const EmptyState = Template.bind({});
EmptyState.args = {
  onClickMarkFavorite: (value) => console.log("CLICK", value),
  albums: [],
};
