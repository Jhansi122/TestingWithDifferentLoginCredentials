$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Features/ApplicationFeatures.feature");
formatter.feature({
  "line": 1,
  "name": "Test login functionality",
  "description": "",
  "id": "test-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Test different login credentials",
  "description": "",
  "id": "test-login-functionality;test-different-login-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open Firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters valid \"\u003cusername\u003e\" and  valid \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "test-login-functionality;test-different-login-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "Password"
      ],
      "line": 8,
      "id": "test-login-functionality;test-different-login-credentials;;1"
    },
    {
      "cells": [
        "username123@gmail.com",
        "",
        "1234"
      ],
      "line": 9,
      "id": "test-login-functionality;test-different-login-credentials;;2"
    },
    {
      "cells": [
        "username456@gmail.com",
        "",
        "123456"
      ],
      "line": 10,
      "id": "test-login-functionality;test-different-login-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Test different login credentials",
  "description": "",
  "id": "test-login-functionality;test-different-login-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open Firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters valid \"username123@gmail.com\" and  valid \"1234\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 10,
  "name": "Test different login credentials",
  "description": "",
  "id": "test-login-functionality;test-different-login-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "open Firefox browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters valid \"username456@gmail.com\" and  valid \"123456\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});