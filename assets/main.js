require.config({
    paths: {
        'jquery':    'lib/jquery/dist/jquery.min',
        'ractive':   'lib/ractive/ractive.min',
        'moment':    'lib/moment/min/moment.min',
        'sockjs':    'lib/sockjs-client/dist/sockjs.min',

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

    sock = new SockJS('http://192.168.0.254/api');
    sock.onopen = function() {
        console.log('open');
        sock.send('{}');
    };
    sock.onmessage = function(e) {
        console.log('message', e.data);
    };
    sock.onclose = function() {
        console.log('close');
    };
    
});