<?php
/**
 *
 * Abstract_Rests Controller - Profiles API
 *
 * @package ProfilesApi\Controller\Abstract_Rests
 * @author  Viktor Freitas
 * @since   0.1.0
 * @link    https://github.com/victorfreitas
 */

namespace ProfilesApi\Controller;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 0 );
}

use WP_REST_Server;
use WP_REST_Request;

use ProfilesApi\Model\Rest;

abstract class Abstract_Rests {

	protected $route;

	protected $namespace = Rest::NAMESPACE;

	protected $args = [];

	public function __construct() {
		add_action( 'rest_api_init', [ $this, 'register_routes' ] );
	}

	public function register_routes() {
		register_rest_route(
			$this->namespace,
			$this->route,
			wp_parse_args( $this->args, [
				'methods'  => WP_REST_Server::READABLE,
				'callback' => [ $this, 'get_data' ],
			] )
		);
	}

	abstract protected function get_data( WP_REST_Request $request );
}
