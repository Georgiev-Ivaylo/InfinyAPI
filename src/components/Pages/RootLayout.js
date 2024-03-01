import { Outlet } from "react-router-dom";
import MainNavigationIndex from "../Navigations/MainNavigation/MainNavigationIndex";
import BreadcrumbsNavigation from "../Navigations/MainNavigation/BreadcrumbsNavigation";
import Loading from "../Data/Loading";
import Error from "../Data/Error";

function RootLayout() {
  return (
    <div className="container-fluid position-relative d-flex p-0">
      <MainNavigationIndex />
      <main className="content">
        <div className="container-fluid pt-4 px-4">
          <Loading />
          <Error />
          <BreadcrumbsNavigation />
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
