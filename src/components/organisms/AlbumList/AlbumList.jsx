import React from "react";
import ViewContainer from "components/molecules/ViewContainer/ViewContainer";
import AlbumRow from "components/molecules/AlbumRow/AlbumRow";

export default function AlbumList(props) {
  const { onClickMarkFavorite, albums } = props;

  return (
    <ViewContainer>
      {albums &&
        albums.map((item) => (
          <AlbumRow
            key={item.id}
            item={item}
            onClickMarkFavorite={() => onClickMarkFavorite(item)}
          />
        ))}
    </ViewContainer>
  );
}
