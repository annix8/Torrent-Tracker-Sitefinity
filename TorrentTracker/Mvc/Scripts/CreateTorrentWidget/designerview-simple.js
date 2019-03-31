/* ------------------------------------------------------------------------------
<auto-generated>
    This file was generated by Sitefinity CLI v1.0.0.4
</auto-generated>
------------------------------------------------------------------------------ */

angular.module('designer')
	.controller('SimpleCtrl', ['$scope', 'propertyService', function ($scope, propertyService) {
		$scope.feedback.showLoadingIndicator = true;
		// Get widget properies and load them in the controller's scope
		propertyService.get()
			.then(function (data) {
				if (data) {
					$scope.properties = propertyService.toAssociativeArray(data.Items);
				}
			}, function (data) {
				$scope.feedback.showError = true;
				if (data) {
						$scope.feedback.errorMessage = data.Detail;
				}
			})
			.finally(function () {
				$scope.feedback.showLoadingIndicator = false;
			});
	}]);