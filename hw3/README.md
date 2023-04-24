<div class="markdown prose w-full break-words dark:prose-invert light">
<h1>PhotoSpeak</h1>
<p>PhotoSpeak is a web application that allows users to upload pictures and select a language
to display the words recognized in the picture in the selected language.
Users can also listen to the recognized words in the selected language through the text-to-speech feature.</p>

<h2>How it works</h2>
<ol>
<li>Upload a picture</li>
<li>Select a language</li>
<li>Click on any word recognized in the picture to hear the text-to-speech output in the selected language.</li>
</ol>
<p>The application uses the following Google Cloud services and APIs to enable its functionalities:
</p>
<ul>
<li>Cloud Vision API for image recognition</li>
<li>Cloud Translation API for language translation</li>
<li>Cloud Text-to-Speech API for text-to-speech conversion</li>
<li>Cloud Functions for serverless compute</li>
<li>Cloud Storage for object storage</li><li>Cloud SQL for database management</li>
<li>Google Container Registry for storing Docker images</li>
<li>Cloud Run for container orchestration</li>
</ul>
<p>The backend of the application is deployed as a Docker image to Google Container Registry and Cloud Run, while
the frontend client is deployed with App Engine.</p>
<h2>Demo</h2>
<p>You can access a working demo of the application <a href="https://edik-317621.uc.r.appspot.com/" target="_new">here</a>.</p>

<h2>Getting Started</h2>
<p>To run the application locally, you will need to have the following software installed:</p>
<ul><li>Node.js</li>
<li>Docker</li><li>Google Cloud SDK</li>
</ul>
<h2> Authors </h2>
<ul>
<li>Bocicov Vitalie</li>
<li>Badelita Tiberiu</li>
<li>Soltan Eduard</li>
</ul>
</div>
