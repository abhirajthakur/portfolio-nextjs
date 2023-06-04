import { Project } from "../typings";

const query = `
    *[_type == "project"] {
      ...,
      technologies[] ->
    }
`;

export const fetchProjects = async () => {
  const uri = `https://2lc8sy0g.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const encoded = encodeURI(uri);
  const res = await fetch(encoded);

  const data = await res.json();
  const projects: Project[] = data.result;

  // console.log("Projects: ", projects);

  return projects;
};
