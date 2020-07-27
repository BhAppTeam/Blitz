<script>
    export let name;
    export let photoSrc;

</script>


<style>
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>


<section class="section">
<div class="container">
    <div class="box">
        <h2 class="subtitle has-text-centered">{ name }</h2>
        <img class="center" src={ photoSrc } width="100" alt="user avatar">
        
    </div>
</div>
</section>