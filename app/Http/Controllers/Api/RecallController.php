<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Block;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class RecallController extends Controller
{
	/**
	 * Обработка обратного звонка
	 *
	 * @param Request $request
	 * @return array
	 */
    public function recall(Request $request): array
	{
		// Обработка поля от ботов
		$anti_bot_field = $request->input('email');
		if ($anti_bot_field) {
			return [ 'notice' => false ];
		}

		// Вызов метода в этом контроллере в соответствии с типом
		$method = Str::camel('recall_' . $request->input('type'));
		if(method_exists($this, $method)) {
			return call_user_func([$this, $method], $request);
		}

		return $this->recallDefault($request);
    }


	/**
	 * Обработка формы обратного звонка со стандартным типом
	 *
	 * @param Request $request
	 * @return array
	 */
	protected function recallDefault(Request $request): array
	{
		$phone = $request->input('f-phone');

		notice(view('mails.recall', compact('phone')), 'recall');

		return [
			'notice' => view('site.notices.recall')->with('phone', $phone)->render()
		];
	}
}
