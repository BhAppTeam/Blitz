<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "../.routify/routes";
</script>

<style  global>
  @import "../static/global.css";
  @import 'bulma/css/bulma.css';
</style>

<Router {routes} />