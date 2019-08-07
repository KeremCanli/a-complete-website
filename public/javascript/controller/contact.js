"use strict";
const url = "http://localhost:3000/contact/api";

application.controller("contact", ($scope, $http, $httpParamSerializerJQLike) => {
  $scope.submit = valid => {
    if (valid) {
      $http({
        method: "post",
        url: url,
        data: $httpParamSerializerJQLike({
          name: $scope.name,
          surname: $scope.surname,
          email: $scope.email,
          phone: $scope.phone,
          message: $scope.message
        }),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(response => {
        $scope.data = "Mesajınız başarıyla iletildi.";
        document.forms[0].reset();
        $scope.name = "";
        $scope.surname = "";
        $scope.email = "";
        $scope.phone = "";
        $scope.message = "";
      });
    }
    $scope.data = "";
  }
});