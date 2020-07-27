<script>
    import { auth, googleProvider } from '../firebase';
    import { authState } from 'rxfire/auth';
    import firebase from 'firebase/app';
    import { goto } from '@sveltech/routify';
    export let user;

    authState(auth).subscribe(u => user = u);
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>




<button class="button is-primary is-large is-mobile is-rounded is-large" on:click={login}>
    Sign in with Google
</button>



