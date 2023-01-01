import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Footer() {
  const location = useLocation().pathname;
  return (
    <>
      {location === "/" && (
        <Link
          to="/new"
          title="New Contact"
          className="bg-primary rounded-circle position-fixed bottom-0 end-0 d-flex justify-content-center align-items-center m-4 shadow"
          style={{ width: "50px", height: "50px" }}
        >
          <i className="bi bi-plus fs-2 text-light" />
        </Link>
      )}
    </>
  );
}
