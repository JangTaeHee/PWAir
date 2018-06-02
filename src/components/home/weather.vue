<template>
    <div class="container">
        <h1>{{geoLocation.currentDistrict}}</h1>

        <div class="weather">
            <p>{{currentWeatherItem.IDEX_NM}}</p>
            <p>{{currentWeatherItem.IDEX_MVL}}</p>
        </div>
    </div>
</template>

<script>
import weatherData from '../../data/weather.json';

export default {
    name: 'Weather',
    data(){
        return{
            // Geolocation
            geoLocation : {
                currentLocation: null,
                currentLocationLat: null,
                currentLocationLon: null,
                currentDistrict: null
            },
            currentWeatherItem: {}
        }
    },
    //화면에 엮을 떄.
    created(){
        // Get geolocation info
        if (navigator.geolocation) {
        console.log('Geolocation is supported!');
        this.getUserLocation();
        this.getWeatherDataByDistrict(this.geoLocation.currentDistrict);
        } else {
        console.log('Geolocation is not supported for this Browser/OS.');
        }

        console.log(weatherData);
        
    },
    methods: {
    getWeatherDataByDistrict(district){
        weatherData.RealtimeCityAir.row.forEach(element => {
            if(element.MSRSTE_NM == '강남구'){
                this.currentWeatherItem = element;
            }
        });
    },
    // Get User's Location Info
    getUserLocation() {
      return navigator.geolocation.getCurrentPosition(function(position) {
        this.geoLocation.currentLocation = position.coords;
        this.geoLocation.currentLocationLon = position.coords.longitude;
        this.geoLocation.currentLocationLat = position.coords.latitude;
        this.geoInfoToDistrictName(position.coords.latitude, position.coords.longitude);
      }.bind(this), function (error) { // getCurrentPosition 비동기 실행 결과 값을 컴포넌트에 매핑
        console.log('Error occurred. Error code: ' + error.code);
        switch (error.code) {
          case 0:
            console.log("Geolocation unknown error");
            break;
          case 1:
            console.log("Geolocation permission denied");
            break;
          case 2:
            console.log("Geolocation position unavailble");
            break;
          case 3:
            console.log("Getting location info timed out");
            break;
          default:
            console.log("Track the error");
        }
      }, { maximumAge: 5 * 60 * 1000 });
    },
    // naver from coord to address -- https://navermaps.github.io/maps.js/docs/tutorial-3-geocoder-geocoding.example.html
    geoInfoToDistrictName(lat, lng) {
      var self = this;
      naver.maps.Service.reverseGeocode({
        // 역삼역 고정값
        location: new naver.maps.LatLng(37.4954841, 127.0333574),
      }, function(status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
        }
        var result = response.result, // 검색 결과의 컨테이너
            items = result.items; // 검색 결과의 배열

        // console.log(items[0].addrdetail.sigugun);
        self.geoLocation.currentDistrict = items[0].addrdetail.sigugun;
      });
    },
    }
}
</script>

<style>

</style>
