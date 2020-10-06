
$(document).ready(function(){
    onLoadFinish()
})
function onLoadFinish() {
    console.log('onLoadFinish');
    var firebaseConfig = {
        apiKey: "AIzaSyD3H-Dk7rFXhsMXIN4NQQL9hC5NxGrnrHE",
        authDomain: "dazed-8b740.firebaseapp.com",
        databaseURL: "https://dazed-8b740.firebaseio.com",
        projectId: "dazed-8b740",
        storageBucket: "dazed-8b740.appspot.com",
        messagingSenderId: "387838156905",
        appId: "1:387838156905:web:feb03fd11cd433ff50c2f8",
        measurementId: "G-DDMFQQW2KH"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    window.setFirebaseValues = function (values) {
        firebase.database().ref('values').update(values);
    };

    firebase.database().ref('values').on('value', function (snapshot) {
        if (typeof window.firebaseValueChangeHandler !== 'function') {
            return;
        }
    window.firebaseValueChangeHandler(snapshot.val());
    }); // ready to go

    if (typeof window.onFirebaseReady === 'function') {
        window.onFirebaseReady();
    } // empty value change queue


    window.firebaseSetValuesQueue.forEach(function (values) {
        window.setFirebaseValues(values);
    });
    window.firebaseSetValuesQueue = [];
} // start loading firebase scripts