<?php

class ITL_Importer {

    public $demo_packages = '';

    public function __construct() {
        add_action( 'init', array( $this, 'setup' ), 5 );

        add_action('admin_menu', [$this, 'itl_demo_importer_page']);
        add_action('admin_head', [$this, 'add_menu_classes']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_scripts']);
        add_action('wp_ajax_import_demo', [$this, 'ajax_import_demo']);
    }

    public function setup() {
        $this->demo_packages = $this->get_demo_packages();
    }

    public function itl_demo_importer_page() {
        add_theme_page( __( 'Demo Importer', 'it-listings' ), __( 'Demo Importer', 'it-listings' ), 'switch_themes', 'demo-importer', array( $this, 'demo_importer' ) );
    }

    /**
	 * Demo Importer page output.
	 */
	public function demo_importer() {
        $demos = $this->ajax_query_demos( true );
		include_once ITL_PATH . '/inc/admin/html-admin-page-importer.php';
	}

    /**
	 * Adds the class to the menu.
	 */
	public function add_menu_classes() {
		global $submenu;
		if ( isset( $submenu['themes.php'] ) ) {
			$submenu_class = 'demo-importer hide-if-no-js';

			// Add menu classes if user has access.
			if ( apply_filters( 'indi_demo_importer_include_class_in_menu', true ) ) {
				foreach ( $submenu['themes.php'] as $order => $menu_item ) {
					if ( 0 === strpos( $menu_item[0], _x( 'Demo Importer', 'Admin menu name', 'indi-demo-importer' ) ) ) {
						$submenu['themes.php'][ $order ][4] = empty( $menu_item[4] ) ? $submenu_class : $menu_item[4] . ' ' . $submenu_class;
						break;
					}
				}
			}
		}
	}

    public function enqueue_scripts() {
        $screen = get_current_screen();
        $screen_id   = $screen ? $screen->id : '';
        $assets_path = ITL_URL . '/assets/';

        global $pagenow;
        
        // Register admin styles.
		wp_register_style( 'jquery-confirm', $assets_path . 'css/jquery-confirm.css', array(), ITL_VERSION );
		wp_register_style( 'indi-demo-importer', $assets_path . 'css/demo-importer.css', array( 'jquery-confirm' ), ITL_VERSION );

        // Register admin scripts.
		wp_register_script( 'jquery-tiptip', $assets_path . 'js/jquery.tipTip.js', array( 'jquery' ), ITL_VERSION, true );
		wp_register_script( 'jquery-confirm', $assets_path . 'js/jquery-confirm.js', array( 'jquery' ), ITL_VERSION, true );
		wp_register_script( 'indi-demo-updates', $assets_path . 'js/demo-updates.js', array( 'jquery', 'updates', 'wp-i18n' ), ITL_VERSION, true );
        
        if ('appearance_page_demo-importer' == $screen_id) {
            wp_register_script( 'indi-demo-importer', $assets_path . 'js/demo-importer.js', array( 'jquery', 'jquery-tiptip', 'wp-backbone', 'wp-a11y', 'indi-demo-updates', 'jquery-confirm' ), ITL_VERSION, true );

            wp_enqueue_style('indi-demo-importer');
            wp_enqueue_script('indi-demo-importer');
        }

        $data = array(
            'action'    =>  'import_demo',
            'nonce'     =>  wp_create_nonce('updates')
        );

        wp_localize_script('indi-demo-importer', 'demoImport', $data);
    }


    /**
     * Ajax handler for getting demos from github.
     */
    public function ajax_query_demos( $return = true ) {
        $prepared_demos        = array();
        $current_template      = get_option( 'template' );
        $current_theme_name    = wp_get_theme()->get( 'Name' );
        $current_theme_version = wp_get_theme()->get( 'Version' );
        $is_pro_theme_demo     = strpos( $current_template, '-pro' ) !== false || strpos( $current_template, '-plus' ) !== false;
        $demo_activated_id     = get_option( 'indi_demo_importer_activated_id' );
        $available_packages    = $this->get_demo_packages();
        // Condition if child theme is being used.
        if ( is_child_theme() ) {
            $current_theme_name    = wp_get_theme()->parent()->get( 'Name' );
            $current_theme_version = wp_get_theme()->parent()->get( 'Version' );
        }

        /**
         * Filters demo data before it is prepared for JavaScript.
         *
         * @param array      $prepared_demos     An associative array of demo data. Default empty array.
         * @param null|array $available_packages An array of demo package config to prepare, if any.
         * @param string     $demo_activated_id  The current demo activated id.
         */
        $prepared_demos = (array) apply_filters( 'indi_demo_importer_pre_prepare_demos_for_js', array(), $available_packages, $demo_activated_id );

        if ( ! empty( $prepared_demos ) ) {
            return $prepared_demos;
        }

        if ( ! $return ) {
            $request = wp_parse_args(
                wp_unslash( $_REQUEST['request'] ),
                array(
                    'browse' => 'all',
                )
            );
        } else {
            $request = array(
                'browse' => 'all',
            );
        }

        if ( isset( $available_packages->demos ) ) {
            
            foreach ( $available_packages->demos as $package_slug => $package_data ) {
                
                $screenshot_url = "https://storage.googleapis.com/indithemes/resources/{$available_packages->slug}/{$package_slug}/screenshot.jpg";

                // Prepare all demos.
                $prepared_demos[ $package_slug ] = array(
                    'slug'              => $package_slug,
                    'name'              => $package_data->title,
                    'theme'             => $this->is_pro_theme_demo( $current_template, $available_packages->name ),
                    'isPro'             => !empty( $package_data->isPro ) ?? true,
                    'active'            => $package_slug === $demo_activated_id,
                    'author'            => isset( $package_data->author ) ? $package_data->author : __( 'IndiThemes', 'it-listings' ),
                    'version'           => isset( $package_data->version ) ? $package_data->version : $available_packages->version,
                    'description'       => isset( $package_data->description ) ? $package_data->description : '',
                    'homepage'          => $package_data->homepage,
                    'preview_url'       => set_url_scheme( $package_data->preview ),
                    'screenshot_url'    => $screenshot_url,
                    'requiredTheme'     => isset( $package_data->template ) && ! in_array( $current_template, $package_data->template, true )
                );
            }
        }

        /**
         * Filters the demos prepared for JavaScript.
         *
         * Could be useful for changing the order, which is by name by default.
         *
         * @param array $prepared_demos Array of demos.
         */
        
        $prepared_demos = apply_filters( 'indi_demo_importer_prepare_demos_for_js', $prepared_demos );
        $prepared_demos = array_values( $prepared_demos );
        if ( $return ) {
            return $prepared_demos;
        }

        wp_send_json_success(
            array(
                'info'  => array(
                    'page'    => 1,
                    'pages'   => 1,
                    'results' => count( $prepared_demos ),
                ),
                'demos' => array_filter( $prepared_demos ),
            )
        );
    }

    	/**
	 * Check for Zakra Premium theme plan.
	 *
	 * @return bool
	 */
	public function is_pro_theme_demo( $template, $name ) {
		if ( strpos( $template, '-pro' ) !== false ) {
			return sprintf('%s Pro', $name );
		}
		else if ( strpos( $template, '-plus' ) !== false ) {
			return sprintf('%s Plus', $name );
		}
		else {
			return $name;
		}

		return false;

	}


    /**
	 * Get demo packages.
	 *
	 * @return array of objects
	 */
	private function get_demo_packages() {
		$packages = get_transient( 'indi_demo_importer_packages' );
		$template = strtolower( str_replace( ['-pro', '-plus'], '', get_option( 'template' ) ) );
        
		if ( false === $packages || ( isset( $packages->slug ) && $template !== $packages->slug ) ) {
			$raw_packages = wp_safe_remote_get( "https://storage.googleapis.com/indithemes/configs/{$template}.json" );

			if ( ! is_wp_error( $raw_packages ) ) {
				$packages = json_decode( wp_remote_retrieve_body( $raw_packages ) );

				if ( $packages ) {
					set_transient( 'indi_demo_importer_packages', $packages, WEEK_IN_SECONDS );
				}
			}
		}
        
		return apply_filters( 'indi_demo_importer_packages_' . $template, $packages );
	}

    /**
	 * Ajax handler for importing a demo.
	 *
	 * @see Indi_Demo_Upgrader
	 *
	 * @global WP_Filesystem_Base $wp_filesystem Subclass
	 */
	public function ajax_import_demo() {

        if (!wp_verify_nonce( $_POST['nonce'], 'updates' ) ) {
            return;
        }

		if ( empty( $_POST['slug'] ) ) {
			wp_send_json_error(
				array(
					'slug'         => '',
					'errorCode'    => 'no_demo_specified',
					'errorMessage' => __( 'No demo specified.', 'indi-demo-importer' ),
				)
			);
		}

		$slug   = sanitize_key( wp_unslash( $_POST['slug'] ) );
		$status = array(
			'import' => 'demo',
			'slug'   => $slug,
		);

		if ( ! defined( 'WP_LOAD_IMPORTERS' ) ) {
			define( 'WP_LOAD_IMPORTERS', true );
		}

		if ( ! current_user_can( 'import' ) ) {
			$status['errorMessage'] = __( 'Sorry, you are not allowed to import content.', 'indi-demo-importer' );
			wp_send_json_error( $status );
		}

		include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
		include_once ITL_PATH . '/inc/admin/class-demo-pack-upgrader.php';
        
		$skin     = new WP_Ajax_Upgrader_Skin();
		$upgrader = new Indi_Demo_Pack_Upgrader( $skin );
		$template = strtolower( str_replace( ['-pro', '-plus'], '', get_option( 'template' ) ) );
		$packages = isset( $this->demo_packages->demos ) ? json_decode( wp_json_encode( $this->demo_packages->demos ), true ) : array();
		var_dump("https://storage.googleapis.com/indithemes/packages/{$template}/{$slug}.zip");
    	$result   = $upgrader->install( "https://storage.googleapis.com/indithemes/packages/{$template}/{$slug}.zip" );

		if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
			$status['debug'] = $skin->get_upgrade_messages();
		}

		if ( is_wp_error( $result ) ) {
			$status['errorCode']    = $result->get_error_code();
			$status['errorMessage'] = $result->get_error_message();
			wp_send_json_error( $status );
		} elseif ( is_wp_error( $skin->result ) ) {
			$status['errorCode']    = $skin->result->get_error_code();
			$status['errorMessage'] = $skin->result->get_error_message();
			wp_send_json_error( $status );
		} elseif ( $skin->get_errors()->get_error_code() ) {
			$status['errorMessage'] = $skin->get_error_messages();
			wp_send_json_error( $status );
		} elseif ( is_null( $result ) ) {
			global $wp_filesystem;

			$status['errorCode']    = 'unable_to_connect_to_filesystem';
			$status['errorMessage'] = __( 'Unable to connect to the filesystem. Please confirm your credentials.', 'indi-demo-importer' );

			// Pass through the error from WP_Filesystem if one was raised.
			if ( $wp_filesystem instanceof WP_Filesystem_Base && is_wp_error( $wp_filesystem->errors ) && $wp_filesystem->errors->get_error_code() ) {
				$status['errorMessage'] = esc_html( $wp_filesystem->errors->get_error_message() );
			}

			wp_send_json_error( $status );
		}

		$demo_data            = $packages[ $slug ];
		$status['demoName']   = $demo_data['title'];
		$status['previewUrl'] = get_site_url( null, '/' );

		do_action( 'indi_ajax_before_demo_import' );

		if ( ! empty( $demo_data ) ) {
			$this->import_dummy_xml( $slug, $demo_data, $status );
			$this->import_core_options( $slug, $demo_data );
			// $this->import_elementor_schemes( $slug, $demo_data );
			$this->import_customizer_data( $slug, $demo_data, $status );
			$this->import_widget_settings( $slug, $demo_data, $status );

			// Update imported demo ID.
			update_option( 'indi_demo_importer_activated_id', $slug );
			do_action( 'indi_ajax_demo_imported', $slug, $demo_data );
		}

		wp_send_json_success( $status );
	}


