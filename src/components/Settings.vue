<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["next"],
  setup(props, { emit }) {
    const onClick = () => {
      emit("next");
    };

    return {
      onClick,
    };
  },
});
</script>

<template>
  <div>
    <div
      class="d-flex justify-content-between align-items-center p-2 text-white bg-dark bg-opacity-50 shadow-sm"
    >
      <div class="d-flex align-items-center">
        <img
          class="me-3"
          src="https://jonathanquispe.developer.processmaker.net/img/processmaker_icon.png?id=8122489cabc54a228d6b8e8efb72dece"
          alt=""
          width="30"
          height="30"
        />
        <div class="lh-1">
          <h1 class="h6 mb-0 text-white lh-1">ProcessMaker</h1>
        </div>
      </div>

      <div class="d-flex align-items-center">
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="/" aria-label="Home">
            <i class="bi bi-house-door-fill"></i>
          </a>
          <a href="/" aria-label="Home">
            <i class="bi bi-house-door-fill"></i>
          </a>
        </div>
      </div>
    </div>

    <div>
      <div class="form-signin p-5">
        <img
          class="mb-4"
          src="https://jonathanquispe.developer.processmaker.net/img/processmaker_icon.png?id=8122489cabc54a228d6b8e8efb72dece"
          alt=""
          width="40"
          height="40"
        />
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
        
          autofocus=""
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
  
        />
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" />
            Remember me
          </label>
        </div>
        <button 
             @click="onClick()"
            class="btn btn-lg btn-primary btn-block">
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
      </div>
    </div>
  </div>
</template>

<style></style>
