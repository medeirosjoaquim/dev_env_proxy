# Dev proxy for local development


# This allows you to use a domain as your dev URL instead of just localhost.

## What you'll need:

- To redirect a domain to your local-only interface (127.0.0.1). We can do it by editing your hosts file on any system or adding an "A + Dynamic DNS Record" to your domain DNS. In each case you'll have something like "dev.mydomain.com" that redirects to 127.0.0.1.

- In order to use HTTPS/port 443 We need: 
A self signed certificate, I used mkcert: https://github.com/FiloSottile/mkcert#installation

Follow the instructions (the mkcert install to register it in the system) and then generate a cert for your project.

e.g:

```
mkcert -install
mkcert dev.mysite.com
```

Copy the files to dev-proxy "certs" folder and edit proxy.js to match the filenames.

After this. Install the packages on both repositories with npm install.

Run the proxy with ```npm run serve```

Run the demo CRA project with ```npm run start```

And now you should be able to see the react application on ```dev.mysite.com```