    /**
	 * Import dummy content from a XML file.
	 *
	 * @param  string $demo_id
	 * @param  array  $demo_data
	 * @param  array  $status
	 * @return bool
	 */
	public function import_dummy_xml( $demo_id, $demo_data, $status ) {
		$import_file = $this->get_import_file_path( 'dummy-data.xml' );

		// Load Importer API.
		require_once ABSPATH . 'wp-admin/includes/import.php';

		if ( ! class_exists( 'WP_Importer' ) ) {
			$class_wp_importer = ABSPATH . 'wp-admin/includes/class-wp-importer.php';

			if ( file_exists( $class_wp_importer ) ) {
				require $class_wp_importer;
			}
		}

		// Include WXR Importer.
		require ITL_PATH . '/inc/importers/wordpress-importer/class-wxr-importer.php';

		do_action( 'indi_ajax_before_dummy_xml_import', $demo_data, $demo_id );

		// Import XML file demo content.
		if ( is_file( $import_file ) ) {
			$wp_import                    = new Indi_WXR_Importer();
			$wp_import->fetch_attachments = true;

			ob_start();
			$wp_import->import( $import_file );
			ob_end_clean();

			do_action( 'indi_ajax_dummy_xml_imported', $demo_data, $demo_id );

			flush_rewrite_rules();
		} else {
			$status['errorMessage'] = __( 'The XML file dummy content is missing.', 'it-listings' );
			wp_send_json_error( $status );
		}

		return true;
	}


