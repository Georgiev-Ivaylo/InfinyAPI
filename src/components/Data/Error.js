import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { errorClear } from "../Store/ErrorSlice";
import { useDispatch, useSelector } from "react-redux";

function Error() {
  const error = useSelector((rootState) => rootState.error);
  const dispatch = useDispatch();
  if (error.message === null) {
    return;
  }
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <FontAwesomeIcon icon={faExclamationCircle} className="me-2" />
      {error.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => dispatch(errorClear())}
      ></button>
    </div>
  );
}

export default Error;
