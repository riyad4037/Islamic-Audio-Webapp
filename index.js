var selectedFilephoto;
var audioUrl;
var imageUrl;
   function getfile()
   {
       var pic = document.getElementById("photo");

        // selected file is that file which user chosen by html form
       selectedFilephoto = pic.files[0];

        // make save button disabled for few seconds that has id='submit_link'
       document.getElementById('submit_link').setAttribute('disabled', 'true');
       myfunction(); // call below written function
   }
   function myfunction()
   {
       // select unique name for everytime when image uploaded
       // Date.now() is function that give current timestamp
       var name="123"+Date.now();

       // make ref to your firebase storage and select images folder
       var storageRef = firebase.storage().ref('/images/'+ name);

       // put file to firebase 
       var uploadTask = storageRef.put(selectedFilephoto);

       // all working for progress bar that in html
       // to indicate image uploading... report
       uploadTask.on('state_changed', function(snapshot){
         var progress = 
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           var photouploader = document.getElementById('photouploader');
           photouploader.value=progress;
           switch (snapshot.state) {
             case firebase.storage.TaskState.PAUSED:
               console.log('Upload is paused');
               break;
             case firebase.storage.TaskState.RUNNING:
               console.log('Upload is running');
               break;
           }
       }, function(error) {console.log(error);
       }, function() {

            // get the uploaded image url back
            uploadTask.snapshot.ref.getDownloadURL().then(
             function(downloadURL) {
                var test = downloadURL;
        document.getElementById('iimage').src = test;
        document.getElementById('imageUrL').value = test;
            // You get your url from here
             console.log('File available at', downloadURL);

           // print the image url 
            console.log(downloadURL);
           document.getElementById('submit_link').removeAttribute('disabled');
         });
       });
   };
   var selectedaudioFile;
   function getaudiofile()
   {
       var au = document.getElementById("audio");

        // selected file is that file which user chosen by html form
       selectedaudioFile = au.files[0];

        // make save button disabled for few seconds that has id='submit_link'
       document.getElementById('submit_audio_link').setAttribute('disabled', 'true');
       myaudiofunction(); // call below written function
   }
   function myaudiofunction()
   {
       // select unique name for everytime when image uploaded
       // Date.now() is function that give current timestamp
       var name="123"+Date.now();

       // make ref to your firebase storage and select images folder
       var storageRef = firebase.storage().ref('/audio/'+ name);

       // put file to firebase 
       var uploadTask = storageRef.put(selectedaudioFile);

       // all working for progress bar that in html
       // to indicate image uploading... report
       uploadTask.on('state_changed', function(snapshot){
         var progress = 
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
           var uploader = document.getElementById('audiouploader');
           uploader.value=progress;
           switch (snapshot.state) {
             case firebase.storage.TaskState.PAUSED:
               console.log('Upload is paused');
               break;
             case firebase.storage.TaskState.RUNNING:
               console.log('Upload is running');
               break;
           }
       }, function(error) {console.log(error);
       }, function() {

            // get the uploaded image url back
            uploadTask.snapshot.ref.getDownloadURL().then(
             function(downloadURL) {
                var testaudio = downloadURL;
                audioUrl = downloadURL;
        document.getElementById('waj').src = testaudio;
        document.getElementById('audioUrL').value = testaudio;


            // You get your url from here
             console.log('File available at', downloadURL);

           // print the image url 
            console.log(downloadURL);
           document.getElementById('submit_audio_link').removeAttribute('disabled');
         });
       });
   };