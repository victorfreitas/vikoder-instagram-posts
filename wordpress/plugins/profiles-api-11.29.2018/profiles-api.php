<?php
/**
 *
 * Profiles API
 *
 * @package Profiles API
 * @author  Viktor Freitas
 * @since   0.1.0
 * @link    https://github.com/victorfreitas
 * @license GPL-3.0+
 *
 * @wordpress-plugin
 * Plugin Name: Profiles API
 * Plugin URI:  https://github.com/victorfreitas
 * Description: Profiles API
 * Version:     0.1.0
 * Author:      Viktor Freitas
 * Author URI:  https://github.com/victorfreitas
 * License:     GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: profiles-api
 * Domain Path: /i18n/languages
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit( 0 );
}

require_once dirname( __FILE__ ) . '/includes/functions.php';

if ( version_compare( phpversion(), '5.3', '<' ) ) {
	add_action( 'admin_notices', 'profiles_api_php_version_wrong' );
	return;
}

if ( ! file_exists( dirname( __FILE__ ) . '/vendor/autoload.php' ) ) {
	add_action( 'admin_notices', 'profiles_api_vendor_not_found' );
	return;
}

require_once dirname( __FILE__ ) . '/vendor/autoload.php';

if ( ! defined( 'PROFILES_API_PLUGIN_FILE' ) ) {
	define( 'PROFILES_API_PLUGIN_FILE', __FILE__ );
}

$app = ProfilesApi\Config\App::instance();

do_action( 'profiles_api_init', $app );

register_activation_hook( __FILE__, [ $app, 'activate' ] );
register_deactivation_hook( __FILE__, [ $app, 'deactivate' ] );
