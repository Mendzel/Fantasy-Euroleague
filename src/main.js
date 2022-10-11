import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import PrimeVue from 'primevue/config';
import { createPinia } from "pinia"
import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Dock from 'primevue/dock';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';  
import TabMenu from 'primevue/tabmenu';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Editor from 'primevue/editor';
import AutoComplete from 'primevue/autocomplete';
import Divider from 'primevue/divider';
import ColorPicker from 'primevue/colorpicker';

const pinia = createPinia()
const app = createApp(App);

app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Carousel', Carousel);
app.component('Accordion', Accordion);
app.component('AccordionTab', AccordionTab);
app.component('Menubar', Menubar);
app.component('Card', Card);
app.component('Dock', Dock);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('TabMenu', TabMenu);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Editor', Editor);
app.component('AutoComplete', AutoComplete);
app.component('Divider', Divider);
app.component('ColorPicker', ColorPicker);

app.use(pinia).use(router).use(PrimeVue).mount("#app");