    /**
	 * Get the import file path.
	 *
	 * @param  string $filename File name.
	 * @return string The import file path.
	 */
	private function get_import_file_path( $filename ) {
		return trailingslashit( ITL_DEMO_DIR . '/dummy-data' ) . sanitize_file_name( $filename );
	}


    /**
	 * Import site core options from its ID.
	 *
	 * @param  string $demo_id
	 * @param  array  $demo_data
	 * @return bool
	 */
	public function import_core_options( $demo_id, $demo_data ) {
		if ( ! empty( $demo_data['core_options'] ) ) {
			foreach ( $demo_data['core_options'] as $option_key => $option_value ) {
				if ( ! in_array( $option_key, array( 'blogname', 'blogdescription', 'show_on_front', 'page_on_front', 'page_for_posts' ) ) ) {
					continue;
				}

				// Format the value based on option key.
				switch ( $option_key ) {
					case 'show_on_front':
						if ( in_array( $option_value, array( 'posts', 'page' ) ) ) {
							update_option( 'show_on_front', $option_value, true );
						}
						break;
					case 'page_on_front':
					case 'page_for_posts':
						$page = get_page_by_title( $option_value, true );

						if ( is_object( $page ) && $page->ID ) {
							update_option( $option_key, $page->ID );
							update_option( 'show_on_front', 'page' );
						}
						break;
					default:
						update_option( $option_key, sanitize_text_field( $option_value ) );
						break;
				}
			}
		}

		return true;
	}


