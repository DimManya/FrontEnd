(function() {
  'use strict';

  angular
    .module('easyTrans')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
