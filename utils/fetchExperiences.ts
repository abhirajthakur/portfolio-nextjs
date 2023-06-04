import { Experience } from "../typings";

const query = `
    *[_type == "experience"] {
      ...,
      technologies[]->
    }
`;

export const fetchExperiences = async () => {
  const uri = `https://2lc8sy0g.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const encoded = encodeURI(uri);
  const res = await fetch(encoded);

  const data = await res.json();
  const experiences: Experience[] = data.result;

  // console.log("Experiences: ", experiences);

  return experiences;
};
