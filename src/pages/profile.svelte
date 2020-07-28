<script>
    import { auth, googleProvider } from '../firebase';
    import { authState } from 'rxfire/auth';
    import { goto } from '@sveltech/routify';
    import Login from '../components/Login.svelte';
    import Profile from '../components/Profile.svelte';
    import Logout from '../components/Logout.svelte';


    let user;

    authState(auth).subscribe(u => user = u);

</script>


{#if user}
    <section class="section">
        <Profile name={ user.displayName } photoSrc={ user.photoURL }/>
    </section>
    <div class="columns is-centered">
        <div class="column has-text-centered">
            <Logout />
        </div>
    </div>
{:else}
    <!-- redirect to main login page if user is not logged in -->
    <section class="section">

    <h2 class="subtitle has-text-centered">You're not logged in.</h2>
    <div class="columns is-centered mt-1">
        <div class="column has-text-centered">
            <Login/>
        </div>
    </div>

    </section>
{/if}


