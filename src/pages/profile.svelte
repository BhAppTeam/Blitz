impor
<script>
    import Nav from '../components/Nav.svelte';
    import { auth, googleProvider } from '../firebase';
    import { authState } from 'rxfire/auth';

    let user;

    authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

<section>
{#if user}
    <h3>Hi { user.displayName }!</h3>
    <img src={ user.photoURL } width="100" alt="user avatar">
    <p>Your userID is { user.uid }</p>
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
{:else}
	<button on:click={login}>
		Signin with Google
	</button>
{/if}
</section>
