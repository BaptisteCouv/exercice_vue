/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";
import { VTreeview } from 'vuetify/labs/VTreeview'

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

import hljs from 'highlight.js';
import CodeEditor from 'simple-code-editor';

const app = createApp(App);
registerPlugins(app);

// Enregistrement global du composant
app.component('CodeEditor', CodeEditor);
app.component('VTreeview', VTreeview);

app.mount("#app");
