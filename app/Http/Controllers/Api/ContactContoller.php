<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Traits\Positioning;
use App\Http\Resources\ContactCollection;
use App\Http\Resources\ContactResource;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactContoller extends Controller
{
	use Positioning;


	public function list() {
		$contacts = Contact::defaultOrder()->get();

		return [
			'data' => [
				'contacts' => new ContactCollection($contacts),
				'socialNetworks' => config('contacts.social_networks'),
			]
		];
	}


	public function store(Request $request) {
		$contact = Contact::create($request->all());

		return new ContactResource($contact);
	}


	public function show(Contact $contact) {

	}


	public function update(Request $request, Contact $contact) {
		$contact->update($request->all());

		return [
			'data' => [
				'contact' => new ContactResource($contact)
			]
		];
	}


	public function delete(Contact $contact) {
		$contact->delete();

		return null;
	}


	public function positioning(Request $request) {
		$this->setPositions($request, Contact::class);

		return $this->list();
	}
}
