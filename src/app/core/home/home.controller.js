export default function HomeController(PostService) {
    var vm = this;
    vm.news = [];
    
    init();
    
    function init(){
        PostService.loadAll().then(function(response){
            vm.news = response.data.posts;
        });
    }
}