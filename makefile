.phony: compile everything and prepare for github page deployment
compile:
	@echo "Compiling the project..."
	npm run build
	cp -r dist/* ~/hibiki-shibata.github.io/docs/
	git add .