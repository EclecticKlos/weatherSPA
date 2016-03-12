// DIRECTIVES
weatherApp.directive("dateTemp", function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/dateTempHTML.html',
    replace: true,
    scope: {
      dateTempObject: '=',
      convertToStandard: '&',
      convertToDate: '&',
      dateFormat: '@'
    }
  }
})
