import { Social } from "../typings";

const query = `
    *[_type == "social"]
`;

export const fetchSocials = async () => {
  const uri = `https://2lc8sy0g.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const encoded = encodeURI(uri);
  const res = await fetch(encoded);

  const data = await res.json();
  const socials: Social[] = data.result;

  // console.log("Socials: ", socials);

  return socials;
};
