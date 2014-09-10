angular.module('lcValidationSummary').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('./src/directives/lcValidationSummary.html',
    "<div class='validation-summary-box' ng-show='filteredItems.length > 0'>\r" +
    "\n" +
    "\t<div class=\"summaryTitle\">\r" +
    "\n" +
    "\t\t<h4>Please review the following fields:</h4>\r" +
    "\n" +
    "\t</div>\r" +
    "\n" +
    "\t<ul id=\"errorListContainer\">\r" +
    "\n" +
    "\t\t<li ng-repeat='item in filteredItems = (validationsSummary | filter: elementName)'>{{item.errorMessage}}</li>\r" +
    "\n" +
    "\t</ul>\r" +
    "\n" +
    "</div>"
  );

}]);
