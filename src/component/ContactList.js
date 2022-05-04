import React from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  console.log(typeof contactList.phoneNum);
  return (
    <div>
      <SearchBox />
      {contactList.map((item, i) => (
        <ContactItem item={item} key={i} />
      ))}
    </div>
  );
};

export default ContactList;
