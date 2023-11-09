<script>
  import { login } from "../auth.mjs";
  import { formDataToJSON } from "../utils.mjs";
  export let redirect;

  function submitForm() {
    const JSONform = formDataToJSON(documment.querySelector(".form"));
    login(JSONform, redirect);
  }
</script>

<form action="#" method="get" class="form">
  <label for="username">E-mail:</label>
  <input type="email" name="username" id="username" required />

  <label for="password">Password:</label>
  <input type="password" name="password" id="password" required />

  <button type="submit" on:click|preventDefault={submitForm}>Submit</button>
</form>

<style>
</style>
