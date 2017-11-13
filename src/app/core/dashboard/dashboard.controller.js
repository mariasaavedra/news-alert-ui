export default function DashboardController(DashboardService, PostService, $mdDialog) {
    var vm = this;
    vm.articles = [];
    vm.article = {};
    vm.setArticle = setArticle;
    vm.getSelected = getSelected;
    vm.categories = ["All", "Sports", "Business", "Pop Culture", "Civic"];
    vm.selectedCategory = vm.categories[0];
    vm.showModal = showModal;
    vm.savePost = savePost;
    
    init();

    function init(){
        sports();
        community();
    }

    function technology(){
        // Startland Startups
        DashboardService.getXML("http://www.startlandnews.com/category/startups/feed").then(function(response){
            parseArticle(response.data, "startland"); 
        });
    }
    function community(){
        // Startland Education
        DashboardService.getXML("http://www.startlandnews.com/category/education/feed").then(function(response){
            parseArticle(response.data, "startland"); 
        });
        // Startland Government
        DashboardService.getXML("http://www.startlandnews.com/category/government/feed").then(function(response){
            parseArticle(response.data, "startland"); 
        });
        // Local News KSHB
        DashboardService.getXML("http://www.kshb.com/feeds/rssFeed?obfType=RSS_FEED&siteId=10014&categoryId=20000").then(function(response){
            parseArticle(response.data, "kshb"); 
        });
        // Johnson County KSHB
        DashboardService.getXML("http://www.kshb.com/feeds/rssFeed?obfType=RSS_FEED&siteId=10014&categoryId=30293").then(function(response){
            parseArticle(response.data, "kshb"); 
        });
        // Jackson County KSHB
        DashboardService.getXML("http://www.kshb.com/feeds/rssFeed?obfType=RSS_FEED&siteId=10014&categoryId=30302").then(function(response){
            parseArticle(response.data, "kshb"); 
        });
    }

    function sports(){
        // Chiefs KSHB
        DashboardService.getXML("http://www.kshb.com/feeds/rssFeed?obfType=RSS_FEED&siteId=10014&categoryId=30240").then(function(response){
            parseArticle(response.data, "kshb"); 
        });
        // Sporting KC KSHB
        DashboardService.getXML("http://www.kshb.com/feeds/rssFeed?obfType=RSS_FEED&siteId=10014&categoryId=76125").then(function(response){
            parseArticle(response.data, "kshb"); 
        });
        // Royals KSHB
        DashboardService.getXML("http://www.kshb.com/feeds/rssFeed?obfType=RSS_FEED&siteId=10014&categoryId=30175").then(function(response){
            parseArticle(response.data, "kshb"); 
        });
    }
    

    function setArticle(article){
        vm.article = article;
    }

    function parseArticle(data, source){
        var article = {}; 
        xml2js.parseString(data, function (err, result) {
            var xml;
            var articles = [];
            source.toLowerCase();
            switch (source){
                case "kshb" || "startland":
                    xml = result.rss.channel[0].item;
                    _.each(xml, function(article) {
                        var a = new function() {
                            this.title = article.title[0];
                            this.description = article.description[0];
                            this.published = moment.parseZone(article.pubDate[0]).local().format("MM/DD/YYYY h:mm a");
                            this.duration = moment(article.pubDate[0]).from(moment());
                            this.timestamp = moment(article.pubDate[0]).valueOf();
                            this.url = article.link[0];
                            this.source = 'KSHB';
                        }
                        vm.articles.push(a);
                    });
                    break;
                case "startland":
                    xml = result.rss.channel[0].item;
                    _.each(xml, function(article) {
                        console.log(article);
                        var a = new function() {
                            this.title = article.title[0];
                            this.description = article.description[0];
                            this.published = moment.parseZone(article.pubDate[0]).local().format("MM/DD/YYYY h:mm a");
                            this.duration = moment(article.pubDate[0]).from(moment());
                            this.timestamp = moment(article.pubDate[0]).valueOf();
                            this.url = article.link[0];
                            this.source = 'Startland News';
                        }
                        vm.articles.push(a);
                    });
                    break;
                default: 
                    xml = result.rss.channel;
                    break;
            }

            
            
            //setArticle(vm.articles[0]);
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

        if(article.facebook == true){
            var post = {
                href: article.url,
                title: article.title
            }
            DashboardService.shareFacebook(post).then(function(response){
                console.log(response);
            });
        }

    }
}