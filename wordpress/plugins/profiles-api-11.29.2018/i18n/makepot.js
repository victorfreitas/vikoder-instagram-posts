const { join } = require('path')

module.exports = grunt => {
  grunt.initConfig({
    makepot: {
      target: {
        options: {
          domainPath: '/i18n/languages',
          exclude: ['vendor'],
          include: ['src/.*', 'includes/.*'],
          type: 'wp-plugin',
          potFilename: 'profiles-api.pot',
          updateTimestamp: true,
          updatePoFiles: true,
          processPot: pot => {
            var translation
            , excluded_meta = [
              'Plugin Name of the plugin/theme',
              'Description of the plugin/theme',
              'Plugin URI of the plugin/theme',
              'Author of the plugin/theme',
              'Author URI of the plugin/theme'
            ];

            for ( translation in pot.translations[''] ) {
              if ( typeof pot.translations[''][translation].comments.extracted != 'undefined' ) {
                if ( excluded_meta.indexOf( pot.translations[''][translation].comments.extracted ) >= 0 ) {
                  delete pot.translations[''][translation];
                }
              }
            }

            return pot;
          },
          potHeaders : {
            poedit: true,
            'language': 'pt_BR',
            'x-textdomain-support': 'yes',
            'last-translator': 'Viktor Freitas <viktorfreitas@bk.ru>',
            'language-team': 'Viktor Freitas <viktorfreitas@bk.ru>',
            'Report-Msgid-Bugs-To': false,
          }
        }
      }
    }
  })

  grunt.file.setBase(join(__dirname, '..'))
  grunt.loadNpmTasks('grunt-wp-i18n')
}
