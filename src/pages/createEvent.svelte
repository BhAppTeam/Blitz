<script>
    import { db } from '../firebase.js';
    import { auth, googleProvider } from '../firebase.js';
    import { authState } from 'rxfire/auth';
    let user;    

    authState(auth).subscribe(u => user = u);

    const createEvent = () => {

        var title = "formValue";

        db.collection('events').doc('1234').set({
            creator: user.uid,
            title: title,
        }).then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

</script>

<h2 class="subtitle is-1"> Create an event.</h2>
<form name="eventForm" id="eventForm">

  <label for="title">Title:</label><br>
  <input type="text" id="title" name="title"><br>
  <input type="submit" name="Submit" on:click={createEvent}>

</form>

