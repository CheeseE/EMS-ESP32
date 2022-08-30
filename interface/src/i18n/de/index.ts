import type { Translation } from '../i18n-types';

const de: Translation = {
  LANGUAGE: 'Sprache',
  RETRY: 'Neuer Versuch',
  LOADING: 'Laden',
  IS_REQUIRED: 'ist erforderlich',
  SIGN_IN: 'Einloggen',
  SIGN_OUT: 'Ausloggen',
  USERNAME: 'Nutzername',
  PASSWORD: 'Passwort',
  DASHBOARD: 'Kontrollzentrum',
  SETTINGS: 'Einstellungen',
  SAVED: 'gespeichert',
  HELP: 'Hilfe',
  LOGGED_IN: 'Eingeloggt als {name}',
  PLEASE_SIGNIN: 'Bitte einloggen, um fortzufahren',
  UPLOAD_SUCCESSFUL: 'Hochladen erfolgreich',
  DOWNLOAD_SUCCESSFUL: 'Herunterladen erfolgreich',
  INVALID_LOGIN: 'Ungültige Login Daten',
  NETWORK: 'Netzwerk',
  SECURITY: 'Sicherheit',
  ONOFF_CAP: 'AN/AUS',
  ONOFF: 'an/aus',
  TYPE: 'Typ',
  DESCRIPTION: 'Bezeichnung',
  ENTITIES: 'Entitäten',
  REFRESH: 'Aktualisieren',
  EXPORT: 'Exportieren',
  ENTITY_NAME: 'Entitätsname',
  VALUE: 'Wert',
  SHOW_FAV: 'nur Favoriten anzeigen',
  DEVICE_SENSOR_DATA: 'Geräte- und Sensordaten',
  DEVICES_SENSORS: 'Geräte & Sensoren',
  ATTACHED_SENSORS: 'Angeschlossene EMS-ESP Sensoren',
  RUN_COMMAND: 'Befehl ausführen',
  CHANGE_VALUE: 'Wert ändern',
  CANCEL: 'Abbrechen',
  RESET: 'Zurücksetzen',
  SEND: 'Senden',
  SAVE: 'Speichern',
  REMOVE: 'Entfernen',
  PROBLEM_UPDATING: 'Problem beim Aktualisieren',
  PROBLEM_LOADING: 'Problem beim Laden',
  ACCESS_DENIED: 'Zugriff abgelehnt',
  ANALOG_SENSOR: 'Analogsensor{post}',
  ANALOG_SENSORS: 'Analogsensoren',
  TEMP_SENSOR: 'Temperatursensor{post}',
  TEMP_SENSORS: 'Temperatursensoren',
  WRITE_COMMAND: 'Befehl schreiben {cmd}',
  EMS_BUS_WARNING:
    'EMS-Bus getrennt. Wenn diese Warnung nach einigen Sekunden immer noch besteht, überprüfen Sie bitte die Einstellungen und das Board-Profil',
  EMS_BUS_SCANNING: 'Suche nach EMS Geräten...',
  CONNECTED: 'Verbunden',
  TX_ISSUES: 'Tx-Probleme - versuchen Sie einen anderen Tx-Modus',
  DISCONNECTED: 'Getrennt',
  EMS_SCAN: 'Möchten Sie wirklich eine vollständige Gerätesuche des EMS-Busses starten?',
  EMS_BUS_STATUS: 'EMS-Busstatus',
  ACTIVE_DEVICES: 'Aktive Geräte und Sensoren',
  DEVICE: 'Gerät',
  SUCCESS: 'ERFOLG',
  FAIL: 'FEHLER',
  QUALITY: 'QUALITÄT',
  SCAN_DEVICES: 'Nach neuen Geräten suchen',
  EMS_BUS_STATUS_TITLE: 'EMS-Bus- und Aktivitätsstatus',
  SCAN: 'Suche',
  STATUS_NAMES: [
    'EMS-Telegramme empfangen (Rx)',
    'EMS-Telegramme gelesen (Tx)',
    'EMS-Telegramme geschrieben (Tx)',
    'Temperatursensoren gelesen',
    'Analogsensoren gelesen',
    'MQTT-Nachrichten gesendet',
    'API-Aufrufe',
    'Syslog-Mitteilungen'
  ],
  NUM_DEVICES: '{num} Gerät{{e}}',
  NUM_TEMP_SENSORS: '{num} Temperatursensor{{en}}',
  NUM_ANALOG_SENSORS: '{num} Analogsensor{{en}}',
  NUM_DAYS: '{num} Tag{{e}}',
  NUM_SECONDS: '{num} Sekunde{{n}}',
  NUM_HOURS: '{num} Stunde{{n}}',
  NUM_MINUTES: '{num} Minute{{n}}',
  APPLICATION_SETTINGS: 'Anwendungseinstellungen',
  CUSTOMIZATION: 'Anpassungen',
  APPLICATION_RESTARTING: 'EMS-ESP startet neu',
  BOARD_PROFILE_TEXT:
    'Wählen Sie ein vorkonfiguriertes Platinenprofil aus der Liste unten aus oder wählen Sie Benutzerdefiniert, um Ihre eigenen Hardwareeinstellungen zu konfigurieren',
  BOARD_PROFILE: 'Platinenprofil',
  BUTTON: 'Taste',
  TEMPERATURE: 'Temperatur',
  DISABLED: 'deaktiviert',
  GENERAL_OPTIONS: 'Allgemeine Optionen',
  LANGUAGE_ENTITIES: 'Sprache (für Geräteentitäten)',
  HIDE_LED: 'LED ausblenden',
  ENABLE_TELNET: 'Aktiviere Telnet Konsole',
  ENABLE_ANALOG: 'Aktiviere Analogsensorsen',
  CONVERT_FAHRENHEIT: 'Konvertiere Temperaturwerte in Fahrenheit',
  BYPASS_TOKEN: 'Zugriffstoken-Autorisierung bei API-Aufrufen umgehen',
  READONLY: 'Nur-Lese-Modus aktivieren (blockiert alle ausgehenden EMS Tx Write-Befehle)',
  UNDERCLOCK_CPU: 'CPU-Geschwindigkeit untertakten',
  ENABLE_SHOWER_TIMER: 'Duschtimer aktivieren',
  ENABLE_SHOWER_ALERT: 'Duschalarm aktivieren',
  TRIGGER_TIME: 'Auslösezeit',
  COLD_SHOT_DURATION: 'Kaltschussdauer',
  FORMATTING_OPTIONS: 'Formatierungsoptionen',
  BOOLEAN_FORMAT_DASHBOARD: 'Boolsches Format für Web',
  BOOLEAN_FORMAT_API: 'Boolesches Format API/MQTT',
  ENUM_FORMAT: 'Enum Format API/MQTT',
  INDEX: 'Index',
  ENABLE_PARASITE: 'Parasitäre Stomversorgung',
  LOGGING: 'Protokollierung',
  LOG_HEX: 'EMS-Telegramme hexadezimal protokollieren',
  ENABLE_SYSLOG: 'Syslog aktivieren',
  MARK_INTERVAL: 'Intervallmarke',
  SECONDS: 'Sekunden',
  MINUTES: 'Minuten',
  HOURS: 'Stunden',
  RESTART: 'Neu starten',
  RESTART_TEXT: 'EMS-ESP muss neu gestartet werden, um geänderte Systemeinstellungen zu übernehmen',
  COMMAND: 'Befehl',
  CUSTOMIZATIONS_RESTART: 'Alle Anpassungen wurden entfernt. Neustart...',
  CUSTOMIZATIONS_FULL: 'Ausgewählte Entitäten haben das Limit von 60 überschritten. Bitte stapelweise speichern',
  CUSTOMIZATIONS_SAVED: 'Anpassungen gespeichert',
  CUSTOMIZATIONS_HELP_1: 'Wählen Sie ein Gerät aus und passen Sie die Entitäten mithilfe der Optionen an',
  CUSTOMIZATIONS_HELP_2: 'als Favorit markieren',
  CUSTOMIZATIONS_HELP_3: 'Schreibaktion deaktivieren',
  CUSTOMIZATIONS_HELP_4: 'von MQTT und API ausschließen',
  CUSTOMIZATIONS_HELP_5: 'Aus dem Kontrollzentrum ausblenden',
  SELECT_DEVICE: 'Wählen Sie ein Gerät aus',
  SET_ALL: 'setzen Sie alle',
  OPTIONS: 'Optionen',
  NAME: 'Name',
  CUSTOMIZATIONS_RESET:
    'Möchten Sie wirklich alle Anpassungen entfernen, einschließlich der benutzerdefinierten Einstellungen der Temperatur- und Analogsensoren?',
  DEVICE_ENTITIES: 'Geräteentitäten',
  CONFIGURE: 'Konfigurieren von',
  USER_CUSTOMIZATION: 'Benutzeranpassung',
  SUPPORT_INFORMATION: 'Unterstützende Informationen',
  HELP_INFORMATION_1: 'Besuchen Sie das Online',
  HELP_INFORMATION_2: 'um Anweisungen zum',
  HELP_INFORMATION_3: 'und andere Informationen zu erhalten',
  HELP_INFORMATION_4: 'Für einen Live-Community-Chat verwenden Sie unseren ',
  HELP_INFORMATION_5: 'Eröffnen Sie ein',
  HELP_INFORMATION_6: 'Github-Issue',
  HELP_INFORMATION_7: 'um neue Funktionen vorzuschlagen oder einen Fehler zu melden',
  HELP_INFORMATION_8: 'Verwenden Sie den Systemdetails-',
  HELP_INFORMATION_9: 'und hängen sie die Datei für eine schnellere Antwort an',
  HELP_INFORMATION_10: 'EMS-ESP wird immer ein kostenloses Open-Source-Projekt sein. Belohnen Sie es mit einem ',
  UPLOAD: 'Hochladen',
  DOWNLOAD: 'Herunterladen',
  ABORTED: 'abgebrochen',
  FAILED: 'gescheitert',
  SUCCESSFUL: 'erfolgreich',
  SYSTEM: 'System',
  LOG: 'Log',
  STATUS: 'Status',
  UPLOAD_DOWNLOAD: 'Hoch-/Herunterladen',
  SYSTEM_VERSION_RUNNING: 'Sie verwenden die Version',
  SYSTEM_APPLY_FIRMWARE: 'um die neue Firmware anzuwenden',
  CLOSE: 'Schließen',
  USE: 'Verwenden',
  FACTORY_RESET: 'Werkseinstellung',
  SYSTEM_FACTORY_TEXT: 'EMS-ESP wurde auf Werkseinstellung gesetzt und startet als Zugangspunkt neu',
  SYSTEM_FACTORY_TEXT_DIALOG: 'Sind Sie sicher alle Einstellungen auf Werkseinstellung zu setzen?',
  VERSION_CHECK: 'Versionsprüfung',
  THE_LATEST: 'Die neueste',
  PLATFORM: 'Platform (Platform / SDK)',
  UPTIME: 'System Betriebszeit',
  CPU_FREQ: 'CPU Frequenz',
  HEAP: 'Speicher (Frei / Max Belegt)',
  PSRAM: 'PSRAM (Größe / Frei)',
  FLASH: 'Flash Speicher (Größe / Geschwindigkeit)',
  FILESYSTEM: 'Dateisystem (Genutzt / Gesamt)',
  BUFFER_SIZE: 'Puffergröße',
  COMPACT: 'Kompakte Darstellung',
  ENABLE_OTA: 'OTA Updates verwenden',
  DOWNLOAD_CUSTOMIZATION_TEXT: 'Herunterladen der individuellen Entitätsanpassungen',
  DOWNLOAD_SETTINGS_TEXT:
    'Herunterladen der Anwendungseinstellungen. Vorsicht beim Teilen der Einstellungen, da sie Passwörter und andere sensitive Einstellungen enthalten',
  UPLOAD_TEXT: 'Hochladen von neuer Firmware (.bin), Geräte- oder Entitätseinstellungen (.json)',
  UPLOADING: 'Hochladen',
  UPLOAD_DROP_TEXT: 'Klicken Sie hier, oder ziehen eine Datei hierher',
  ERROR: 'Unerwarteter Fehler, bitter versuchen Sie es erneut',
  TIME_SET: 'Zeit gesetzt',
  MANAGE_USERS: 'Nutzerverwaltung',
  IS_ADMIN: 'ist Admin',
  USER_WARNING: 'Sie müssen mindestens einen Admin-Nutzer konfigurieren',
  ADD: 'Hinzufügen',
  ACCESS_TOKEN_FOR: 'Zugangs-Token für',
  ACCESS_TOKEN_TEXT:
    'Das untenstehende Token ist für REST API Aufrufe, die eine Authentifizierung benötigen. Es kann entweder als Bearer Token im `Authorization-Header` oder in der Access_Token URL verwendet werden.',
  GENERATING_TOKEN: 'Erzeuge Token',
  USER: 'Nutzer',
  MODIFY: 'Ändern',
  SU_TEXT:
    'Das su (super user) Passwort wird zum Signieren der Authentifikations-Tokens verwendet und ermöglicht Admin-Berechtigung in der Konsole.',
  NOT_ENABLED: 'Nicht aktiviert',
  ERRORS: 'Fehler',
  DISCONNECT_REASON: 'Grund der Verbindungsunterbrechung',
  ENABLE_MQTT: 'MQTT aktivieren',
  OPTIONAL: 'Optional',
  FORMATTING: 'Formattierung',
  FORMAT: 'Format',
  MQTT_NEST_1: 'Als Nester in in einem Gesamttopic',
  MQTT_NEST_2: 'Als einzelne Topics',
  MQTT_RESPONSE: 'Veröffentliche die Kommandoantwort als `response` Topic',
  MQTT_PUBLISH_TEXT_1: 'Veröffentliche einzelne Werte bei Veränderung als eigene Topics',
  MQTT_PUBLISH_TEXT_2: 'Veröffentliche als Kommando-Topic (ioBroker)',
  MQTT_PUBLISH_TEXT_3: 'Aktiviere `MQTT Discovery` (Home Assistant, Domoticz)',
  MQTT_PUBLISH_TEXT_4: 'Prefix für die `Discovery`-Topics',
  MQTT_PUBLISH_INTERVALS: 'Veröffentlichungs-Intervalle',
  MQTT_INT_BOILER: 'Boiler und Wärmepumpen',
  MQTT_INT_THERMOSTATS: 'Thermostate',
  MQTT_INT_SOLAR: 'Solarmodule',
  MQTT_INT_MIXER: 'Mischermodule',
  DEFAULT: 'Standard',
  MQTT_CLEAN_SESSION: 'Setze `Clean Session`',
  MQTT_RETAIN_FLAG: 'Setze `Retain flag` immer',
  INACTIVE: 'Inaktiv',
  ACTIVE: 'Aktiv',
  UNKNOWN: 'Unbekannt',
  SET_TIME: 'Zeiteinstellung',
  SET_TIME_TEXT: 'Geben Sie das lokale Datum und die Zeit ein.',
  LOCAL_TIME: 'Lokalzeit',
  UTC_TIME: 'UTC Zeit',
  ENABLE_NTP: 'Aktiviere NTP',
  TIME_ZONE: 'Zeitzone',
  ACCESS_POINT: 'Zugangspunkt',
  AP_PROVIDE: 'Aktiviere Zugangspunkt',
  AP_PROVIDE_TEXT_1: 'Immer',
  AP_PROVIDE_TEXT_2: 'Wenn WiFi nicht verbunden',
  AP_PROVIDE_TEXT_3: 'Niemals',
  AP_PREFERRED_CHANNEL: 'Bevorzugter Kanal',
  AP_HIDE_SSID: 'Verstecke SSID',
  NETWORK_SCAN: 'Suche nach WiFi Netzwerken',
  IDLE: 'Leerlauf',
  LOST: 'Verloren',
  SCANNING: 'Suche',
  SCAN_AGAIN: 'Erneute Suche',
  NETWORK_SCANNER: 'Netzwerk Suche',
  NETWORK_NO_WIFI: 'Keine WiFi Netzwerke gefunden',
  NETWORK_BLANK_SSID: 'Freilassen um WiFi zu deaktivieren',
  POWER: 'Leistung',
  NETWORK_DISABLE_SLEEP: 'Deaktiviere WiFi Schlafmodus',
  NETWORK_LOW_BAND: 'Verwende niedrige WiFi Bandbreite',
  NETWORK_USE_DNS: 'Aktiviere mDNS Service',
  NETWORK_ENABLE_IPV6: 'Aktiviere IPv6 Unterstützung',
  NETWORK_FIXED_IP: 'Feste IP Addresse',
  ADMIN: 'Administrator',
  GUEST: 'Gast'
};

export default de;
