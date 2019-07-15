# Deployment-with-NOW

## The Task:
> still now sure what serverless is? https://zeit.co/tv

Read the getting started guid form now:
https://zeit.co/docs/v2/getting-started/introduction-to-now/

Read until cloud deployments.

## Deploy your first Projects

### 1. React

Choose one of your `react` applications and deploy it with now.
Look at this guid: https://zeit.co/examples/create-react-app/

### 2. Express

Follow the [express guide](https://zeit.co/examples/express/)

### 3. Deploy ColorConvert API

Try to bring your learning back to our colorConvert api and deploy it with now.

#### Everyone needs to have a deployed color conversion api

- MVP:
  - convert hex to rgb
  - convert rgb to hex
  - usage info documentation
  - return a `400` when no color parameter is defined
- Use now

```json
{
  "version": 2,
  "name": "bookmark-api",
  "builds": [
    {
      "src": "app.js",
      "use": "@now/node"
    }
  ],
  "routes": [{ "src": "/(.*)", "dest": "/app.js" }]
}
```

The files I started out with were all tekaen from the previous excersize about creating a middleware
This was my original README:
# Implementing-Middlewares
creating a logger middleware

## Implementing Middlewares

1. Create a logger middleware that logs on every request the following values
    - Request Method (HTTP verb e.g. GET)
    - the route that is requested

## Steps I took
creating repo on github
cloning repo to local machine
npm int to create a package.json
npm install express --save to install express as a dev-dependency of my project
create .gitignore which avoids node_modules being uploaded to github by entering
" echo "node_modules">.gitignore" in terminal
install nodemon as a development dependency:

npm install --save-dev nodemon

nodemon will start node again after every change made to the file watched and thus everything will be restarted and the localhost-browser-window will update
from here on changes will automatically be visible in the localhost window

created a script in my package.json to start  my server using nodemon, watching my file (in my case, named "index.js")

"dev": "nodemon index.js"

task 1.2 :
Install "color-convert"
(npm install color-convert)


