# Makefile

dev_run:
	python manage.py runserver

dev_react:
	npm run dev --prefix frontend

dev_macros:
	npm run dev_macros --prefix frontend
