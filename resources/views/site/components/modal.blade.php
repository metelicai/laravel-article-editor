<v-modal
	v-model="{{ 'modals["' . $name . '"]' }}"
	:name="'{{ $name }}'"
	:disable-wrapper-close="@json($disableWrapperClose)"
	:max-screen-width="{{ $maxScreenWidth }}"
	:save-content="@json($saveContent)"
	v-slot="{ close, modalData }"
	v-cloak
>
	{{ $slot }}
</v-modal>
