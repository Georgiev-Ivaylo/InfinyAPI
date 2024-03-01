import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function BreadcrumbsNavigation() {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div
      key="main"
      className="bg-secondary rounded h-100 p-4 mb-2 d-flex flex-row-reverse"
    >
      <div className="btn-group" role="group">
        {breadcrumbs.map(({ match, breadcrumb }, i) => {
          if (i + 1 === breadcrumbs.length) {
            return null;
          }

          if (i + 2 === breadcrumbs.length) {
            return (
              <React.Fragment key={match.pathname + "_double"}>
                <Link
                  key={match.pathname}
                  to={match.pathname}
                  className="btn btn-primary"
                >
                  {breadcrumb}
                </Link>
                <Link
                  key={match.pathname + "_double_back"}
                  to={match.pathname}
                  className="btn btn-primary mx-1"
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                </Link>
              </React.Fragment>
            );
          }

          return (
            <Link
              key={match.pathname}
              to={match.pathname}
              className="btn btn-primary"
            >
              {breadcrumb}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BreadcrumbsNavigation;
