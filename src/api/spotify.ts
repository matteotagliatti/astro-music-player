const client_id = import.meta.env.SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.SPOTIFY_REFRESH_TOKEN;
const token_endpoint = `https://accounts.spotify.com/api/token`;
const fav_albums_endpoint = `https://api.spotify.com/v1/albums?ids=7btiyhWzUfzxN3ijSiBpC8%2C1C30LhZB9I48LdpVCRRYvq%2C1cCAb1vN8uUsdfEylVmTLs%2C5EbpxRwbbpCJUepbqVTZ1U%2C7bvmGyFDwpHNRRRZJ0AHvn%2C1pOl0KEC1iQnA6F0XxV4To%2C6nfJMRoIjyRwk3ZTHNm0PY%2C6vN8o7jyIAJvFPqC0vxxmm&market=IT`;

type Headers = {
  headers: {
    Authorization: string;
  };
};

const get = (path: string, headers: Headers) =>
  fetch(path, headers).then((r) =>
    r.status === 200 ? r.json() : JSON.stringify({})
  );

const getAccessToken = async () => {
  const response = await fetch(token_endpoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ` + btoa(`${client_id}:${client_secret}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }).toString(),
  });

  return await response.json();
};

export const getTopAlbums = async () => {
  const { access_token } = await getAccessToken();
  return get(fav_albums_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getAlbum = async (id: string) => {
  const { access_token } = await getAccessToken();
  return get(`https://api.spotify.com/v1/albums/${id}?market=IT`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
