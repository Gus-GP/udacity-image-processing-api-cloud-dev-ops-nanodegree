# Full Stack Apps on AWS Project

You have been hired as a software engineer to develop an application that will help the FBI find missing people.  The application will upload images to the FBI cloud database hosted in AWS. This will allow the FBI to run facial recognition software on the images to detect a match. You will be developing a NodeJS server and deploying it on AWS Elastic Beanstalk. 
You will build upon the application we've developed during the lessons in this course. You'll complete a REST API endpoint in a backend service that processes incoming image URLs.

## Getting Started

You can clone this repo to run the project locally, or navigate to the workspace in the Udacity course.

## Project Instructions

To complete this project, you will need to:

* Set up node environment
* Create a new endpoint in the server.js file
* Deploying your system

## Testing

Successful URL responses should have a 200 code. Ensure that you include error codes for the scenario that someone uploads something other than an image and for other common errors.

Example requests:

- {HOST}:{PORT}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg
- {HOST}:{PORT}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/5/5c/L-alanine-3D-balls.png
- {HOST}:{PORT}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/3/32/Cingulata2.jpg
- {HOST}:{PORT}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/en/d/dc/Dark_Matter_TV_series_logo.jpg

## Link to AWS EB Endpoint URL

- http://udacity-image-processing-api-cloud-dev-0.us-east-1.elasticbeanstalk.com/

## License

[License](LICENSE.txt)
