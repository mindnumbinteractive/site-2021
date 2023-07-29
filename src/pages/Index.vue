<template>
  <Layout>
    <div class="flex flex-col justify-center items-center h-full">
      <g-image alt="Mindnumb" src="~/assets/logo.svg" width="520" />

      <h1
        class="md:text-4xl text-3xl my-8 font-extralight uppercase text-red-600"
      >
        Site Coming Soon...
      </h1>

      <div class="py-4 flex items-center justify-center">
        <a
          v-for="s in socials"
          :key="s.label"
          :href="s.url"
          :title="s.label"
          class="text-red-600 hover:text-red-800 px-6 flex flex-col items-center justify-center"
          target="_blank"
        >
          <font-awesome-icon
            :icon="['fab', s.icon]"
            size="3x"
          ></font-awesome-icon>
          <span class="text-xs uppercase py-2">{{ s.label }}</span>
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Coming Soon",
  },

  data() {
    return {
      socials: [
        { label: "Itch.io", icon: "itch-io", url: "https://mindnumb.itch.io" },
        {
          label: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/MindnumbInt",
        },
        {
          label: "TikTok",
          icon: "tiktok",
          url: "https://tiktok.com/@mindnumb_int",
        },
      ],
    };
  },
};
</script>
