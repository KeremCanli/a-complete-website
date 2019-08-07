"use strict";
const url = "http://localhost:3000/reference/api";

application.controller("reference", ($scope, $http) => {
  $http.get(url).then(response => {
    $scope.data = response.data;
  });
});