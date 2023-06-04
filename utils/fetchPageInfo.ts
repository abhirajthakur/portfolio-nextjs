import { PageInfo } from "../typings";

const query = `
    *[_type == "pageInfo"][0]
`;

export const fetchPageInfo = async () => {
  const uri = `https://2lc8sy0g.api.sanity.io/v2021-06-07/data/query/production?query=${query}`;
  const encoded = encodeURI(uri);
  const res = await fetch(encoded);

  const data = await res.json();
  const pageInfo: PageInfo = data.result;

  // console.log("PageInfo: ", pageInfo);

  return pageInfo;
};
