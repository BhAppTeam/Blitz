<script>
    import { auth } from '../firebase';
</script>


<button class="button is-danger is-rounded" on:click={ () => auth.signOut() }>Logout</button>
