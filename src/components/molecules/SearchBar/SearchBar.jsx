import Button from "components/atoms/Button/Button";
import Division from "components/atoms/Division/Division";
import Input from "components/atoms/Input/Input";
import React from "react";

export default function SearchBar(props) {
  const { inputPlaceholder, onInputChange, inputSubmit, onInputSubmit } = props;

  return (
    <Division>
      <Input placeholder={inputPlaceholder} onChange={onInputChange} />
      <Button value={inputSubmit} onClick={onInputSubmit} />
    </Division>
  );
}
