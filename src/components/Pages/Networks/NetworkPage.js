import { useParams } from "react-router-dom";
import { useFetch } from "../../Data/Request";
import { useEffect, useState } from "react";

function NetworkPage() {
  const params = useParams();
  const { data } = useFetch("/api/services/" + params.id + "/service");
  const [service, setService] = useState({});
  const [currentTab, setCurrentTab] = useState("statistics");

  useEffect(() => {
    setService(data);
  }, [data]);

  if (!service.name) {
    return;
  }

  return (
    <div className="bg-secondary rounded h-100 p-4">
      <h3 className="mb-4">
        {service.name.replace(/_/g, " ")} - {service.protected}
      </h3>
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className={
              (currentTab === "statistics" ? "active " : "") + "nav-link"
            }
            type="button"
            onClick={() => setCurrentTab("statistics")}
          >
            Statistics
          </button>
          <button
            className={(currentTab === "port" ? "active " : "") + "nav-link"}
            type="button"
            onClick={() => setCurrentTab("port")}
          >
            Port
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className={
              (currentTab === "statistics" ? "show active " : "") +
              "tab-pane fade"
            }
          >
            <pre>{JSON.stringify(service.statistics, null, 2)}</pre>
          </div>
          <div
            className={
              (currentTab === "port" ? "show active " : "") + "tab-pane fade"
            }
          >
            <pre>{JSON.stringify(service.port, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkPage;
