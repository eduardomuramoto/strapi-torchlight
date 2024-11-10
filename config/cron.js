module.exports = {
  '*/5 * * * *': async () => {
    const currentDate = new Date();
    console.log(`Current Date and Time: ${currentDate}`);
  },
};
