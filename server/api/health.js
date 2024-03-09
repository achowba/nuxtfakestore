export default defineEventHandler(async (event) => {
  return {
    message: 'Hello World!',
    status: `I'm good, you?`,
  };
});
