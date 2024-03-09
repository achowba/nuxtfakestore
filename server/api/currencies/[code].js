export default defineEventHandler(async (event) => {
  const { currencyApiBaseUrl, currencyApiKey } = useRuntimeConfig();

  const { code } = event.context.params;
  const currency = await getCurrency(currencyApiBaseUrl, currencyApiKey, code);

  return { currency };
});

const getCurrency = async (baseUrl, apikey, code) => {
  return {
    USD: {
      code: 'USD',
      value: 1,
    },
  };

  const { data } = await $fetch(`${baseUrl}/latest`, {
    params: {
      currencies: code.toUpperCase(),
      apikey,
    },
  });

  return data;
};
