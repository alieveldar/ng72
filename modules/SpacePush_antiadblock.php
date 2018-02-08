<?php
# Ключ доступа в сервису, не забудьте обновит <id> на ключ полученный у вашего менеджера
$key = "5a78180b609181b5566f0098";
# Определяем место хранения файлового кеша (Вы можете использовать любой вариант кеширования, например redis или memcache)
$cache = $_SERVER['DOCUMENT_ROOT']."/cache/spacepush-".$key;
# Если файл существует и время его обновления не превышает 10 минут, используем его
if (file_exists($cache) && strtotime("-10 minutes") < filemtime($cache)) {
   $response = file_get_contents($cache);
} else {
   #  В противном случае подключаемся с помощью cURL к нашему серверу и получаем свежий код
   $ch = curl_init();              # Создаем новое соединение
   curl_setopt_array($ch, [        # Массово устанавливаем параметры соединения
       CURLOPT_URL                 => 'http://adblockrecovery.ru/api/code', #
       CURLOPT_TIMEOUT_MS          => 300, # Таймаут 100ms
       CURLOPT_CONNECTTIMEOUT_MS   => 300, # Таймаут соединения 100ms
       CURLOPT_RETURNTRANSFER      => true,# Получить результат
       CURLOPT_NOSIGNAL            => true,
       CURLOPT_HTTPHEADER          => [    # Устанавливаем Header с вашим ключом доступа
           'adblock: '.$key
       ]
   ]);

   # Выполняем запрос
   $response = curl_exec($ch);
   # Получаем статус
   $status   = curl_getinfo($ch, CURLINFO_HTTP_CODE);
   # Если HTTP статус 200, то обновляем кеш
   if ($status == 200) {
       file_put_contents($cache, $response);
   } else {
       # В противном случае продолжаем использовать старые данные
       $response = file_get_contents($cache);
    }
 }
 # Выводим на страницу полученный результат
 return $response;
 ?> 