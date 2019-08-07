"use strict";
const url = "http://localhost:3000/news/api";

application.controller("news", ($scope, $http) => {
  $http.get(url).then(response => {
    $scope.data = response.data;
  });
});