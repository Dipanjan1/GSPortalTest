$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("featureFiles/search.feature");
formatter.feature({
  "line": 1,
  "name": "Testing Search",
  "description": "",
  "id": "testing-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Check search icon",
  "description": "",
  "id": "testing-search;check-search-icon",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Runme"
    }
  ]
});
});