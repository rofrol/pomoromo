# pomoromo

## run

`./start.sh`

## timer countdown

- google: javascript simple timer countdown
  - https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript/20618517#20618517

## notification

Needs https https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API

On android needs also service workers https://stackoverflow.com/questions/33859969/calling-javascript-notification-api-on-google-chrome-for-android-not-working-dir/34132295#34132295

- https://stackoverflow.com/questions/2271156/chrome-desktop-notification-example

## https server

Generate key and certificate:

`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt`

https://stackoverflow.com/questions/11744975/enabling-https-on-express-js/52007971#52007971
