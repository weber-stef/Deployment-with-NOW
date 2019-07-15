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
