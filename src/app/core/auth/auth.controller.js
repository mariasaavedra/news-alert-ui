export default function AuthController(AuthService, $window, $http) {
    var vm = this;
    vm.login = login;
    vm.me = me;
    vm.getToken = getToken;

    function getToken(){
        return $window.localStorage.getItem('access_token');
    }
    function me(){
        $http({
            method: 'POST',
            url: 'http://192.168.10.10/api/v1/auth/me',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': 'Bearer ' +  getToken()
            }
        }).then(function successCallback(response) {
           console.log("auth", response);
        });
    }

    vm.me();

    function login() {
        var credentials = {
            "email": vm.user.name,
            "password": vm.user.password
        }
        $http({
            method: 'POST',
            url: 'http://192.168.10.10/api/v1/auth/login',
            data: credentials,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(function successCallback(response) {
           $window.localStorage.setItem('access_token', response.data.access_token);
        }, function errorCallback(response) {
            swal({
                title: "Login Failed!",
                text: "Please check that your username and password are correct.",
                showConfirmButton: true,
                closeOnConfirm: true
            });
        });
    }
}