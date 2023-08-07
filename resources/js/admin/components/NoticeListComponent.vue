<template>
	<h1>Уведомления</h1>

	<div class="card mb-3" v-if="notices.length || filter.type != 'all' || filter.read != 'all' || filter.dateFrom != '' || filter.dateTo != ''">
		<div class="card-header filter-header" @click="showFilter = !showFilter">
			<span class="filter-arrow" :class="{ 'filter-arrow_invert': showFilter }"></span>
			Фильтр
			<span class="position-relative ms-2" v-if="filter.type != 'all' || filter.read != 'all' || filter.dateFrom != '' || filter.dateTo != ''">
				<span class="position-absolute top-50 translate-middle p-1 bg-primary border border-light rounded-circle"></span>
			</span>

		</div>
		<div class="card-body" v-if="showFilter">
			<div class="row">
				<div class="col-auto">
					<div class="row g-3">
						<div class="col-auto">
							<label class="col-form-label">Тип:</label>
						</div>
						<div class="col">
							<select class="form-select" v-model="filter.type" @change="loadNotices();">
								<option value="all">Любого типа</option>
								<option v-for="type in types" :key="type.type" :value="type.type">{{ type.name }}</option>
								<option value="none">Без типа</option>
							</select>
						</div>
					</div>
				</div>

				<div class="col-auto">
					<div class="row g-3">
						<div class="col-auto">
							<label class="col-form-label">Статус:</label>
						</div>
						<div class="col">
							<select class="form-select" v-model="filter.read" @change="loadNotices();">
								<option value="all">Прочитанные и непрочитанные</option>
								<option value="read">Прочитанные</option>
								<option value="not_read">Непрочитанные</option>
							</select>
						</div>
					</div>
				</div>

				<div class="col-auto">
					<div class="row g-3">
						<div class="col-auto">
							<label class="col-form-label">С:</label>
						</div>
						<div class="col">
							<input type="date" class="form-control" placeholder="С" autocomplete="off" v-model="filter.dateFrom" @change="loadNotices();">
						</div>
					</div>
				</div>

				<div class="col-auto">
					<div class="row g-3">
						<div class="col-auto">
							<label class="col-form-label">По:</label>
						</div>
						<div class="col">
							<input type="date" class="form-control" placeholder="По" autocomplete="off" v-model="filter.dateTo" @change="loadNotices();">
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="alert alert-primary mt-4" role="alert" v-if="notices.length == 0">Уведомления отсутствуют</div>

	<div class="table-responsive" v-if="notices.length">
		<table class="table table-striped table-hover">

			<thead>
				<tr>
					<th class="text-right" style="width: 1px;">№</th>
					<th style="width: 150px;">Время</th>
					<th class="w1px">Тип</th>
					<th class="w1px"></th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="notice in notices" :key="notice.id" :class="{ 'table-info': !notice.is_read }">

					<td class="text-right">{{ notice.id }}</td>

					<td>{{ formatDate(notice) }}</td>

					<td>{{ notice.type_name || 'Без типа' }}</td>

					<td class="text-end">
						<button type="button" class="btn btn-sm btn-primary me-2" @click="readed(notice)">Прочитать</button>
						<button type="button" class="btn btn-sm btn-danger" @click="remove(notice)">Удалить</button>
					</td>

				</tr>
			</tbody>

		</table>
	</div>

	<nav aria-label="Page navigation" v-if="meta.lastPage > 1">
		<ul class="pagination">
			<li class="page-item" :class="{ 'disabled': meta.currentPage == 1 }">
				<a class="page-link" href="#" @click="loadNotices(1)">
					<span aria-hidden="true">&laquo;</span>
				</a>
			</li>
			<li class="page-item" v-for="page in meta.lastPage" :key="page" :class="{ 'disabled': meta.currentPage == page }">
				<a href="#" class="page-link" @click="loadNotices(page)">{{ page }}</a>
			</li>
			<li class="page-item" :class="{ 'disabled': meta.currentPage == meta.lastPage }">
				<a class="page-link" href="#" @click="loadNotices(meta.lastPage)">
					<span aria-hidden="true">&raquo;</span>
				</a>
			</li>
		</ul>
	</nav>

	<div
		class="modal d-block"
		tabindex="-1"
		aria-modal="true"
		role="dialog"
		@click.self="closeModal"
		v-if="modal.content"
	>
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLiveLabel">{{ modal.title }}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click.self="closeModal"></button>
				</div>
				<div class="modal-body" v-html="modal.content"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import { noticeList, noticeRead, noticeDelete } from '../sdk'

	export default {
		data() {
			return {
				filter: {
					type: 'all',
					read: 'all',
					dateFrom: '',
					dateTo: '',
				},
				meta: {
					currentPage: 1,
					lastPage: 1,
					perPage: 0,
					total: 0,
				},
				notices: [],
				types: [],
				modal: {
					title: '',
					content: ''
				},
				showFilter: false
			}
		},
		methods: {
			loadNotices(page) {
				if(!page) {
					page = this.meta.currentPage;
				}

				const data = {
					page: page,
					filter: this.filter
				};
				noticeList(data).then(response => {
					this.notices = [];
					this.types = [];

					response.data.notices.forEach(notice => {
						this.notices.push(notice);
					});

					response.data.types.forEach(notice => {
						this.types.push(notice);
					});

					this.meta.currentPage = response.data.meta.currentPage;
					this.meta.lastPage = response.data.meta.lastPage;
					this.meta.perPage = response.data.meta.perPage;
					this.meta.total = response.data.meta.total;
				});
			},
			formatDate(notice) {
				return this.$dayjs(notice.created_at).format('DD.MM.YYYY HH:mm');
			},
			readed(notice) {
				this.modal.title = `Уведомление №${notice.id} «${notice.type_name || 'Без типа'}»`;
				this.modal.content = notice.content;
				noticeRead(notice.id).then(() => {
					this.loadNotices();
				});
			},
			remove(notice) {
				if(confirm('Вы действительно хотите удалить уведомление?')) {
					noticeDelete(notice.id).then(() => {
						this.loadNotices();
					});
				}
			},
			closeModal() {
				this.modal.content = '';
				this.modal.title = '';
			}
		},
		mounted() {
			this.loadNotices();
			setInterval(this.loadNotices, 60000);
			this.$root.store.reloadPages();
		}
	}
</script>

<style lang="scss" scoped>
	tr {
		border-bottom: 1px solid #dee2e6 !important;
	}
	.modal {
		background-color: rgba(0, 0, 0, .5);
	}
	.filter-header {
		cursor: pointer;
	}

	.filter-arrow {
		background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-size: 1.25rem;
		min-width: 20px;
		display: inline-block;
		height: 20px;
		margin-bottom: -5px;
		transition-property: transform;
  		transition-duration: .3s;

		&_invert {
			transform: rotate(180deg);
		}
	}
</style>
