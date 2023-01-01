import { useSelector, useDispatch } from "react-redux";
import { delContact } from "../../actions";
import { Link, useParams, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";

export default function ViewContact() {
  const params = useParams();
  const contacts = useSelector((state) => state.ContactReducer.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contact = contacts?.filter((contact) => contact.id === params.id)[0];
  return (
    <>
      {contact && (
        <div className="container p-0 col-10 col-md-6 col card my-5 my-sm-4">
          <div className="card-header">#{contact.id}</div>
          <div className="card-body">
            <div className="text-center m-3">
              <Avatar name={contact.name} round={true} />
            </div>
            <div className="m-2 my-sm-0 d-flex">
              <i className="bi bi-person-fill text-primary fs-2 p-2 d-inline " />
              <p className="d-inline my-auto mx-3 w-75">{contact.name}</p>
            </div>
            <div className="m-2 my-sm-0 d-flex">
              <i className="bi bi-telephone-fill text-primary fs-2 p-2 d-inline" />
              <p className="d-inline my-auto mx-3 w-75">{contact.phone}</p>
            </div>
            <div className="m-2 my-sm-0 d-flex">
              <i className="bi bi-envelope-fill text-primary fs-2 p-2 d-inline" />
              <p className="d-inline my-auto mx-3 w-75">{contact.email}</p>
            </div>
          </div>

          <div className="card-footer">
            <button
              className="btn btn-outline-primary float-start m-2"
              onClick={() => {
                dispatch(delContact(contact.id));
                navigate(-1);
              }}
            >
              Delete
            </button>
            <Link
              to={`/${contact.id}/edit`}
              className="btn btn-primary text-light float-end m-2"
            >
              Edit
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
