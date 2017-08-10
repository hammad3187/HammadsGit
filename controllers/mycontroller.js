angular
       .module('myapp')
       .controller('mycontroller',function($scope,myfactory)
       {
         $scope.name="Hammad";
         $scope.data = myfactory.getdata();
       }
    );