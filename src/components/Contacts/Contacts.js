import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useState } from "react";

export default function Contacts() {
  const contacts = useSelector((state) =>
    state.ContactReducer.search
      ? state.ContactReducer.search
      : state.ContactReducer.contacts
  );
  const search = useSelector((state) => state.ContactReducer.search);
  const navigate = useNavigate();
  const [mobile, setMobile] = useState();
  useEffect(() => {
    setMobile(window.innerWidth < 576);
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth < 576);
    });
  }, []);
  return (
    <>
      <div className="container my-3">
        {!mobile && contacts.length > 0 && (
          <table className="table table-borderless">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                  className="contact"
                  onClick={() => {
                    navigate("/" + contact.id);
                  }}
                  key={contact.id}
                >
                  <td width={40}>
                    <Avatar name={contact.name} size="40" round={true} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {mobile && contacts.length > 0 && (
          <div className="m-2 my-4">
            {contacts.map((contact) => (
              <div
                className="d-flex contact p-2"
                onClick={() => {
                  navigate("/" + contact.id);
                }}
                key={contact.id}
              >
                <Avatar name={contact.name} size="50" round={true} />
                <p className="my-auto mx-3 fs-5">{contact.name}</p>
              </div>
            ))}
          </div>
        )}
        {contacts.length === 0 && search === null && (
          <div className="container d-flex">
            <p className="mx-auto fs-4 my-4">No Contacts Added</p>
          </div>
        )}
        {search?.length === 0  && (
          <div className="container d-flex">
            <p className="mx-auto fs-4 my-4">No Results Found</p>
          </div>
        )}
      </div>
    </>
  );
}
