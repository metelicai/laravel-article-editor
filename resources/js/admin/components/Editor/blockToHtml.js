export default (blocks) => {
	let html = '';

	blocks.forEach(block => {
		if (handlers.hasOwnProperty(block.type)) {
			html += handlers[block.type](block);
		} else {
console.log(block);
		}
	});

	return html;
}

const handlers = {
	HeaderJS(block) {
		return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
	},
	paragraph(block) {
		return `<p>${block.data.text}</p>`
	},
	ListJS(block) {
		const list = block.data.items.reduce((prev, item) => prev + `<li>${item}</li>`, '');

		if (block.data.style == 'ordered') {
			return `<ol>${list}</ol>`;
		}

		return `<ul>${list}</ul>`;
	},
	TableJS(block) {
		const rows = block.data.content.reduce((prev, rowData, index) => {
			const row = rowData.reduce((prev, cell) => {
				if (block.data.withHeadings && index == 0) {
					return prev + `<th>${cell}</th>`;
				}

				return prev + `<td>${cell}</td>`;
			}, '');

			return prev + `<tr>${row}</tr>`
		}, '');

		return `<table><tbody>${rows}</tbody></table>`
	}
};
