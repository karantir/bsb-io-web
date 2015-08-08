require.config({
    paths: {
        'jquery':    'lib/jquery/dist/jquery.min',
        'ractive':   'lib/ractive/ractive.min',
        'moment':    'lib/moment/min/moment.min',
        'socket-io': 'lib/socket.io-client/socket.io',
        'sockjs': 'lib/sockjs-client/dist/sockjs.min',

        'ractive-transitions-fade': 'lib/ractive-transitions-fade/dist/ractive-transitions-fade.min'
    },
    shim: {
        'ractive-transitions-fade': ['ractive']
    }
});

require([
    'jquery',
    'sockjs'],

function($, SockJS) {

    console.log(SockJS)

    var sock = new SockJS('http://localhost:9494');
    sock.onopen = function() {
        console.log('open');
        sock.send('test');
    };
    sock.onmessage = function(e) {
        console.log('message', e.data);
    };
    sock.onclose = function() {
        console.log('close');
    };

    // var socket = io('http://localhost:9494');
    // socket.on('connect', function(){
    //     console.log('connect!')
    // });
    // socket.on('event', function(data){
    //     console.log(data)
    // });
    // socket.on('disconnect', function(){
    //     console.log('discon!')
    // });

});