import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Navbar() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "search" });
  }, []);
  return (
    <>
      <nav className="navbar bg-primary navbar-dark fixed-top shadow">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h2">Contacts Book</span>

          {location === "/" ? (
            <input
              className="form-control success m-1"
              style={{ width: "160px" }}
              id="search"
              type="test"
              placeholder="Search"
              onChange={(e) => {
                e.target.value !== ""
                  ? dispatch({ type: "search", payload: e.target.value })
                  : dispatch({ type: "search" });
              }}
            />
          ) : (
            <button
              className="btn btn-light m-1"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
