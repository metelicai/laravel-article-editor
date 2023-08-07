<?php

namespace App\Http\Controllers\Api;

class ConfigController
{
	public function get(string $config) {
		$dot_position = mb_stripos($config, '.') ?: null;
		$config_name = mb_substr($config, 0, $dot_position);

		if($config != $config_name) {
			abort(400, 'Не правильно указано название конфигурационного файла.');
		}

		if(!in_array($config_name, config('admin.allowed_configs_to_api', []))) {
			abort(403, sprintf('Доступ к конфигурационному файлу «%s» запрещён.', $config_name));
		}

		if(config($config_name)) {
			return config($config_name);
		}

		abort(404);
	}
}
