<script>
    import { db } from '../../firebase.js';
    import { auth, googleProvider } from '../../firebase.js';
    import { authState } from 'rxfire/auth';
    import firebase from 'firebase/app';
    import { onMount } from 'svelte';

    let title;
    let events = [];
    //authState(auth).subscribe(u => user = u);
    firebase.auth().onAuthStateChanged(function(user){
        if (user){
            events = getEvents(user);
        }
        else{
            // no user... redirect to login page?
        }
    });

    const getEvents = async (user) => {
        return db.collection("events").where("creator", "==", user.uid).get().then(function(querySnapshot) {
            let eventList = [];
            for (var doc of querySnapshot.docs){
                eventList.push({ id: doc.id, title: doc.get("title") });
                //add all event-id and event-titles to events-array
            }
            return eventList;
            })
            
    }
</script>

<h2 class="subtitle is-5 center">Your Events</h2>

<ul>
{#await events}
    <p>Loading..</p>
{:then list}
<div class="container">
    {#each list as event}
        <div class="box">
            <li> <a href="./{event.id}"> {event.title} </a></li>
        </div>
    {/each}
</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
</ul>






