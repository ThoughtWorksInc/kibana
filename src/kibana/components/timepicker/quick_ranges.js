define(function (require) {
  var module = require('modules').get('kibana');

  module.constant('quickRanges', [
    { from: 'now/d',    to: 'now/d',    display: '今天',                 section: 0 },
    { from: 'now/w',    to: 'now/w',    display: '本周',             section: 0 },
    { from: 'now/M',    to: 'now/M',    display: '本月',            section: 0 },
    { from: 'now/y',    to: 'now/y',    display: '今年',             section: 0 },
    // { from: 'now/d',    to: 'now',      display: 'The day so far',        section: 0 },
    // { from: 'now/w',    to: 'now',      display: 'Week to date',          section: 0 },
    // { from: 'now/M',    to: 'now',      display: 'Month to date',         section: 0 },
    // { from: 'now/y',    to: 'now',      display: 'Year to date',          section: 0 },

    { from: 'now-1d/d', to: 'now-1d/d', display: '昨天',             section: 1 },
    // { from: 'now-2d/d', to: 'now-2d/d', display: '前天',  section: 1 },
    { from: 'now-7d/d', to: 'now-7d/d', display: '一周前',    section: 1 },
    { from: 'now-1w/w', to: 'now-1w/w', display: '上一周',         section: 1 },
    { from: 'now-1M/M', to: 'now-1M/M', display: '上一月',        section: 1 },
    { from: 'now-1y/y', to: 'now-1y/y', display: '上一年',         section: 1 },

    // { from: 'now-15m',  to: 'now',      display: 'Last 15 minutes',       section: 2 },
    { from: 'now-30m',  to: 'now',      display: '30分钟内',       section: 2 },
    { from: 'now-1h',   to: 'now',      display: '1小时内',           section: 2 },
    // { from: 'now-4h',   to: 'now',      display: 'Last 4 hours',          section: 2 },
    { from: 'now-12h',  to: 'now',      display: '12小时内',         section: 2 },
    { from: 'now-24h',  to: 'now',      display: '24小时内',         section: 2 },
    { from: 'now-7d',   to: 'now',      display: '7天内',           section: 2 },

    { from: 'now-30d',  to: 'now',      display: '30天内',          section: 3 },
    { from: 'now-60d',  to: 'now',      display: '60天内',          section: 3 },
    { from: 'now-90d',  to: 'now',      display: '90天内',          section: 3 },
    // { from: 'now-6M',   to: 'now',      display: 'Last 6 months',         section: 3 },
    { from: 'now-1y',   to: 'now',      display: '1年以内',           section: 3 },
    { from: 'now-2y',   to: 'now',      display: '2年以内',          section: 3 },
    // { from: 'now-5y',   to: 'now',      display: 'Last 5 years',          section: 3 },

  ]);

});
