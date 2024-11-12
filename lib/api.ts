import qs from 'qs';

const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${STRAPI_API_URL}${path}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch API');
  }
}

export async function getProducts(filters = {}) {
  const products = await fetchAPI('/api/products', {
    populate: '*',
    ...filters,
  });
  return products;
}

export async function getNextDrop() {
  const drops = await fetchAPI('/api/drops', {
    populate: '*',
    sort: ['dropDate:asc'],
    filters: {
      dropDate: {
        $gt: new Date().toISOString(),
      },
    },
    pagination: {
      limit: 1,
    },
  });
  return drops.data[0];
}

export async function subscribeToNewsletter(email: string) {
  const response = await fetchAPI('/api/newsletter-subscriptions', {}, {
    method: 'POST',
    body: JSON.stringify({ data: { email } }),
  });
  return response;
}