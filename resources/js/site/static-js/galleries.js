import baguetteBox from 'baguettebox.js'

export default function initGalleriesJs() {
	const htmlTag = document.documentElement
	// !! Галерея не включится если в ссылках будут изображения без расширения
	baguetteBox.run('.gallery', {
		overlayBackgroundColor: 'rgba(0, 0, 0, 0.5)',
		afterShow: () => { htmlTag.classList.add('no-scroll') },
		afterHide: () => { htmlTag.classList.remove('no-scroll') },
	})
}
