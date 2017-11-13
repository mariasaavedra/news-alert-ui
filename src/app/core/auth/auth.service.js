export default function AuthService($rootScope, $window, $http, $state) {
    var service = {
        getCurrentUser,
        logout: logout,
        isLoggedIn: isLoggedIn,
        getToken: getToken,
        deleteUser: deleteUser
    };
    return service;

    function getCurrentUser(){
        return $http({
            method: 'GET',
            url: 'http://192.168.10.10/api/v1/user' ,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': 'Bearer ' +  getToken()
            }
        }).then(function successCallback(response) {
            console.log(response, "user");
            return response;
        }, function errorCallback(response) {
            return "Error loading user";
        });
    }
     function deleteUser(id){
        return $http({
            method: 'DELETE',
            url: 'http://192.168.10.10/api/v1/user/' + id,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': 'Bearer ' +  getToken()
            }
        }).then(function successCallback(response) {

            return response;
        }, function errorCallback(response) {
            return "Error loading user";
        });
    }
    function isLoggedIn() {
        return vm.getToken ? true : false;
    }

    function getToken(){
        return $window.localStorage.getItem('token');
    }

    function logout(){
		$window.localStorage.removeItem('token');
        $state.go('home');
	}
}