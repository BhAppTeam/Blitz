<script>
    import { db } from '../firebase.js';
    import { auth, googleProvider } from '../firebase.js';
    import { authState } from 'rxfire/auth';
    let user;    
    let title;
    authState(auth).subscribe(u => user = u);

    const generateCode = () => {
        var code = (Math.floor(Math.random() * 100000) + 1).toString();
        var docRef = db.collection("events").doc(code);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                generateCode();
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        return code;
    }

    const createEvent = async () => {
        let eventCode = generateCode();
        await db.collection('events').doc(eventCode).set({
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
<h2 class="subtitle is-3 is-centered"> Create your event.</h2>

<div class="control">
    <input class="input" type="text" bind:value={title} placeholder="Event Title" required>
</div>

<div class="control">
    <button class="button is-primary" on:click={createEvent}>Submit</button>
</div>
