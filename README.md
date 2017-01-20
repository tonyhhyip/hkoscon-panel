# HKOSCon Admin Panel

Requirement:
- Nodejs
- Nginx
- Redis

Setup (all in one server):

1. Install all required software
2. Run `npm install -g pm2` to install pm2
3. run `yarn install` to install all package
4. run `yarn build` to build all the static file
5. move all the file in public to assigned nginx host directory
6. copy `nginx.conf` to the nginx configuration directory
7. start nginx
8. start the local version with `pm2 start process.yml -i --env=production --only hkoscon-backend`