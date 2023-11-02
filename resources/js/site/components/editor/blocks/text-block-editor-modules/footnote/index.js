import withFootnote from './plugin'
import renderElemConf from './render-elem'
import elemToHtmlConf from './elem-to-html'
import parseHtmlConf from './parse-elem-html'
import {
	insertFootnoteMenuConf,
	editFootnoteMenuConf,
} from './menu/index'

const module = {
	editorPlugin: withFootnote,
	renderElems: [renderElemConf],
	elemsToHtml: [elemToHtmlConf],
	parseElemsHtml: [parseHtmlConf],
	menus: [insertFootnoteMenuConf, editFootnoteMenuConf],
}

export default module
