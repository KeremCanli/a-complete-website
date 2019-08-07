"use strict";
const id = document.URL.split("detail/")[1];
const url = "http://localhost:3000/news/api/" + id;

application.controller("newsDetail", ($scope, $http) => {
  $http.get(url).then(response => {
    $scope.data = response.data;
  });
});