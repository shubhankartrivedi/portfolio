export default async function fetchMetadataFromURL(url, options) {
    const response = await fetch(`https://jsonlink.io/api/extract?url=${url}`, options);
    const data = await response.json();
    return data;
  }
  