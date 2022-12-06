import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../Store/Auth";

const DashBoard = () => {
  const ctx = useContext(AuthContext);
  const [loading, setLoading] = useState();
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      await axios
        .get("http://localhost:4500/api/v1/dashBoard", {
          headers: { Authorization: `Bearer ${ctx.formData.token}` },
        })
        .then((response) => response.data)
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [ctx.formData.token]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  console.log(">>>>Data", ctx.formData.token);
  return (
    <div>
      {loading ? (
        <p>Loading Resources</p>
      ) : (
        <h1>THE DASHBOARD: {ctx.formData.msg}</h1>
      )}
    </div>
  );
};

export default DashBoard;
