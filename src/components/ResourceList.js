import React from "react";
// import axios from "axios";
import useResources from "./useResources";

/* class ResourceList1 extends React.Component {
  state = {
    resources: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${this.props.resourceName}`
    );

    this.setState({ resources: response.data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resourceName !== this.props.resources) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${this.props.resourceName}`
      );

      this.setState({ resources: response.data });
    }
  }

  render() {
    return (
      <ul>
        {this.state.resources.map((resource) => (
          <li key={resource.id}>{resource.title}</li>
        ))}
      </ul>
    );
  }
} */

const ResourceList = ({ resourceName }) => {
  // above resourceName is the property name receive from the parent component.
  // useResources is the custom created hooks and passes property to it.
  const resources = useResources(resourceName);

  return (
    <ul>
      {resources.map((resource) => (
        <li key={resource.id}>{resource.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
