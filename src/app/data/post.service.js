export default function PostService($window, $http) {
    var service = {
        loadAll: loadAll,
        loadPost: loadPost,
        savePost: savePost,
        updatePost: updatePost,
        deletePost: deletePost
    };

    function loadAll(){
        return $http({
            method: 'GET',
            url: 'http://192.168.10.10/api/v1/post' ,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(function successCallback(response) {
            console.log(response, "loaded all posts");
            return response;
        }, function errorCallback(response) {
            return "Error loading posts";
        });
    }

    function loadPost(id){
        return $http({
            method: 'GET',
            url: 'http://192.168.10.10/api/v1/post/' + id ,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(function successCallback(response) {
            console.log(response, "loaded post");
            return response;
        }, function errorCallback(response) {
            return "Error loading posts";
        });
    }
    
    function savePost(data){
        return $http({
            method: 'POST',
            url: 'http://192.168.10.10/api/v1/post',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: data
        }).then(function successCallback(response) {
            console.log(response, "successfully saved post");
            return response;
        }, function errorCallback(response) {
            return "Error saving post";
        });
    }

    function updatePost(id){
        return $http({
            method: 'PATCH',
            url: 'http://192.168.10.10/api/v1/post/' + id ,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(function successCallback(response) {
            console.log(response, "successfully updated post");
            return response;
        }, function errorCallback(response) {
            return "Error loading posts";
        });
    }

    function deletePost(id){
        return $http({
            method: 'DELETE',
            url: 'http://192.168.10.10/api/v1/post/' + id ,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(function successCallback(response) {
            console.log(response, "successfully deleted post");
            return response;
        }, function errorCallback(response) {
            return "Error loading posts";
        });
    }

    return service;
}