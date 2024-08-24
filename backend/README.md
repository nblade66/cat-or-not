Backend of the "Cat or Not?" Website using the Django framework.

This backend keeps track of cats (and not cats). It also accepts file uploads of images of cats (and not cats), then resizes and crops the images into squares.

Uses pipenv. To run, starting from the root directory:
1. Start pipenv with `pipenv shell`
2. Navigate to the backend directory with `cd backend`
2. Start the server with `python manage.py runserver`

### TODO

* Assign file name to Uploaded files (use item ID or something)
* Resize and square the images in the backend
* If no cat image, then send a default image