// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { library } from "@fortawesome/fontawesome-svg-core";
import { faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faItchIo, faTwitter, faTiktok);

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
}