    /**
	 * Import customizer data from a DAT file.
	 *
	 * @param  string $demo_id
	 * @param  array  $demo_data
	 * @param  array  $status
	 * @return bool
	 */
	public function import_customizer_data( $demo_id, $demo_data, $status ) {
		$import_file = $this->get_import_file_path( 'dummy-customizer.dat' );

		if ( is_file( $import_file ) ) {
			$results = Indi_Customizer_Importer::import( $import_file, $demo_id, $demo_data );

			if ( is_wp_error( $results ) ) {
				return false;
			}
		} else {
			$status['errorMessage'] = __( 'The DAT file customizer data is missing.', 'indi-demo-importer' );
			wp_send_json_error( $status );
		}

		return true;
	}

	/**
	 * Import widgets settings from WIE or JSON file.
	 *
	 * @param  string $demo_id
	 * @param  array  $demo_data
	 * @param  array  $status
	 * @return bool
	 */
	public function import_widget_settings( $demo_id, $demo_data, $status ) {
		$import_file = $this->get_import_file_path( 'dummy-widgets.wie' );

		if ( is_file( $import_file ) ) {
			$results = Indi_Widget_Importer::import( $import_file, $demo_id, $demo_data );

			if ( is_wp_error( $results ) ) {
				return false;
			}
		} else {
			$status['errorMessage'] = __( 'The WIE file widget content is missing.', 'indi-demo-importer' );
			wp_send_json_error( $status );
		}

		return true;
	}

	/**
	 * Update custom nav menu items URL.
	 */
	public function update_nav_menu_items() {
		$menu_locations = get_nav_menu_locations();

		foreach ( $menu_locations as $location => $menu_id ) {

			if ( is_nav_menu( $menu_id ) ) {
				$menu_items = wp_get_nav_menu_items( $menu_id, array( 'post_status' => 'any' ) );

				if ( ! empty( $menu_items ) ) {
					foreach ( $menu_items as $menu_item ) {
						if ( isset( $menu_item->url ) && isset( $menu_item->db_id ) && 'custom' == $menu_item->type ) {
							$site_parts = parse_url( home_url( '/' ) );
							$menu_parts = parse_url( $menu_item->url );

							// Update existing custom nav menu item URL.
							if ( isset( $menu_parts['path'] ) && isset( $menu_parts['host'] ) && apply_filters( 'indi_demo_importer_nav_menu_item_url_hosts', in_array( $menu_parts['host'], array( 'demo.indithemes.com' ) ) ) ) {
								$menu_item->url = str_replace( array( $menu_parts['scheme'], $menu_parts['host'], $menu_parts['path'] ), array( $site_parts['scheme'], $site_parts['host'], trailingslashit( $site_parts['path'] ) ), $menu_item->url );
								update_post_meta( $menu_item->db_id, '_menu_item_url', esc_url_raw( $menu_item->url ) );
							}
						}
					}
				}
			}
		}
	}

