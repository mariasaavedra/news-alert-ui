export default function DashboardService($window, $http) {
    var service = {
        getXML: getXML,
        shareFacebook: shareFacebook
    };

    function getXML(url){
        return $http({
            method: 'GET',
            url: url 
        }).then(function successCallback(response) {
            return response;
        }, function errorCallback(response) {
            return "Error loading XML";
        });
    }

    function shareFacebook(post){
        return $http({
            method: 'POST',
            url: 'http://192.168.10.10/api/v1/facebook',
            data: post
        }).then(function successCallback(response) {
            return response;
        }, function errorCallback(response) {
            return "Error posting on to facebook";
        });
    }

    return service;
}