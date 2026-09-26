.phony: compile everything and prepare for github page deployment

help:
	@echo "Available command args:"
	@echo "compile - build and commit. you can just push and make PR for deployment"

compile:
	@echo "Compiling the project..."
	pnpm run build
# 	cp -r dist/* ~/hibiki-shibata.github.io/docs/
	git add .
	git commit -m "Compiled & Ready to Deploy"