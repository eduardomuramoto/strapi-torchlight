module.exports = {
  '*/10 * * * *': async () => {
    const currentDate = new Date();
    console.log(`Current Date and Time: ${currentDate}`);
  },
};
