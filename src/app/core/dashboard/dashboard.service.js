export default function DashboardService($window, $http) {
    var service = {
        getXML: getXML,
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

    return service;
}