
function getCurrentLocation (){
alert("Plaes !!! Start youre GPS");
navigator.permissions.getCurrentLocation
navigator.geolocation.getCurrentPosition(onSuccess,onError);

}

   


function onSuccess(position) {
   
    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    document.getElementById('lat').value = lat;
    document.getElementById('long').value = long; 

}
function onError(error) {
    alert("code" +error.code+"mess"+error.message);
}



// var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 3000 });
// navigator.geolocation.clearWatch(watchID);