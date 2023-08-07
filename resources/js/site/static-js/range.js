export default function initRangeJs() {
	const fields = document.querySelectorAll('.range')

	fields.forEach(field => {
		const firstInputEl = field.querySelector('.range__field_first')
		const secondInputEl = field.querySelector('.range__field_second')
		const countFromEl = field.querySelector('.range__count_from .range-value')
		const countCurrentEl = field.querySelector('.range__count_current .range-value')
		const countToEl = field.querySelector('.range__count_to .range-value')

		const step = Number(firstInputEl.getAttribute('step')) || 1
		let firstInputCount = Number(firstInputEl.value)
		let secontInputCount = secondInputEl ? Number(secondInputEl.value) : undefined

		firstInputEl.addEventListener('input', function (event) {
			firstInputCount = Number(event.target.value)

			if (secondInputEl) {
				if ((firstInputCount + step) >= secontInputCount) {
					event.target.value = secontInputCount - step
					firstInputEl.style.setProperty('--from', secontInputCount - step)
					return false
				}
				firstInputEl.style.setProperty('--from', firstInputCount)
				countFromEl.innerHTML = firstInputCount
			} else {
				countCurrentEl.innerHTML = firstInputCount
			}
		})

		if (secondInputEl) {
			secondInputEl.addEventListener('input', function (event) {
				secontInputCount = Number(event.target.value)

				if ((secontInputCount - step) <= firstInputCount) {
					event.target.value = firstInputCount + step
					firstInputEl.style.setProperty('--to', firstInputCount + step)
					return false
				}

				firstInputEl.style.setProperty('--to', secontInputCount)
				countToEl.innerHTML = secontInputCount
			})
		}
	})
}
