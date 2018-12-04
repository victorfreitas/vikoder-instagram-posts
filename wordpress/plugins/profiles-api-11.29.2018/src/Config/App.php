<?php
/**
 *
 * General configurations of the application
 *
 * @package ProfilesApi\Config\App
 * @author  Viktor Freitas
 * @since   0.1.0
 * @link    https://github.com/victorfreitas
 */

namespace ProfilesApi\Config;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 0 );
}

class App extends Loader {

	private static $_instance = null;

	public $namespace = 'ProfilesApi';

	const VERSION = '0.1.0';

	const SLUG = 'profiles-api';

	public function setup() {
		$this->init_controllers( [
			'Profiles',
		] );
	}

	public function activate() {

	}

	public function deactivate() {

	}

	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}
}
