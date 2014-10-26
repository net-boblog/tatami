/**
 * This controller simply allows a modal instance to be created
 */
tatamiApp.controller('tatamManager', ['$scope', '$modal', function ($scope, $modal) {
    var modalInstance = $modal.open({
        templateUrl: '/app/components/home/tatam/vStatus.html',
        controller: 'tatamCreateCtrl'
    });
}]);
