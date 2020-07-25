<script>
    let isOpen = false;
    function toggleNav(){
        isOpen = !isOpen;
    }
</script>

<style>
</style>

<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a href="/" class="navbar-item">Logo</a>
        <span class="navbar-burger"
        class:is-active={isOpen}
        on:click={toggleNav}
        aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>

        </span>
    </div>

    <div class="navbar-menu" class:is-active={isOpen}>
        <div class="navbar-start">
            <a href="something1" class="navbar-item">Page1</a>
            <a href="something2" class="navbar-item">Page2</a>
        </div>

        <div class="navbar-end">
            <a href="/login" class="navbar-item"><button class="button is-success is-outlined">Login</button></a>
            <a href="/logout" class="navbar-item"><button class="button is-danger is-outlined">Logout</button></a>
        </div>
    </div>

</nav>