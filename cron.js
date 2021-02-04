const cron = require("node-cron");
const { createCrawler } = require("./crawlerFunctions");

const triggerCron = () => {
  /* running a task every 5 second */
  cron.schedule("*/5 * * * * *", function () {
    createCrawler();
  });
};

module.exports = {
  triggerCron,
};
