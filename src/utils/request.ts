export async function getRequest(endpoint: string, params: Record<string, string>) {
  const url = new URL(endpoint);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  console.log(import.meta.env.VITE_PEXEL_API_KEY);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `${import.meta.env.VITE_PEXEL_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}