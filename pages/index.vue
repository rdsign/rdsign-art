<template>
  <main>
    <MainHeader />
    <section id="collection">
      <h1>Welcome to Metafolks!</h1>
      <p v-html="content.welcome" />
    </section>
    <section id="roadmap">
      <h1>Roadmap</h1>
      <p
        v-for="(roadmap, index) in content.roadmap"
        :key="index"
        class="roadmap"
        v-html="roadmap"
      />
    </section>
    <section id="whitelist">
      <h1>Whitelist</h1>
      <p v-html="content.whitelist" />
      <div class="actions">
        <a class="linkbutton" :href="content.twitter">Metafolks twitter</a>
        <a class="linkbutton" :href="content.discord">Metafolks discord</a>
      </div>
    </section>
  </main>
</template>

<script>
import { content } from '@/contents/content'
export default {
  data() {
    return {
      content,
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  background: white;
  box-shadow: 0 -5rem 20rem rgba(black, 0.66);
  margin: 0 auto;
  max-width: 60%;
  padding: 8rem 10vw;

  section {
    padding: 6rem 0;

    h1 {
      color: $c-purple;
      font-size: 4.2rem;
      font-weight: bold;
      margin-bottom: 4rem;
    }

    p {
      color: $c-gray;
      font-size: 2rem;
      line-height: 1.66em;
      text-align: justify;
    }

    .actions {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 15rem;
      margin-top: 5rem;

      .linkbutton {
        background: $c-blue;
        color: white;
        font-size: 2.4rem;
        padding: 2rem 0;
        text-align: center;
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        width: 47.5%;

        &:hover {
          background: $c-purple;
        }
      }
    }
  }
}

@media all and (min-width: $screen-small-devices) and (max-width: #{$screen-medium-devices - 1px}) {
  main {
    box-shadow: none;
    max-width: 80%;
    padding: 5rem 10vw;

    section {
      padding: 4rem 0;

      h1 {
        font-size: 3.2rem;
        text-align: center;
      }

      p {
        font-size: 1.6rem;
      }

      .roadmap {
        margin-bottom: 2rem;
      }

      .actions {
        flex-direction: column;
        margin-bottom: 4rem;
        margin-top: 3rem;

        .linkbutton {
          margin-bottom: 2rem;
          width: 100%;
        }
      }
    }
  }
}
</style>
