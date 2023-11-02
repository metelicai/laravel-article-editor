import InsertFootnoteButtonMenu from './InsertFootnote'
import EditFootnoteButtonMenu from './EditFootnote'

const insertFootnoteMenuConf = {
	key: 'insertFootnote',
	factory() {
		return new InsertFootnoteButtonMenu()
	},
}

const editFootnoteMenuConf = {
	key: 'editFootnote',
	factory() {
		return new EditFootnoteButtonMenu()
	},
}

export { insertFootnoteMenuConf, editFootnoteMenuConf }
