import { useStore } from "./store";
import { useCheckErrorInResponse } from './use/checkErrorInResponse'

// Token
export function getToken(login, password) {
	const data = {
		name: login,
		password: password
	};

	return request('/api/get-token', data);
}


export function checkToken(token) {
	return request('/api/check-token', {}, false, token);
}


export function forgetToken(token) {
	return request('/api/forget-token', {}, false, token);
}


export function forgotTokens(token) {
	return request('/api/forgot-tokens', {}, false, token);
}

// menuItems
export function menuItemsList(parentId) {
	if(parentId) {
		return request(`/api/menu-items/list/${parentId}`);
	}

	return request('/api/menu-items/list');
}


export function menuItemsStore(data) {
	return request('/api/menu-items/store', data);
}


export function menuItemsShow(id) {
	return request(`/api/menu-items/${id}/show`);
}


export function menuItemsUpdate(id, data) {
	return request(`/api/menu-items/${id}/update`, data);
}


export function menuItemsDelete(id) {
	return request(`/api/menu-items/${id}/delete`);
}


export function menuItemsPositioning(data) {
	return request('/api/menu-items/positioning', data);
}

// Blocks
export function blockList(data) {
	return request('/api/blocks/list', data);
}


export function blockStore(data) {
	return request('/api/blocks/store', data, true);
}


export function blockShow(id) {
	return request(`/api/blocks/${id}/show`);
}


export function blockUpdate(id, data) {
	return request(`/api/blocks/${id}/update`, data, true);
}


export function blockDelete(id) {
	return request(`/api/blocks/${id}/delete`);
}


export function blockPositioning(data) {
	return request('/api/blocks/positioning', data);
}


// Limits
export function limits() {
	return request('/api/limits');
}


// Media
export function mediaDelete(id) {
	return request(`/api/media/${id}/delete`);
}


export function mediaPositioning(data) {
	return request('/api/media/positioning', data);
}


// Notice
export function noticeList(data) {
	return request('/api/notices/list', data);
}


export function noticeRead(id) {
	return request(`/api/notices/${id}/read`);
}


export function noticeDelete(id) {
	return request(`/api/notices/${id}/delete`);
}


// Contacts
export function contactList() {
	return request('/api/contacts/list');
}


export function contactStore(data) {
	return request('/api/contacts/store', data);
}


export function contactShow(id) {
	return request(`/api/contacts/${id}/show`);
}


export function contactUpdate(id, data) {
	return request(`/api/contacts/${id}/update`, data);
}


export function contactDelete(id) {
	return request(`/api/contacts/${id}/delete`);
}


export function contactPositioning(data) {
	return request('/api/contacts/positioning', data);
}


// Configs
export function getConfig(name) {
	return request(`/api/configs/${name}`);
}


// Users
export function userList() {
	return request('/api/users/list');
}


export function userCurrent() {
	return request('/api/users/current');
}


export function userShow(id) {
	return request(`/api/users/${id}/show`);
}


export function userUpdate(id, data) {
	return request(`/api/users/${id}/update`, data);
}


async function request(uri, body = {}, withFiles = false, token) {
	const store = useStore();

	if(!token) {
		token = store.getToken();
	}

	let headers = {
		'Accept': 'application/json',
	};

	if(!withFiles) {
		headers['Content-Type'] = 'application/json;charset=utf-8';
	}

	const data = {
		method: 'post',
		headers: headers,
		body: ''
	};

	if (body && withFiles) {
		data.body = body;
	} else if (body) {
		data.body = JSON.stringify(body);
	}

	if(token) {
		data.headers['Authorization'] = `Bearer ${ token }`;
	}

	return await fetch(uri, data)
		.then(response => response.json())
		.then(response => {
			if (useCheckErrorInResponse(response)) {
				return Promise.reject(new Error(response?.error?.message || response.status.message));
			}

			return response;
		});
}
