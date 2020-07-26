<script>
    import { auth, googleProvider } from '../firebase';
    import { authState } from 'rxfire/auth';
    import { goto } from '@sveltech/routify';

    let user;

    authState(auth).subscribe(u => user = u);

</script>

<section>
{#if user}
    <h3>Hi { user.displayName }!</h3>
    <img src={ user.photoURL } width="100" alt="user avatar">
    <p>Your userID is { user.uid }</p>
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
{:else}
    <!-- redirect to main login page -->
    {$goto("../index")}
{/if}
</section>

