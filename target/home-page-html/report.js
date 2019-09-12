$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/automatedtest/sample/Home_page.feature");
formatter.feature({
  "name": "Home page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check page display (uid:8701b6da-ae8f-40b2-a6ba-e4da58f83954)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@home_page"
    },
    {
      "name": "@home_page_display"
    }
  ]
});
formatter.step({
  "name": "A user navigates to HomePage \"\u003ccountryCode\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "Google logo is displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "search bar is displayed",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "countryCode",
        "hiptest-uid"
      ]
    },
    {
      "cells": [
        "fr",
        "uid:f9abb2df-5669-4fec-aac8-55a189301ffe"
      ]
    },
    {
      "cells": [
        "com",
        "uid:d980e564-90fb-4d26-9c5e-8e9ed5c50a44"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check page display (uid:8701b6da-ae8f-40b2-a6ba-e4da58f83954)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@home_page"
    },
    {
      "name": "@home_page_display"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A user navigates to HomePage \"fr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.aUserNavigatesToHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Google logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.googleLogoIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search bar is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.searchBarIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check page display (uid:8701b6da-ae8f-40b2-a6ba-e4da58f83954)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@home_page"
    },
    {
      "name": "@home_page_display"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A user navigates to HomePage \"com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.aUserNavigatesToHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Google logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.googleLogoIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "search bar is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.searchBarIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check title (uid:4e9e6380-bffd-482d-9c6f-f4dd7b960398)",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@home_page"
    },
    {
      "name": "@home_page_title"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "A user navigates to HomePage \"fr\"",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.aUserNavigatesToHomePage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title is \"Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.pageTitleIs(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});