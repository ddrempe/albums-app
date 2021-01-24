import React from "react";

import AlbumRow from "./AlbumRow";

export default {
  title: "Molecules/AlbumRow",
  component: AlbumRow,
};

const Template = (args) => <AlbumRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    id: 0,
    title: "Lover",
    price: "$11.99",
    imageUrl:
      "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/20/6f/b5/206fb560-6fd5-15f9-0b68-88d309ffc5a6/19UMGIM53909.rgb.jpg/170x170bb.png",
    releaseDate: "2019-08-23T00:00:00-07:00",
    artistId: 0,
    favorite: true,
    artist: "Taylor Swift",
  },
};
