import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [AllApps, setAllApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    axios("./AppData.json")
      .then((data) => setAllApps(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { AllApps, loading, error };
};
export default useApps;
