"Cat or Not?" Website using the Django backend and React frontend.

The frontend is a list of either Cats or Not Cats (tab navigation). You can upload your own Cats or Not Cats and assign them a name, description, and image.

The backend keeps track of cats (and not cats). It also accepts file uploads of images of cats (and not cats), then resizes and crops the images into squares.

Backend uses pipenv. To run, starting from the root directory:
1. Start pipenv with `pipenv shell`
2. Navigate to the backend directory with `cd backend`
3. Start the server with `python manage.py runserver`. The backend will run at "http://localhost:8000"

To start the frontend:
1. Open a new terminal
2. Navigate to the frontend directory
3. Run `npm start`. The frontend will start at "http://localhost:3000"

### TODO

* Assign file name to Uploaded files (use item ID or something)
* Resize and square the images in the backend
* If no cat image, then send a default image