import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, editContact } from "../../actions";
import shortid from "shortid";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Avatar from "react-avatar";

export default function AddEdit() {
  const contacts = useSelector((state) => state.ContactReducer.contacts);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const generateId = () => {
    let id = "";
    let temp = [];
    do {
      id = shortid.generate();
      temp = contacts.filter((contact) => contact.id === id);
    } while (temp.length);
    return id;
  };

  useEffect(() => {
    location !== "/new" &&
      setContact(contacts.filter((contact) => contact.id === params.id)[0]);
  }, []);

  return (
    <>
      <div className="container p-0 col-10 col-md-6 col card my-5 my-sm-4">
        <div className="card-header">
          {location === "/new" ? "Add" : "Edit"} Contact
        </div>
        <div className="card-body">
          <form>
            <div className="text-center">
              <Avatar name={contact.name} round={true} />
            </div>
            <div className="form-group m-3">
              <label className="form-label">
                <i className="bi bi-person-fill text-primary px-2" />
                Name
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Name"
                value={contact.name}
                onChange={(e) => {
                  setContact({ ...contact, name: e.target.value });
                }}
              />
            </div>
            <div className="form-group m-3">
              <label className="form-label">
                <i className="bi bi-telephone-fill text-primary px-2" />
                Phone
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Phone Number"
                value={contact.phone}
                onChange={(e) => {
                  setContact({ ...contact, phone: e.target.value });
                }}
              />
            </div>
            <div className="form-group m-3">
              <label className="form-label">
                <i className="bi bi-envelope-fill text-primary px-2" />
                Email
              </label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter Email Address"
                value={contact.email}
                onChange={(e) => {
                  setContact({ ...contact, email: e.target.value });
                }}
              />
            </div>
            <div className="form-group m-1 text-center"></div>
          </form>
        </div>
        <div className="card-footer text-center">
          <button
            className="btn btn-primary text-light m-2"
            onClick={(e) => {
              if (location === "/new") {
                dispatch(addContact({ id: generateId(), ...contact }));
              } else {
                dispatch(editContact(contact));
              }
              navigate(-1);
              setContact({
                name: "",
                phone: "",
                email: "",
              });
            }}
          >
            Save Contact
          </button>
        </div>
      </div>
    </>
  );
}
