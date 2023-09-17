/**
 * @description lead entry
 */

import { renderLeadConf } from './render-elem'
import { leadToHtmlConf } from './elem-to-html'
import { parseLeadHtmlConf } from './parse-elem-html'
import withLead from './plugin'
import { leadMenuConf } from './menu/index'

const lead = {
	renderElems: [renderLeadConf],
	elemsToHtml: [leadToHtmlConf],
	parseElemsHtml: [parseLeadHtmlConf],
	menus: [leadMenuConf],
	editorPlugin: withLead,
}

export default lead
