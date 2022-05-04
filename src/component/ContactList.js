import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [contactList, keyword]);
  return (
    <div>
      <SearchBox />
      <div>
        연락처 :{filteredList.length}
        {filteredList.map((item, i) => (
          <ContactItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
