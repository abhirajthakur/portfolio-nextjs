import { Skill } from "../typings";

const query = `
    *[_type == "skill"]
`;

export const fetchSkills = async () => {
  const uri = `https://2lc8sy0g.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const encoded = encodeURI(uri);
  const res = await fetch(encoded);

  const data = await res.json();
  const skills: Skill[] = data.result;

  // console.log("Skills: ", skills);

  return skills;
};
