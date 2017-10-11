export default function HomeController(PostService) {
    var vm = this;
    vm.news = [
        {
            "source": "Kansas City Star",
            "tag": "weather",
            "date_since": "2 hours ago",
            "href": "http://www.kansascity.com/weather/article163900343.html",
            "title": "Massive flooding in Kansas City leads to water rescues and closed road",
            "excerpt": "Overnight storms dumped heavy rains across the Kansas City area, leading to serious flooding, several closed roads and water rescues early Thursday."
        },
        {
            "source": "Startland News",
            "tag": "biz",
            "date_since": "4 hours ago",
            "href": "http://www.startlandnews.com/2017/09/leaders-say-kansas-city-prime-amazon-hq2/",
            "title": "Leaders say Kansas City is prime for Amazon HQ2",
            "excerpt": "In the wake of news Amazon is planning a second, U.S. headquarters, a group of Kansas City organizations is tossing Kansas City’s proverbial hat in the e-commerce giant’s shopping cart."
        },
        {
            "source": "KCTV5",
            "tag": "civic",
            "date_since": "1 day ago",
            "href": "http://www.kctv5.com/story/36359491/work-begins-on-long-awaited-downtown-loop-bike-project",
            "title": "Work begins on long-awaited Downtown Loop Bike Project",
            "excerpt": "A long-awaited bike lane project starts Wednesday night. The Grand Boulevard portion of the Downtown Loop Bike Project will stretch from 5th Street, south to 20th Street."
        },
        {
            "source": "Sporting KC",
            "tag": "sports",
            "date_since": "5 hours ago",
            "href": "https://www.sportingkc.com/post/2017/09/13/sporting-kc-host-us-open-cup-fan-rally-tuesday-kc-live-block",
            "title": "Sporting KC to host U.S. Open Cup Fan Rally on Tuesday in KC Live!",
            "excerpt": "All Sporting Kansas City supporters are invited to attend the U.S. Open Cup Fan Rally on Tuesday at the Kansas City Live! Block in the Power & Light District."
        },
        {
            "source": "Shawnee Mission Post",
            "tag": "civic",
            "date_since": "1 day ago",
            "href": "https://shawneemissionpost.com/2017/09/12/city-of-mission-mission-trails-developer-work-out-compromise-agreement-on-tif-period-funding-for-parking-infrastructure-65806",
            "title": "City of Mission, Mission Trails agree on funding for parking infrastructure",
            "excerpt": "As part of a compromise intended to make the project palatable both to financiers and the city, the developer of the proposed Mission Trails project and the city of Mission have agreed in principle to a dea"
        },
    ]
    
    init();
    
    function init(){
        PostService.loadAll().then(function(response){
            console.log(response);
        });
    }
}