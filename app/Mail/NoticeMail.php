<?php

namespace App\Mail;

use App\Models\Notice;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NoticeMail extends Mailable
{
	use Queueable, SerializesModels;

	/**
	 * @var Notice $notice
	 */
	protected $notice;

	/**
	 * Create a new message instance.
	 *
	 * @return void
	 */
	public function __construct(Notice $notice) {
		$this->notice = $notice;
	}


	/**
	 * Build the message.
	 *
	 * @return $this
	 */
	public function build() {
		$user = User::find(1);

		$this
			->from(env('MAIL_FROM_ADDRESS', 'MAIL_FROM_NAME'))
			->to($user->email, env('MAIL_TO_NAME'))
			->subject("Уведомление с сайта " . host())
			->html($this->notice->content);
	}
}
