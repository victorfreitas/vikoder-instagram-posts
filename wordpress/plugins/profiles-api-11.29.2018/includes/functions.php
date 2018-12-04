<?php
/**
 *
 * Functions loaded
 *
 * @package includes\functions.php
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit( 0 );
}

if ( ! function_exists( 'profiles_api_admin_notice' ) ) :
	function profiles_api_admin_notice( $message, $type = 'error' ) {
	?>
		<div class="<?php echo esc_attr( $type ); ?> notice is-dismissible">
			<p>
				<strong><?php esc_html_e( 'Profiles API plugin: ', 'profiles-api' ); ?></strong>

				<?php echo $message; // wpcs: XSS ok! ?>
			</p>
		</div>
	<?php
	}
endif;

if ( ! function_exists( 'profiles_api_php_version_wrong' ) ) :
	function profiles_api_php_version_wrong() {
		/* translators: %s: phpversion() */
		profiles_api_admin_notice( sprintf( esc_html__( 'Your PHP version (%s) is not supported. Required is 5.3+', 'profiles-api' ), phpversion() ) );
	}
endif;

if ( ! function_exists( 'profiles_api_vendor_not_found' ) ) :
	function profiles_api_vendor_not_found() {
		profiles_api_admin_notice( wp_kses( __( 'Please install plugin dependencies. Use <code>composer install</code>', 'profiles-api' ), [ 'code' => true ] ) );
	}
endif;
