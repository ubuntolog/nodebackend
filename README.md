# Simple Node-Based Backend
A basic backend implemented with Node and Express

## Running
Download all dependencies
```
make dependencies
```

Start a server that serves static content
```
make run
```
Open a browser:
```
http://localhost:5000
```

## Development
Development mode for the backend requires `nodemon`:
```
npm install -g nodemon
```

Run it from the root of the project:
```
nodemon
```

Development server for React frontend
```
make run_webui_dev_server
```
