export default function DashboardController(DashboardService, PostService, $mdDialog) {
    var vm = this;
    vm.articles = [];
    vm.article = {};
    vm.setArticle = setArticle;
    vm.getSelected = getSelected;
    vm.categories = ["Sports", "Business", "Pop Culture", "Civic"];
    vm.selectedCategory = vm.categories[0];
    vm.showModal = showModal;
    vm.savePost = savePost;

    init();

    function init(){
        setCategory("https://www.google.com/alerts/feeds/17364175491094000847/7025728249945119546");
    }

    function setArticle(article){
        vm.article = article;
    }

    function parseArticle(data){
        var article = {}; 
        xml2js.parseString(data, function (err, result) {
            var xml = result.feed.entry;
            var articles = [];
            _.each(xml, function(article) {
                var a = {
                    title: article.title[0]._,
                    description: article.content[0]._,
                    published: article.published[0]._,
                    url: parseURL(article.link[0].$.href)
                }
                vm.articles.push(a);
            });
            setArticle(vm.articles[0]);
        });
    }

    function getSelected(array) {
      if (array !== undefined) {
        return array;
      } else {
        return "Please select an option";
      }
    };

    function showModal(ev) {
        $mdDialog.show({
        controller: function () {
            return vm;
        },
        controllerAs: "modal",
        template: require('./dashboard.html'),
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: false // Only for -xs, -sm breakpoints.
        })
      };

    function parseURL(url){
        url = url.substring(42);
        url = url.substring(0, url.indexOf("&ct=ga&cd="));
        return url;
    }
    
    function setCategory(XURI){
        DashboardService.getXML(XURI).then(function(response){
            parseArticle(response.data); 
        });
    }

    function savePost(article){
        article.category_id = 1;
        article.image = 'image.jpg';
        PostService.savePost(article).then(function(response){
            if(response.status == 201){
                $mdDialog.hide();
                swal('Success!', 'Your article has been posted.','success');
            } else {
                swal('Error!', 'Your article was not saved. Please try again.','error');
            }
        });
    }
}