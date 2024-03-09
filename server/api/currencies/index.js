export default defineEventHandler(async (event) => {
  const { currencyApiBaseUrl, currencyApiKey } = useRuntimeConfig();
  const data = await getAllCurrencies(currencyApiBaseUrl, currencyApiKey);

  return { data };
});

const getAllCurrencies = async (baseUrl, apikey) => {
  return {
    message: 'Hello World!',
  };

  const { data } = await $fetch(`${baseUrl}/currencies`, {
    params: { apikey },
  });

  return data;
};
