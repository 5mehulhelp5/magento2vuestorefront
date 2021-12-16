import gql from 'graphql-tag';

export default gql`
  query availableStores {
      availableStores {
          absolute_footer
          allow_guests_to_write_product_reviews
          allow_items
          allow_order
          autocomplete_on_storefront
          base_currency_code
          base_link_url
          base_media_url
          base_static_url
          base_url
          catalog_default_sort_by
          category_fixed_product_tax_display_setting
          category_url_suffix
          cms_home_page
          cms_no_cookies
          cms_no_route
          code
          configurable_thumbnail_source
          copyright
          default_description
          default_display_currency_code
          default_keywords
          default_title
          front
          grid_per_page
          grid_per_page_values
          head_includes
          head_shortcut_icon
          header_logo_src
          id
          is_default_store
          is_default_store_group
          list_mode
          list_per_page
          list_per_page_values
          locale
          logo_alt
          logo_height
          logo_width
          magento_wishlist_general_is_enabled
          minimum_password_length
          no_route
          payment_payflowpro_cc_vault_active
          product_fixed_product_tax_display_setting
          product_reviews_enabled
          product_url_suffix
          required_character_classes_number
          root_category_id
          root_category_uid
          sales_fixed_product_tax_display_setting
          secure_base_link_url
          secure_base_media_url
          secure_base_static_url
          secure_base_url
          show_cms_breadcrumbs
          store_code
          store_group_code
          store_group_name
          store_name
          store_sort_order
          timezone
          title_prefix
          title_separator
          title_suffix
          use_store_in_url
          website_code
          website_id
          website_name
          weight_unit
          welcome
      }
  }
`;