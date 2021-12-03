<template>
  <header>
    <img class="logo" src="logo.svg" alt="logo" />
    <nav>
      <a href="#colletcion">Collection</a>
      <a href="#roadmap">Roadmap</a>
      <a href="#whitelist">Whitelist</a>
      <a class="iconlink" href="#"><img src="twitter.svg" alt="twitter" /></a>
      <a class="iconlink" href="#"><img src="discord.svg" alt="discord" /></a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;

  .logo {
    height: 5rem;
    width: auto;
  }

  nav {
    align-items: center;
    display: flex;
    gap: 0 6rem;
    justify-content: center;
    margin: 5rem 0;
    width: 100%;

    a {
      color: $c-gray;
      font-size: 1.8rem;
      font-weight: 500;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
        background: $c-blue;
        color: white;
      }
    }

    .iconlink {
      &:hover {
        background: transparent;
        transform: scale(1.2);
      }
    }
  }
}

@media all and (min-width: $screen-small-devices) and (max-width: #{$screen-medium-devices - 1px}) {
  header {
    .logo {
      height: 4rem;
      width: auto;
    }

    nav {
      align-items: center;
      display: flex;
      gap: 2rem;
      justify-content: center;
      flex-wrap: wrap;
      margin: 5rem 0 2rem;
      width: 100%;

      a {
        color: $c-gray;
        font-size: 1.4rem;
        font-weight: 500;
      }

      .iconlink {
        &:hover {
          transform: none;
        }
      }
    }
  }
}
</style>
