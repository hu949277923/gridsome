<template>
  <Layout
    img="contact-bg.jpg"
    title="Contact Me"
    subheading="Have questions? I have answers."

  >
    <!-- Main Content-->
    <main class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                    <div class="my-5">
                        <form>
                            <div class="form-floating">
                                <input class="form-control" id="inputName" type="text" placeholder="Enter your name..." />
                                <label for="inputName">Name</label>
                            </div>
                            <div class="form-floating">
                                <input class="form-control" id="inputEmail" type="email" placeholder="Enter your email..." />
                                <label for="inputEmail">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number..." />
                                <label for="inputPhone">Phone Number</label>
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" id="inputMessage" placeholder="Enter your message here..." style="height: 12rem"></textarea>
                                <label for="inputMessage">Message</label>
                            </div>
                            <br />
                            <button class="btn btn-primary text-uppercase" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </Layout>
</template>

<script>
export default {

}
</script>

<style>

</style>