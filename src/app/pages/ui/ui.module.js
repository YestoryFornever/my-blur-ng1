/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('GuoShijian.pages.ui', [
    'GuoShijian.pages.ui.typography',
    'GuoShijian.pages.ui.buttons',
    'GuoShijian.pages.ui.icons',
    'GuoShijian.pages.ui.modals',
    'GuoShijian.pages.ui.grid',
    'GuoShijian.pages.ui.alerts',
    'GuoShijian.pages.ui.progressBars',
    'GuoShijian.pages.ui.notifications',
    'GuoShijian.pages.ui.tabs',
    'GuoShijian.pages.ui.slider',
    'GuoShijian.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
