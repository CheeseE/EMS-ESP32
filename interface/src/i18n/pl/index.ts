import type { BaseTranslation } from '../i18n-types';
/* prettier-ignore */
/* eslint-disable */

const pl: BaseTranslation = {
  LANGUAGE: 'Język',
  RETRY: 'Ponów',
  LOADING: 'Ładowanie',
  IS_REQUIRED: 'Pole {0} nie może być puste!',
  SIGN_IN: 'Zaloguj się',
  SIGN_OUT: 'Wyloguj się',
  USERNAME: '{{Użytkownik|Nazwa użytkownika|}}',
  PASSWORD: 'Hasło',
  SU_PASSWORD: 'Hasło "su"',
  DASHBOARD: 'Pulpit',
  SETTINGS_OF: 'Ustawienia {0}',
  SAVED: 'zostały zapisane.',
  HELP_OF: 'Pomoc {0}',
  LOGGED_IN: 'Zalogowano użytkownika {name}.',
  PLEASE_SIGNIN: 'Zaloguj się aby kontynuować.',
  UPLOAD_SUCCESSFUL: 'Wysyłanie zakończone.',
  DOWNLOAD_SUCCESSFUL: 'Pobieranie zakończone.',
  INVALID_LOGIN: 'Nieprawidłowy użytkownik lub hasło!',
  NETWORK: '{{Sieć|sieci|}}',
  SECURITY: '{{B|b|}}ezpieczeństw{{o|a|}}',
  ONOFF_CAP: 'wł./wył.',
  ONOFF: 'włączono/wyłączono',
  TYPE: 'Typ',
  DESCRIPTION: 'Opis',
  ENTITIES: 'Encje',
  REFRESH: 'Odśwież',
  EXPORT: 'Eksportuj',
  DEVICE_DETAILS: 'Szczegóły urządzenia',
  ID_OF: 'ID {0}',
  DEVICE: 'urządzenia',
  PRODUCT: 'produktu',
  BRAND: 'Marka',
  VERSION: 'Wersja',
  ENTITY_NAME: 'Nazwa encji',
  VALUE: '{{W|w|}}artość',
  SHOW_FAV: 'Pokaż tylko "ulubione"',
  DEVICE_SENSOR_DATA: 'Dane z urządzeń i czujników',
  DEVICES_SENSORS: 'Urządzenia i czujniki',
  ATTACHED_SENSORS: 'Urządzenia podłączone do EMS-ESP (czujniki temperatury/analogowe/cyfrowe, wyjścia cyfrowe)',
  RUN_COMMAND: 'Wykonaj komendę',
  CHANGE_VALUE: 'Zmień wartość',
  CANCEL: 'Anuluj',
  RESET: 'Reset{{uj|owanie|}}',
  SEND: 'Wyślij',
  SAVE: 'Zapisz',
  REMOVE: 'Usuń',
  PROBLEM_UPDATING: 'Problem z aktualizacją!',
  PROBLEM_LOADING: 'Problem z pobieraniem!',
  ACCESS_DENIED: 'Brak dostępu!',
  ANALOG_SENSOR: 'urządzenia podłączonego do EMS-ESP',
  ANALOG_SENSORS: 'Urządzenia podłączone do EMS-ESP',
  UPDATED_OF: 'Zaktualizowano ustawienia {0}.',
  UPDATE_OF: 'Aktualizacja {0}',
  REMOVED_OF: 'Usunięto ustawienia {0}.',
  DELETION_OF: 'Kasowanie {0}',
  OFFSET: 'Korekta ±',
  FACTOR: 'Mnożnik',
  FREQ: 'Częstotliwość',
  DUTY_CYCLE: 'Wypełnienie',
  UNIT: 'J.m.',
  STARTVALUE: 'Wartość początkowa',
  WARN_GPIO: 'Uwaga! Zachowaj ostrożność przypisując GPIO do urządzenia!',
  EDIT: 'Edycja',
  SENSOR: 'czujnika',
  TEMP_SENSOR: 'czujnika temperatury',
  TEMP_SENSORS: 'Czujniki temperatury 1-Wire®',
  WRITE_COMMAND: 'Wyślij komendę {cmd}',
  EMS_BUS_WARNING: 'Brak połączenia z magistralą EMS. Jeśli ten błąd występuje dłużej niż kilka sekund, sprawdź ustawienia oraz profil płytki interfejsu.',
  EMS_BUS_SCANNING: 'Trwa skanowanie urządzeń na magistrali EMS...',
  CONNECTED: '{{połączono|połączenie|}}',
  TX_ISSUES: 'Problem z zapisem na magistralę EMS. Spróbuj wybrać inny "Tryb transmisji (Tx)".',
  DISCONNECTED: 'brak połączenia',
  EMS_SCAN: 'Czy na pewno wykonać pełne skanowanie magistrali EMS?',
  EMS_BUS_STATUS: 'Status magistrali EMS',
  ACTIVE_DEVICES: 'Aktywne urządzenia i czujniki',
  EMS_DEVICE: 'Urządzenie EMS',
  SUCCESS: 'Udane',
  FAIL: 'Nieudane',
  QUALITY: 'Jakość',
  SCAN_DEVICES: 'Wyszukiwanie nowych urządzeń',
  EMS_BUS_STATUS_TITLE: 'Aktywność',
  SCAN: 'Skanuj',
  STATUS_NAMES: [
    'EMS, telegramy odebrane (Rx)',
    'EMS, wysłane telegramy "odczyt" (Tx)',
    'EMS, wysłane telegramy "zapis" (Tx)',
    'Odczyty czujników temperatury 1-Wire®',
    'Odczyty czujników analogowych i cyfrowych',
    'Publikacje MQTT',
    'Wywołania API',
    'Wpisy w SysLog'
  ],
  NUM_DEVICES: '{num} urządze{{ń|nie|nia|nia|ń}} EMS',
  NUM_TEMP_SENSORS: '{num} czujni{{ków|k|ki|ki|ków}} temperatury',
  NUM_ANALOG_SENSORS: '{num} inn{{ych|e|e|e|ych}} urządze{{ń|nie|nia(two)|nia|ń}} podłączon{{ych|e|e|e|ych}} do EMS-ESP',
  NUM_DAYS: '{num} {{dni|dzień|dni|dni|dni}}',
  NUM_SECONDS: '{num} sekun{{d|da|dy|dy|d}}',
  NUM_HOURS: '{num} godzi{{n|na|ny|ny|n}}',
  NUM_MINUTES: '{num} minu{{t|ta|ty|ty|t}}',
  APPLICATION_SETTINGS: 'Ustawienia aplikacji',
  CUSTOMIZATION: 'Personalizacja',
  APPLICATION_RESTARTING: 'Trwa ponowne uruchamianie...',
  INTERFACE_BOARD_PROFILE: 'Profil płytki interfejsu',
  BOARD_PROFILE_TEXT: 'Wybierz z listy gotowy profil płytki interfejsu lub wybierając "własny..." skonfiguruj posiadany sprzęt samodzielnie.',
  BOARD_PROFILE: 'Profil płytki',
  CUSTOM: 'własny',
  GPIO_OF: 'GPIO {0}',
  BUTTON: 'przycisku',
  TEMPERATURE: '1-Wire®',
  PHY_TYPE: 'Typ układu ethernetowego (PHY)',
  DISABLED: '{{wyłączono|brak|}}',
  TX_MODE: 'Tryb transmisji (Tx)',
  EMS_BUS: '{{magistrali EMS|na magistrali|}}',
  HARDWARE: 'sprzętowy',
  GENERAL_OPTIONS: 'Opcje podstawowe',
  LANGUAGE_ENTITIES: 'Język encji',
  HIDE_LED: 'Wyłącz LED',
  ENABLE_TELNET: 'Aktywuj dostęp dla konsoli Telnet',
  ENABLE_ANALOG: 'Aktywuj urządzenia GPIO (czujniki analogowe i cyfrowe oraz wyjścia cyfrowe)',
  CONVERT_FAHRENHEIT: 'Konwertuj temperatury do skali Fahrenheita',
  BYPASS_TOKEN: 'Pomiń autoryzację tokenem w wywołaniach API',
  READONLY: 'Tryb pracy "tylko do odczytu" (blokuje wszystkie komendy zapisu na magistralę EMS)',
  UNDERCLOCK_CPU: 'Obniż taktowanie CPU',
  ENABLE_SHOWER_TIMER: 'Aktywuj minutnik prysznica',
  ENABLE_SHOWER_ALERT: 'Aktywuj alarm prysznica',
  TRIGGER_TIME: 'Wyzwalaj po czasie',
  COLD_SHOT_DURATION: 'Czas trwania tryśnięcia zimnej wody',
  FORMATTING_OPTIONS: 'Opcje formatowania',
  BOOLEAN_FORMAT_DASHBOARD: 'Wartości dwustanowe na pulpicie',
  BOOLEAN_FORMAT_API: 'Wartości dwustanowe w API/MQTT',
  ENUM_FORMAT: 'Wartości z listy w API/MQTT',
  INDEX: 'indeks',
  ENABLE_PARASITE: 'Aktywuj zasilanie pasożytnicze',
  LOGGING: 'Logowanie',
  LOG_HEX: 'Loguj telegramy EMS w systemie szesnastkowym (hex)',
  ENABLE_SYSLOG: 'Aktywuj SysLog',
  LOG_LEVEL: 'Poziom logowania',
  MARK_INTERVAL: 'Oznaczaj interwały (0=brak)',
  SECONDS: 'sek.',
  MINUTES: 'min.',
  HOURS: 'godz.',
  RESTART: 'Restart',
  RESTART_TEXT: 'Aby zastosować wprowadzone zmiany interfejs EMS-ESP musi zostać zrestartowany.',
  RESTART_CONFIRM: 'Jesteś pewien, że chcesz zrestartować interfejs EMS-ESP?',
  COMMAND: 'KOMENDA',
  CUSTOMIZATIONS_RESTART: 'Wszystkie personalizacje zostały usunięte. Restartuję...',
  CUSTOMIZATIONS_FULL: 'Wybrano za dużo obiektów. Wprowadź zmiany w mniejszych partiach.',
  CUSTOMIZATIONS_SAVED: 'Personalizacje zostały zapisane.',
  CUSTOMIZATIONS_HELP_1: 'Wybierz urządzenie EMS, dostosuj opcje lub kliknij by zmienić nazwę encji.',
  CUSTOMIZATIONS_HELP_2: 'oznacz jako ulubioną',
  CUSTOMIZATIONS_HELP_3: 'zablokuj akcje zapisu',
  CUSTOMIZATIONS_HELP_4: 'wyklucz z MQTT i API',
  CUSTOMIZATIONS_HELP_5: 'ukryj na pulpicie',
  SELECT_DEVICE: 'wybierz urządzenie',
  SET_ALL: 'Ustaw wszystko jako',
  OPTIONS: 'Opcje',
  NAME: '{{Nazwa|nazwa|}}',
  CUSTOMIZATIONS_RESET:  'Czy jesteś pewien, że chcesz usunąć wszystkie personalizacje łącznie z ustawieniami dla czujników temperatury 1-Wire® i urządzeń podłączonych do EMS-ESP?',
  DEVICE_ENTITIES: 'Encje urządzenia',
  USER_CUSTOMIZATION: 'Personalizacje użytkownika',
  SUPPORT_INFORMATION: 'Informacje dotyczące wsparcia',
  CLICK_HERE: 'Kliknij tu',
  HELP_INFORMATION_1: 'Aby uzyskać instrukcje dotyczące konfiguracji EMS-ESP skorzystaj z wiki w internecie',
  HELP_INFORMATION_2: 'Aby dołączyć do naszego serwera Discord i komunikować się na żywo ze społecznością',
  HELP_INFORMATION_3: 'Aby zaproponować nową funkcjonalność lub zgłosić problem',
  HELP_INFORMATION_4: 'Zgłaszając problem, nie zapomnij dołączyć informacji o swoim systemie!',
  HELP_INFORMATION_5: 'EMS-ESP jest darmowym projektem typu open-source. Aby go wesprzeć, rozważ przyznanie nam gwiazdki na Github!',
  SUPPORT_INFO: 'Pobierz informacje',
  UPLOAD_OF: 'Wysyłanie {0}',
  UPLOAD: 'Wysyłanie',
  DOWNLOAD: '{{P|p||P}}obier{{anie|z||z}}',
  ABORTED: 'zostało przerwane!',
  FAILED: 'nie powiodło się!',
  SUCCESSFUL: 'powiodło się.',
  SYSTEM: '{{S|s||s}}yste{{m|mu||mowy}}',
  LOG_OF: 'Log {0}',
  STATUS_OF: 'Status {0}',
  UPLOAD_DOWNLOAD: 'Przesyłanie plików',
  SYSTEM_VERSION_RUNNING: 'Obecnie zainstalowana wersja to:',
  SYSTEM_APPLY_FIRMWARE: '',
  CLOSE: 'Zamknij',
  USE: 'Aby zaktualizować firmware skorzystaj z funkcji',
  FACTORY_RESET: 'Ustawienia fabryczne',
  SYSTEM_FACTORY_TEXT: 'Interfejs EMS-ESP został przywrócony do ustawień fabrycznych i zostanie teraz ponownie uruchomiony.',
  SYSTEM_FACTORY_TEXT_DIALOG: 'Czy jesteś pewien, że chcesz przywrócić ustawienia fabryczne interfejsu EMS-ESP? ',
  VERSION_CHECK: 'Sprawd{{ź|zanie|}} wersj{{ę|i|}}',
  THE_LATEST: 'Najnowsza',
  OFFICIAL: 'oficjalna',
  DEVELOPMENT: 'testowa',
  VERSION_IS: 'wersja to',
  RELEASE_NOTES: 'lista zmian',
  EMS_ESP_VER: 'Wersja EMS-ESP',
  PLATFORM: 'Urządzenie (platforma / SDK)',
  UPTIME: 'Czas działania systemu',
  CPU_FREQ: 'Taktowanie CPU',
  HEAP: 'HEAP (wolne / maksymalny przydział)',
  PSRAM: 'PSRAM (rozmiar / wolne)',
  FLASH: 'Flash (rozmiar / taktowanie)',
  APPSIZE: 'Aplikacja (wykorzystane / wolne)',
  FILESYSTEM: 'System plików (wykorzystane / wolne)',
  BUFFER_SIZE: 'Rozmiar bufora',
  COMPACT: 'Kompaktowy',
  ENABLE_OTA: 'Aktywuj aktualizacje OTA',
  DOWNLOAD_CUSTOMIZATION_TEXT: 'Pobierz personalizacje',
  DOWNLOAD_SETTINGS_TEXT: 'Pobierz ustawienia aplikacji. Uważaj jeśli udostępniasz plik z ustawieniami, ponieważ zawiera on hasła oraz inne wrażliwe informacje!',
  UPLOAD_TEXT: 'Wyślij firmware (.bin), ustawienia lub personalizacje (.json). Opcjonalnie, wyślij wcześniej plik walidacji (.md5).',
  UPLOADING: 'Wysłano',
  UPLOAD_DROP_TEXT: 'Przeciągnij tutaj plik lub kliknij',
  ERROR: 'Nieoczekiwany błąd, spróbuj ponownie!',
  TIME_SET: 'Zegar został ustawiony.',
  MANAGE_USERS: 'Zarządzanie użytkownikami',
  IS_ADMIN: '{{Administrator|Uprawnienia administratora|}}',
  USER_WARNING: 'Przynajmniej jeden użytkownik musi mieć uprawnienia administratora!',
  ADD: 'Doda{{j|wanie|}}',
  ACCESS_TOKEN_FOR: 'Token dostępu dla użytkownika',
  ACCESS_TOKEN_TEXT: 'Token jest używany w wywołaniach REST API wymagających autoryzacji. Można go przekazywać bezpośrednio lub przez URL.',
  GENERATING_TOKEN: 'Generowanie tokenu',
  USER: '{{Użytkownik|użytkownika|}}',
  MODIFY: 'Edycja',
  SU_TEXT: 'Hasło "su" (super-użytkownika) służy do podpisywania tokenów autoryzujących oraz włączania uprawnień administratora w konsoli.',
  NOT_ENABLED: 'nieaktywny',
  ERRORS_OF: 'Błędy {0}',
  DISCONNECT_REASON: 'Przyczyna braku połączenia',
  ENABLE_MQTT: 'Aktywuj MQTT',
  BROKER: 'brokera',
  CLIENT: 'klienta',
  BASE_TOPIC: 'Prefiks bazowy',
  OPTIONAL: 'opcjonalny',
  FORMATTING: 'Formatowanie',
  MQTT_FORMAT: 'Sposób publikowania danych',
  MQTT_NEST_1: 'zagnieżdżone w pojedynczym temacie',
  MQTT_NEST_2: 'jako indywidualne tematy',
  MQTT_RESPONSE: 'Rezultat wykonania komendy publikuj w temacie "response"',
  MQTT_PUBLISH_TEXT_1: 'Publikuj tematy z pojedynczą wartością bezpośrednio po zmianie',
  MQTT_PUBLISH_TEXT_2: 'Publikuj w temacie "command" (ioBroker)',
  MQTT_PUBLISH_TEXT_3: 'Włącz opcję "MQTT discovery" (Home Assistant, Domoticz)',
  MQTT_PUBLISH_TEXT_4: 'Prefiks dla tematów "MQTT discovery"',
  MQTT_PUBLISH_INTERVALS: 'Interwały publikowania',
  MQTT_INT_BOILER: 'Kotły i pompy ciepła',
  MQTT_INT_THERMOSTATS: 'Termostaty',
  MQTT_INT_SOLAR: 'Panele solarne',
  MQTT_INT_MIXER: 'Mieszacze',
  MQTT_INT_HEARTBEAT: 'Heartbeat',
  MQTT_QUEUE: 'Kolejka MQTT',
  DEFAULT: '{{Pozostałe|Domyślna|}}',
  MQTT_ENTITY_FORMAT: 'Entity ID format',
  MQTT_ENTITY_FORMAT_0: 'Single instance, long name (depreciated)',
  MQTT_ENTITY_FORMAT_1: 'Multiple instances, short name',
  MQTT_CLEAN_SESSION: 'Ustawiaj flagę "Clean session"',
  MQTT_RETAIN_FLAG: 'Ustawiaj flagę "Retain"',
  INACTIVE: 'nieaktywny',
  ACTIVE: 'aktywny',
  UNKNOWN: 'nieznany',
  SET_TIME: '{{Ustaw zegar|Ustawianie zegara|}}',
  SET_TIME_TEXT: 'Wprowadź aktualną datę i godzinę',
  LOCAL_TIME: 'Czas lokalny',
  UTC_TIME: 'Czas UTC',
  ENABLE_NTP: 'Aktywuj NTP (data i godzina będą automatycznie synchronizowane z poniższym serwerem czasu)',
  NTP_SERVER: 'Serwer NTP',
  TIME_ZONE: 'Strefa czasowa',
  ACCESS_POINT: '{{Punkt|punktu|}} {{dostępowy|dostępowego|}}',
  AP_PROVIDE: 'Aktywuj punkt dostępowy',
  AP_PROVIDE_TEXT_1: 'zawsze',
  AP_PROVIDE_TEXT_2: 'gdy połączenie WiFi jest rozłączone',
  AP_PROVIDE_TEXT_3: 'nigdy',
  AP_PREFERRED_CHANNEL: 'Preferowany kanał',
  AP_HIDE_SSID: 'Ukryj SSID',
  AP_CLIENTS: 'Liczba klientów',
  AP_MAX_CLIENTS: 'Maksymalna liczba klientów',
  AP_LOCAL_IP: 'Lokalny adres IP',
  NETWORK_SCAN: 'Skanowanie sieci WiFi',
  IDLE: 'uśpiony',
  LOST: 'zostało utracone.',
  SCANNING: 'Skanuję',
  SCAN_AGAIN: 'Skanuj ponownie',
  NETWORK_SCANNER: 'Skaner sieci WiFi',
  NETWORK_NO_WIFI: 'Brak sieci WiFi w zasięgu',
  NETWORK_BLANK_SSID: 'pozostaw puste aby wyłączyć WiFi',
  TX_POWER: 'Moc nadawania',
  HOSTNAME: 'Nazwa w sieci',
  NETWORK_DISABLE_SLEEP: 'Wyłącz tryb usypiania WiFi',
  NETWORK_LOW_BAND: 'Używaj zmniejszonej przepustowości WiFi',
  NETWORK_USE_DNS: 'Włącz wsparcie dla mDNS',
  NETWORK_ENABLE_CORS: 'Włącz wsparcie dla CORS',
  NETWORK_CORS_ORIGIN: 'CORS origin',
  NETWORK_ENABLE_IPV6: 'Włącz wsparcie dla IPv6',
  NETWORK_FIXED_IP: 'Użyj stałego adresu IP',
  NETWORK_GATEWAY: 'Brama',
  NETWORK_SUBNET: 'Maska podsieci',
  NETWORK_DNS: 'Serwery DNS',
  ADDRESS_OF: 'Adres {0}',
  ADMIN: 'Użytkownik "administrator".',
  GUEST: 'Użytkownik "gość".',
  NEW: 'Nowy',
  NEW_NAME_OF: 'Nowa nazwa {0}',
  ENTITY: 'encji',
  MIN: 'Min.',
  MAX: 'Maks.'
};

export default pl;
