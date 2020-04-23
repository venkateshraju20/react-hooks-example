import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resourceName) => {
  // useState has a param of empty array of a current state "resources" and its function setResources.
  const [resources, setResources] = useState([]);

  const fetchResources = async (resourceName) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourceName}`
    );

    setResources(response.data);
  };

  // useEffect has callback function and state value. Whenever changes happen to state, it will call the callback function.
  useEffect(() => {
    fetchResources(resourceName);
  }, [resourceName]);

  return resources;
};

export default useResources;