	/**
	 * Updates widgets settings data.
	 *
	 * @param  array  $widget
	 * @param  string $widget_type
	 * @param  int    $instance_id
	 * @param  array  $demo_data
	 * @return array
	 */
	public function update_widget_data( $widget, $widget_type, $instance_id, $demo_data ) {
		if ( 'nav_menu' === $widget_type ) {
			$menu     = isset( $widget['title'] ) ? $widget['title'] : $widget['nav_menu'];
			$nav_menu = wp_get_nav_menu_object( $menu );

			if ( is_object( $nav_menu ) && $nav_menu->term_id ) {
				$widget['nav_menu'] = $nav_menu->term_id;
			}
		} elseif ( ! empty( $demo_data['widgets_data_update'] ) ) {
			foreach ( $demo_data['widgets_data_update'] as $dropdown_type => $dropdown_data ) {
				if ( ! in_array( $dropdown_type, array( 'dropdown_pages', 'dropdown_categories' ), true ) ) {
					continue;
				}

				// Format the value based on dropdown type.
				switch ( $dropdown_type ) {
					case 'dropdown_pages':
						foreach ( $dropdown_data as $widget_id => $widget_data ) {
							if ( ! empty( $widget_data[ $instance_id ] ) && $widget_id === $widget_type ) {
								foreach ( $widget_data[ $instance_id ] as $widget_key => $widget_value ) {
									$page = get_page_by_title( $widget_value );

									if ( is_object( $page ) && $page->ID ) {
										$widget[ $widget_key ] = $page->ID;
									}
								}
							}
						}
						break;
					default:
					case 'dropdown_categories':
						foreach ( $dropdown_data as $taxonomy => $taxonomy_data ) {
							if ( ! taxonomy_exists( $taxonomy ) ) {
								continue;
							}

							foreach ( $taxonomy_data as $widget_id => $widget_data ) {
								if ( ! empty( $widget_data[ $instance_id ] ) && $widget_id === $widget_type ) {
									foreach ( $widget_data[ $instance_id ] as $widget_key => $widget_value ) {
										$term = get_term_by( 'name', $widget_value, $taxonomy );

										if ( is_object( $term ) && $term->term_id ) {
											$widget[ $widget_key ] = $term->term_id;
										}
									}
								}
							}
						}
						break;
				}
			}
		}

		return $widget;
	}

	/**
	 * Update customizer settings data.
	 *
	 * @param  array $data
	 * @param  array $demo_data
	 * @return array
	 */
	public function update_customizer_data( $data, $demo_data ) {
		if ( ! empty( $demo_data['customizer_data_update'] ) ) {
			foreach ( $demo_data['customizer_data_update'] as $data_type => $data_value ) {
				if ( ! in_array( $data_type, array( 'pages', 'categories', 'nav_menu_locations' ) ) ) {
					continue;
				}

				// Format the value based on data type.
				switch ( $data_type ) {
					case 'pages':
						foreach ( $data_value as $option_key => $option_value ) {
							if ( ! empty( $data['mods'][ $option_key ] ) ) {
								$page = get_page_by_title( $option_value );

								if ( is_object( $page ) && $page->ID ) {
									$data['mods'][ $option_key ] = $page->ID;
								}
							}
						}
						break;
					case 'categories':
						foreach ( $data_value as $taxonomy => $taxonomy_data ) {
							if ( ! taxonomy_exists( $taxonomy ) ) {
								continue;
							}

							foreach ( $taxonomy_data as $option_key => $option_value ) {
								if ( ! empty( $data['mods'][ $option_key ] ) ) {
									$term = get_term_by( 'name', $option_value, $taxonomy );

									if ( is_object( $term ) && $term->term_id ) {
										$data['mods'][ $option_key ] = $term->term_id;
									}
								}
							}
						}
						break;
					case 'nav_menu_locations':
						$nav_menus = wp_get_nav_menus();

						if ( ! empty( $nav_menus ) ) {
							foreach ( $nav_menus as $nav_menu ) {
								if ( is_object( $nav_menu ) ) {
									foreach ( $data_value as $location => $location_name ) {
										if ( $nav_menu->name == $location_name ) {
											$data['mods'][ $data_type ][ $location ] = $nav_menu->term_id;
										}
									}
								}
							}
						}
						break;
				}
			}
		}

		return $data;
	}
}

$instance = new ITL_Importer();