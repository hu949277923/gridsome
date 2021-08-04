// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Add an external CSS file
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800c'
  })
  head.link.push({
    rel: 'stylesheet',
    href: '/css/styles.css'
  })
  // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: 'https://use.fontawesome.com/releases/v5.15.3/js/all.js',
    body: true
  })
  // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js',
    body: true
  })
  // Add an external JavaScript before the closing </body> tag
  head.script.push({
    src: '/js/scripts.js',
    body: true
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
