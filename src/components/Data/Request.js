import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadingStart, loadingStop } from "../Store/LoadingSlice";
import { errorSet } from "../Store/ErrorSlice";

let token = null;
async function setToken() {
  await fetch(process.env.REACT_APP_API_HOST + "/api/oauth2/access-token", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: process.env.REACT_APP_API_CLIENT_ID,
      client_secret: process.env.REACT_APP_API_CLIENT_SECRET,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.access_token) {
        token = data;
      }
    })
    .catch((err) => {});
}

export const useFetch = (path) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(loadingStart());
      if (token === null) {
        await setToken();
      }

      try {
        const response = await fetch(process.env.REACT_APP_API_HOST + path, {
          headers: { Authorization: "Bearer " + token.access_token },
        });
        if (!response.ok) throw new Error(response.statusText);
        const json = await response.json();
        dispatch(loadingStop());
        setData(json);
      } catch (error) {
        dispatch(errorSet({ message: `${error} Could not Fetch Data ` }));
        setData([]);
        dispatch(loadingStop());
      }
    };
    fetchData();
  }, [path, dispatch]);

  return { data };
};
