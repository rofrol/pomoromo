# pomoromo

## run

```
npm i
node server.js
```

Open https://localhost:3000

## timer countdown

- google: javascript simple timer countdown
  - https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript/20618517#20618517

## notification

Needs https https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API

- https://stackoverflow.com/questions/2271156/chrome-desktop-notification-example

## notification on mobile chrome

- https://stackoverflow.com/questions/33859969/calling-javascript-notification-api-on-google-chrome-for-android-not-working-dir/34132295#34132295
- https://stackoverflow.com/questions/31512504/html5-notification-not-working-in-mobile-chrome

## https server

Generate key and certificate.

I have run this in Ubuntu WSL:

```bash
openssl req -x509 -out localhost.crt -keyout localhost.key \
  -newkey rsa:2048 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
```

and copied crt and key files to Windows partition.

Then I have imported pem into Google Chrome Trusted Root Certifications Authorities. Need Chrome restart.

- https://letsencrypt.org/docs/certificates-for-localhost/
- https://stackoverflow.com/questions/38728176/can-you-use-a-service-worker-with-a-self-signed-certificate/59523186#59523186
  https://stackoverflow.com/questions/11744975/enabling-https-on-express-js/52007971#52007971
- become your own CA https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate/60516812#60516812

You can also enable this Chrome flag to bypass this certificate checking:

1. Open in Chrome `chrome://flags/#allow-insecure-localhost`
2. Enable.
3. Restart.

- https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate/31900210#31900210
- https://stackoverflow.com/questions/34160509/options-for-testing-service-workers-via-http/34161385#34161385
- https://www.chromium.org/blink/serviceworker/service-worker-faq

## express and static files

https://expressjs.com/en/starter/static-files.html
