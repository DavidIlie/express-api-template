# Express API Template

I know that they are many Express API Templates throughout the world and I have tried some of them and I just always seem to need to customize its folder structure to be suitable for my needs. This is where my template comes in.

## What is included?

I have included the basic binaries that you would need in order to have a functional/secure API.

### API Server Utilities:

- [morgan](https://www.npmjs.com/package/morgan)
  - HTTP request logger middleware for node.js
- [helmet](https://www.npmjs.com/package/helmet)
  - Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
- [cors](https://www.npmjs.com/package/cors)
  - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

### Development utilities:

- [nodemon](https://www.npmjs.com/package/nodemon)
  - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## How to Setup

```
npm install
```

## Development

```
npm run dev
```

## The Folder Structure

The folder structure consists of two directories, `api` and `utils`. `api` is for all the routes that you can add to your API and `utils` is for everything that needs to go on in the background, like DB schemas, validators, etc.

```
- api
- node_modules
- utils
app.js
package-lock.json
package.json
README.md
```
