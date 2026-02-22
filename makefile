.phony: compile everything and prepare for github page deployment
compile:
	@echo "Compiling the project..."
	npm run build
	cp -r dist/* ~/hibiki-shibata.github.io/docs/
	git add .

everything: compile
	cp ~/hibiki-shibata.github.io/dist/assets/*.js ~/hibiki-shibata.github.io/docs/assets/*.js
	cp ~/hibiki-shibata.github.io/dist/assets/*.css ~/hibiki-shibata.github.io/docs/assets/*.css
	cp ~/hibiki-shibata.github.io/dist/index.html ~/hibiki-shibata.github.io/docs/index.html