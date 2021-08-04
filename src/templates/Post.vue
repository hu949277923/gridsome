<template>
  <Layout
    img="post-bg.jpg"
    title="Man must explore, and this is exploration at its greatest"
    subheading="Problems look mighty small from 150 miles up"
  >
    <span class="meta" slot="meta">
        {{ $page.post.title }}
        <!-- <a href="#!">Start Bootstrap</a> -->
        on {{ $page.post.updated_at }}
    </span>
    <!-- Post Content-->
    <article class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7" v-html="$page.post.content">
                   
                </div>
            </div>
        </div>
    </article>
  </Layout>
</template>
<page-query>
query ($id:ID!){
  post: strapiPost(id: $id) {
    title,
    content,
    updated_at
  }
}
</page-query>
<script>
export default {

}
</script>

<style>

</style>