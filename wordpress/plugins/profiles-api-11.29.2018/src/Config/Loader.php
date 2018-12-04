<?php
/**
 *
 * Loader for instances of controllers and application abstraction
 *
 * @package ProfilesApi\Config\Loader
 * @author  Viktor Freitas
 * @since   0.1.0
 * @link    https://github.com/victorfreitas
 */

namespace ProfilesApi\Config;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 0 );
}

abstract class Loader {

	protected function __construct() {
		$this->setup();
	}

	protected function setup() {

	}

	public function init_controllers( $controllers ) {
		foreach ( $controllers as $controller ) :
			$this->instance_controller(
				sprintf( '%s\Controller\%s', $this->namespace, $controller )
			);
		endforeach;
	}

	private function instance_controller( $class ) {
		if ( class_exists( $class ) ) {
			new $class();
		}
	}

	public static function get_plugin_file() {
		return PROFILES_API_PLUGIN_FILE;
	}
}
