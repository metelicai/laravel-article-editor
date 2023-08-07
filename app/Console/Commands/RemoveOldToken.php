<?php

namespace App\Console\Commands;

use Carbon\Carbon;
use Illuminate\Console\Command;
use Laravel\Sanctum\PersonalAccessToken;

class RemoveOldToken extends Command
{
	/**
	 * The name and signature of the console command.
	 *
	 * @var string
	 */
	protected $signature = 'old-token:remove';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Удалить старые токены';


	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct() {
		parent::__construct();
	}


	/**
	 * Execute the console command.
	 *
	 * @return int
	 */
	public function handle() {
		$expiration_date = Carbon::now()->subDay();

		$tokens = PersonalAccessToken::where('last_used_at', '<=', $expiration_date)->get();

		foreach($tokens as $token) {
			$token->delete();
		}

		return Command::SUCCESS;
	}
}
