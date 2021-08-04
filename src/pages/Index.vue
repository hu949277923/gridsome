<template>
  <Layout
    img="home-bg.jpg"
    title="Clean Blog"
    subheading="A Blog Theme by Start Bootstrap"

  >
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
               <template v-for="item in $page.posts.edges">
                <!-- Post preview-->
                <div class="post-preview" :key="item.node.id">
                  <g-link :to="'/post/'+item.node.id">
                   <h2 class="post-title">{{ item.node.title }}</h2>
                  </g-link>
                  <p class="post-meta">
                       
                        on {{ item.node.updated_at }}
                    </p>
                </div>
                <!-- Divider-->
                <hr class="my-4"  :key="item.node.id"/>
                
              </template>
                <!-- Pager-->
                <div class="d-flex justify-content-end mb-4">
                  <Pager :info="$page.posts.pageInfo"/>
                  <!-- <a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a> -->
                  
                </div>
            </div>
        </div>
    </div>
  </Layout>
</template>
<page-query>
query ($page: Int){
  posts: allStrapiPost(page: $page, perPage: 2) @paginate {
    pageInfo {
      totalPages
      currentPage
    },
    edges {
      node {
        id,
        title,
        updated_at
      }
    }
  }
}
</page-query> 
<script>
import { Pager } from 'gridsome'
export default {
  components: {
    Pager
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
