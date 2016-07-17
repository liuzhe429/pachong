/**
 * Created by liuzhe on 16/7/17.
 */
var cronJob = require('cron').CronJob;
var job1 = new cronJob("* * * * * *", function () {
  console.log('每秒');
});
job1.start();

//# sourceMappingURL=3.cron-compiled.js.map