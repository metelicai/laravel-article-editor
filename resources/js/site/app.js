// static js
import initHeaderJs from './static-js/header'
import initGalleriesJs from './static-js/galleries'
import initSlidersJs from './static-js/sliders'
import initValidateTelJs from './static-js/validate-tel'
import initRangeJs from './static-js/range'
import initYaMetrikaGoalsJs from './services/y.metrika/y.metrika-goals'

// vue mixins
import modalsMixin from './mixins/modals.js'

// vue components
import VModal from './components/VModal'
import VRecall from './components/VRecall'
import VTabs from './components/tabs/VTabs'
import VTabsTab from './components/tabs/VTabsTab'
import Editorjs from './components/Editorjs.vue'
import QuillEditor from './components/QuillEditor.vue'
import SunEditor from './components/SunEditor.vue'
import Editor from './components/editor/Editor.vue'
import pdfviewer from './components/PDFViewer.vue'

// vue init
import { createApp } from 'vue'
const RootComponent = setup()
const app = createApp(RootComponent)
app.mount('#app')

function setup() {
	return {
		name: 'Site',
		mixins: [
			modalsMixin,
		],
		components: {
			VModal,
			VRecall,
			VTabs,
			VTabsTab,
			Editorjs,
			QuillEditor,
			SunEditor,
			Editor,
			pdfviewer,
		},
		mounted() {
			// load static js
			initHeaderJs()
			initGalleriesJs()
			initSlidersJs()
			initValidateTelJs()
			initRangeJs()
			initYaMetrikaGoalsJs()
		},
	}
}
