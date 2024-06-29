import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles, isValidUrl } from './util/util.js';

// Init the Express application
const app = express();

// Set the network port
const port = process.env.PORT || 8082;

// Use the body parser middleware for post requests
app.use(bodyParser.json());

// @TODO1 IMPLEMENT A RESTFUL ENDPOINT
// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// IT SHOULD
//    1. validate the image_url query
//    2. call filterImageFromURL(image_url) to filter the image
//    3. send the resulting file in the response
//    4. deletes any files on the server on finish of the response
// QUERY PARAMATERS
//    image_url: URL of a publicly accessible image
// RETURNS
//   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

/**************************************************************************** */
//! END @TODO1
// Get tweet by id
app.get("/filteredimage", async (req, res) => {
  let { image_url } = req.query;

  console.log(image_url)

  if (!image_url) {
    res.status(400).send("Hello! please provide and define the image_url field :) example: /filteredimage?image_url=https://yada/yada/files/cool.png");
    return;
  }

  if (!isValidUrl(image_url)) {
    res.status(400).send("Hello! looks like something is off with your image URL, could you double check and try again? Thanks :)");
    return;
  }

  let out_image_file = null

  await filterImageFromURL(image_url).then((out_file_path) => {
    out_image_file = out_file_path
    console.log("The image file %s was processed locally: %s", image_url, out_file_path);
  }).catch(() => {
    res.status(422).send("Hello! Something went wrong processing your file! Are you sure is an image (.png,.jpeg)? ;)")
    return;
  });

  if(out_image_file){

    res.status(200).sendFile(out_image_file, async () => {

      console.log("Filtered Image File sent as a response");
  
      await deleteLocalFiles([out_image_file]).then(() => {
        console.log("The local image file %s was deleted", out_image_file);
      }).catch(() => {
        res.status(500).send("Hello! Something went wrong deleting your image! Have a nice day!")
        return;
      });;
  
    }).catch(() => {
      res.status(500).send("Hello! Something went wrong sending your file! Please try again ;)")
      return;
    });

  }

});

// Root Endpoint
// Displays a simple message to the user
app.get("/", async (req, res) => {
  res.send("try GET /filteredimage?image_url={{}}")
});


// Start the Server
app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
  console.log(`press CTRL+C to stop server`);
});
