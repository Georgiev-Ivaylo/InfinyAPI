import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../Data/Request";

function NetworksPage() {
  const { data } = useFetch("/api/services");
  const [networks, setNetworks] = useState([]);

  useEffect(() => {
    setNetworks(data);
  }, [data]);
  return (
    <div className="h-100 bg-secondary rounded p-4">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h1 className="mb-0">Services</h1>
        <button className="btn btn-warning rounded-pill m-2">Load more</button>
      </div>
      {networks.map((network) => (
        <div
          key={network.id}
          className="d-flex align-items-center border-bottom py-3"
        >
          <div className="w-100 ms-3">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-0">{network.name.replace(/_/g, " ")}</h6>
              <Link to={"" + network.id}>Details</Link>
            </div>
            <span>Created - {network.created}</span>
            <br />
            <span>{network.type}</span>
            <br />
            {network.expired || network.paused ? (
              <span>Inactive</span>
            ) : (
              <span>Active</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NetworksPage;
