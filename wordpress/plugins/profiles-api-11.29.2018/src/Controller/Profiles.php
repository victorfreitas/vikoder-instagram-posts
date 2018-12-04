<?php
/**
 *
 * Profiles Controller - Profiles API
 *
 * @package ProfilesApi\Controller\Profiles
 * @author  Viktor Freitas
 * @since   0.1.0
 * @link    https://github.com/victorfreitas
 */

namespace ProfilesApi\Controller;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 0 );
}

use WP_REST_Request;
use WP_Error;

use ProfilesApi\Model\Fake_Profile;

class Profiles extends Abstract_Rests {

	public $route = '/profile/(?<username>[a-z-.]+$)';

	protected function get_profile( $username ) {
		$fake_profile = new Fake_Profile( $username );

		return $fake_profile->find();
	}

	public function get_data( WP_REST_Request $request ) {
		$profile = $this->get_profile( $request->get_param( 'username' ) );

		if ( $profile ) {
			return $profile;
		}

		return new WP_Error(
			'invalid_username',
			__( 'Profile not found', 'profiles-api' ),
			[ 'status' => '404' ]
		);
	}
}
