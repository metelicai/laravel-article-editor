/**
 * @description render header
 * @author wangfupeng
 */

import { h } from 'snabbdom'

function genRenderElem(level) {
	/**
	 * render header elem
	 * @param elemNode slate elem
	 * @param children children
	 * @param editor editor
	 * @returns vnode
	 */
	function renderHeader(elemNode, children, editor) {
		const tag = `h${level}`
		const headerNode = h(
			tag,
			{},
			children,
		)
		return headerNode
	}

	return renderHeader
}

const renderHeader1Conf = {
	type: 'myHeader1',
	renderElem: genRenderElem(1),
}
const renderHeader2Conf = {
	type: 'myHeader2',
	renderElem: genRenderElem(2),
}
const renderHeader3Conf = {
	type: 'myHeader3',
	renderElem: genRenderElem(3),
}
const renderHeader4Conf = {
	type: 'myHeader4',
	renderElem: genRenderElem(4),
}
const renderHeader5Conf = {
	type: 'myHeader5',
	renderElem: genRenderElem(5),
}

export {
	renderHeader1Conf,
	renderHeader2Conf,
	renderHeader3Conf,
	renderHeader4Conf,
	renderHeader5Conf,
}
