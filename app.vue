<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
:root{
    --orange: #FFA51F;
    --dark-orange: #b86f02;
    --pastel: #FFD79C;
    --dark: #404040;
    --light: #fff;
    --grey: #646464;
    --lightgrey: #eeeeee;
    --text-color: var(--dark);
}

html {
    scroll-behavior: smooth;
    height: 100%;
}

* {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    color: var(--text-color);
    list-style: none;
}

html, body, p, ul, h2 {
    margin: 0;
    padding: 0;
}

li::before {
    content: "#";
    color: var(--orange);
    position: absolute;
    width: 1em;
    font-weight: bold;
    margin-left: -1em;
}

body {
    position: relative;
    height: 100%;
}

main {
    max-width: 800px;
    margin: auto;
    padding: 100px 0;
}

/** media query for mobile */
@media screen and (max-width: 768px) {
    body {
        width: 100%;
        max-width: 100%;
    }
    main {
        width: 100%;
        max-width: 100%;
        padding: 175px 0 32px;
    }
    li::before {
        margin-left: -0.75em;
    }
}

.bg-orange {
    background-color: var(--orange);
}

.text-orange {
    color: var(--orange);
}

.hover-orange:hover {
    color: var(--orange);
    border-color: var(--orange);
}

.text-pastel {
    color: var(--pastel);
}

.text-light {
    color: var(--lightgrey)!important;
}
</style>