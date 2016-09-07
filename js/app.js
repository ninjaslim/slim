angular.module('slim', ['dndLists']).controller('slimController', function ($scope) {

    $scope.models = {
        selected: null,
        lists: {
            "To Do": [{
                "label": "Update Html",
                "Jira": "Slim-101",
                "AssignedTo": "Divyal",
                "Epic": "My Angular POC",
                "Estimation": "2"
            }, {
                "label": "Create dummy Json",
                "Jira": "Slim-102",
                "AssignedTo": "Zhao",
                "Epic": "My Angular POC",
                "Estimation": "3"
            }, {
                "label": "Create angular service",
                "Jira": "Slim-103",
                "AssignedTo": "Mithun",
                "Epic": "My Angular POC",
                "Estimation": "5"
            }],

            "In Progress": [{
                "label": "Create Controller",
                "Jira": "Slim-104",
                "AssignedTo": "Pravin",
                "Epic": "My Angular POC",
                "Estimation": "5"
            },
                {
                    "label": "Create backend service",
                    "Jira": "Slim-105",
                    "AssignedTo": "Pravin",
                    "Epic": "My Angular POC",
                    "Estimation": "5"
                },
                {
                    "label": "Create table in database",
                    "Jira": "Slim-106",
                    "AssignedTo": "Pravin",
                    "Epic": "My Angular POC",
                    "Estimation": "8"
                }], "Done": [{
                    "label": "Create project structure",
                    "Jira": "Slim-107",
                    "AssignedTo": "Pravin",
                    "Epic": "My Angular POC",
                    "Estimation": "3"
                },
              {
                  "label": "Download dummy project structue",
                  "Jira": "Slim-108",
                  "AssignedTo": "Pravin",
                  "Epic": "My Angular POC",
                  "Estimation": "2"
              },
              {
                  "label": "Item B2",
                  "Jira": "Slim-109",
                  "AssignedTo": "Pravin",
                  "Epic": "My Angular POC",
                  "Estimation": "2"
              }]
        }
    };

    $scope.initController = function(){
        alert('Inside Controller');
        return "";
    };

    // Generate initial model
    //for (var i = 1; i <= 3; ++i) {
     //   $scope.models.lists.A.push({ label: "Item A" + i });
     //   $scope.models.lists.B.push({ label: "Item B" + i });
   // }

    // Model to JSON for demo purpose
    $scope.$watch('models', function (model) {
        $scope.modelAsJson = angular.toJson(model, true);
    }, true);

});