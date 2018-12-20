<?php
/**
 *
 * Fake_Profile Model - Profiles API
 *
 * @package ProfilesApi\Model\Fake_Profile
 * @author  Viktor Freitas
 * @since   0.1.0
 * @link    https://github.com/victorfreitas
 */

namespace ProfilesApi\Model;

if ( ! defined( 'ABSPATH' ) ) {
	exit( 0 );
}

class Fake_Profile {

	protected $profiles = [
		'rasmus' => [
			'first_name' => 'Rasmus',
			'last_name'  => 'Lerdorf',
			'bio'        => 'PHP',
			'phone'      => '555 555 5555',
		],
		'zeev'   => [
			'first_name' => 'Zeev',
			'last_name'  => 'Suraski',
			'bio'        => 'Zend Technologies',
			'phone'      => '777 777 7777',
		],
		'matt'   => [
			'first_name' => 'Matt',
			'last_name'  => 'Mullenweg',
			'bio'        => 'WordPress',
			'phone'      => '222 222 2222',
		],
	];

	protected $username;

	public function __construct( $username ) {
		$this->username = $username;
	}

	public function find() {
		if ( array_key_exists( $this->username, $this->profiles ) ) {
			return $this->profiles[ $this->username ];
		}

		return false;
	}
}



