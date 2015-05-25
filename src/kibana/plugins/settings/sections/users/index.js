define(function (require) {
  require('plugins/settings/sections/objects/_view');
  require('plugins/settings/sections/users/_users');

  require('angular-ui-ace');
  require('angular-elastic');
  require('directives/confirm_click');

  // add the module deps to this module
  require('modules').get('apps/settings', ['ui.ace', 'monospaced.elastic']);

  return {
    order: Infinity,
    name: 'users',
    display: '用户',
    url: '#/settings/users'
  };  

});