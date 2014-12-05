angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('CameraCtrl', function($scope, $cordovaCamera) {
	var options = {
    quality : 75,
    destinationType : Camera.DestinationType.DATA_URL,
    sourceType : Camera.PictureSourceType.CAMERA,
    allowEdit : true,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 100,
    targetHeight: 100,
    popoverOptions: CameraPopoverOptions,
    saveToPhotoAlbum: false
  };

  $cordovaCamera.getPicture(options).then(function(imageData) {
    // Success! Image data is here
    console.log(imageData);
    alert(imageData);
  }, function(err) {
    // An error occurred. Show a message to the user
    console.log(err);
    alert(err);
  });

})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
