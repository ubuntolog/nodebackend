JSBUNDLE = app/bundle.js

webui: $(JSBUNDLE)

webui-production:
	(node_modules/webpack/bin/webpack.js --mode production -p)

run_webui_dev_server:
	(node_modules/webpack-dev-server/bin/webpack-dev-server.js --mode development -d --hot --https)

dependencies:
	npm install