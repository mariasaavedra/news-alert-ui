export default function AuthController(AuthService, $http) {
    var vm = this;
    vm.login = login;

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
           console.log("auth", response);
           $window.localStorage.setItem('token', response.data.token);
           $state.go('dashboard');
        }, function errorCallback(response) {
            // return "Login failed, check username or password.";
            swal({
                title: "Login Failed!",
                text: "Please check that your username and password are correct.",
                showConfirmButton: true,
                closeOnConfirm: true
            });
        });
    }
}