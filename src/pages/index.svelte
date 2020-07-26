<script>
    import { auth, googleProvider } from '../firebase';
    import { authState } from 'rxfire/auth';
    import { goto } from '@sveltech/routify';
    let user;

    authState(auth).subscribe(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>

<button on:click={login}>
		Signin with Google
</button>

<section>
{#if user}
    <!-- redirect to code-page -->
    {$goto("../profile")}
{/if}
</section>