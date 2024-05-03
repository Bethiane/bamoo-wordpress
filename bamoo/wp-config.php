<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bamoo' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',EH6%uZ3?kHlh9zJZN^.gAyR?b`*P/Oa1^`Z.}R21yv4#Sq,7/_wo@<,WW$QGIQJ' );
define( 'SECURE_AUTH_KEY',  'CVGA&!z5gy&cW($LDK1MM@:4,f}3zYxp+b?~D?h$^e^mxz;FC1]-maNryP)8<jtO' );
define( 'LOGGED_IN_KEY',    '$I|7bmN8*tv?}u3%1I]9yAZEdXsX Kz$:!IBmMd2IDDdczQA$V|)9N@OIOv}5BVB' );
define( 'NONCE_KEY',        '4>tDz^AuQ*yA?*5#Co.hU7+C*;x$OcCC%ZS2F07MXu:+y8~5PF%Z%fldXM,UoG5^' );
define( 'AUTH_SALT',        '@4vhr3<_@zVF6FL3&}Zh2bfRoBwE(J:x[{KE{]mKMJAJG]<SY8zMANbshnD9J(~9' );
define( 'SECURE_AUTH_SALT', 'WYnw$CxpY@N64n@djjOp`*2^8<--%L;j%BxV  dB39|w=F8r~;Y%U7D(<>#0K45w' );
define( 'LOGGED_IN_SALT',   '*pW>/EPTX~OKgBj(Gs1/ZYLycd7VLcD[^**ogXvh0mi$}EM0_sxKD:7Xqcf}oe>*' );
define( 'NONCE_SALT',       'Dq(LB(BaDL2gemKkOAoE;Kj+n+Xkf?]q<n3Euv$~(URBplQCaH7<jmg!F@jB^V=D' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
