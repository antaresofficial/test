import React, { useEffect, useState } from "react";
import { Input } from "antd";

type Props = {
  contacts: UserData[];
  search: UserData[] | null;
  updateSearch: (val: UserData[]) => void;
};

export const Search: React.FC<Props> = ({ contacts, search, updateSearch }) => {
  const [value, setValue] = useState("");
  const handleSearch = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const pattern = new RegExp(value, "gi");
    updateSearch(
      contacts.filter((e) => e.phone.match(pattern) || e.name.match(pattern))
    );

    setValue(value);
  };

  useEffect(() => {
    if (!search) {
      setValue("");
    }
  }, [contacts]);

  return (
    <Input
      style={{ marginBottom: "15px" }}
      onChange={handleSearch}
      placeholder="Поиск"
      value={value}
    />
  );
};