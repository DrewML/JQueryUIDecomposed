// Lots of duplication in this file because Magento core
// is inconsistent with its usage of module identifiers

var config = {
    map: {
        '*': {
            'jquery/ui': 'DrewML_JQueryUIDecomposed/jquery/compat',

            'menu': 'DrewML_JQueryUIDecomposed/hacks/menu',

            'translateInline': 'DrewML_JQueryUIDecomposed/hacks/translate-inline',
            'mage/translate-inline': 'DrewML_JQueryUIDecomposed/hacks/translate-inline',

            'priceBox': 'DrewML_JQueryUIDecomposed/hacks/price-box',
            'Magento_Catalog/js/price-box': 'DrewML_JQueryUIDecomposed/hacks/price-box',

            'sidebar': 'DrewML_JQueryUIDecomposed/hacks/sidebar',
            'Magento_Checkout/js/sidebar': 'DrewML_JQueryUIDecomposed/hacks/sidebar',

            'pageCache':  'DrewML_JQueryUIDecomposed/hacks/page-cache',
            'Magento_PageCache/js/page-cache': 'DrewML_JQueryUIDecomposed/hacks/page-cache',

            'quickSearch': 'DrewML_JQueryUIDecomposed/hacks/form-mini',
            'Magento_Search/form-mini': 'DrewML_JQueryUIDecomposed/hacks/form-mini',

            'Magento_Swatches/js/swatch-renderer': 'DrewML_JQueryUIDecomposed/hacks/swatch-renderer',

            'Magento_Ui/js/lib/knockout/bindings/range': 'DrewML_JQueryUIDecomposed/hacks/range',

            'Magento_Ui/js/lib/knockout/bindings/resizable': 'DrewML_JQueryUIDecomposed/hacks/resizable',

            'Magento_Ui/js/modal/alert': 'DrewML_JQueryUIDecomposed/hacks/alert',

            'Magento_Ui/js/modal/confirm': 'DrewML_JQueryUIDecomposed/hacks/confirm',

            'Magento_Ui/js/modal/modal': 'DrewML_JQueryUIDecomposed/hacks/modal',

            'mage/calendar': 'DrewML_JQueryUIDecomposed/hacks/calendar',

            'collapsible': 'DrewML_JQueryUIDecomposed/hacks/collapsible',
            'mage/collapsible': 'DrewML_JQueryUIDecomposed/hacks/collapsible',

            'mage/dataPost': 'DrewML_JQueryUIDecomposed/hacks/dataPost',

            'dropdownDialog':  'DrewML_JQueryUIDecomposed/hacks/dropdown',
            'mage/dropdown': 'DrewML_JQueryUIDecomposed/hacks/dropdown',

            'loader': 'DrewML_JQueryUIDecomposed/hacks/loader',
            'loaderAjax': 'DrewML_JQueryUIDecomposed/hacks/loader',
            'mage/loader': 'DrewML_JQueryUIDecomposed/hacks/loader',

            'tabs': 'DrewML_JQueryUIDecomposed/hacks/tabs',
            'mage/tabs': 'DrewML_JQueryUIDecomposed/hacks/tabs',

            // Wow...
            'validation': 'DrewML_JQueryUIDecomposed/hacks/validation',
            'mage/validation/validation': 'DrewML_JQueryUIDecomposed/hacks/validation',
            'mage/validation': 'DrewML_JQueryUIDecomposed/hacks/validation'
        }
    },
    paths: {
        'jquery-ui-modules': 'DrewML_JQueryUIDecomposed/jquery/ui-modules'
    },
    shim: {
        'jquery-ui-modules/dialog': ['jquery-ui-modules/core'],
        'jquery-ui-modules/slider': ['jquery-ui-modules/mouse']
    }
};
