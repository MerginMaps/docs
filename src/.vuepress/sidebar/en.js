module.exports = {
    '/guides/': [
      {
        title: 'Beginners',   // required
        path: '/foo/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          'input-tour/',
          'mergin-tour/'
        ]
      },
      {
        title: 'Advanced',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      },
      {
        title: 'Expert',
        children: [
            'datum-shift/'
        ],
        initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      }
    ],
    '/components/': [
        {
            title: 'Server and Cloud',
            path: '/components/web/',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                '/components/web/',
                '/components/web/dashboard',
                '/components/web/project-advanced',
                '/components/web/project-details',
                '/components/web/subscriptions',
                '/components/web/web-create-project',
                '/components/web/working-with-organisations'
            ]
        },
        {
            title: 'Mobile Input App',
            path: '/components/mobile/',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                '/components/mobile/',
                '/components/mobile/input_ui',
                '/components/mobile/proj',
                '/components/mobile/data_sync',
                '/components/mobile/exif_metadata',
                '/components/mobile/external_gps',
                '/components/mobile/gps_accuracy',
                '/components/mobile/position_variables',
                '/components/mobile/reuse_last_values',
                '/components/mobile/selective_sync'
            ]
        },
        {
            title: 'QGIS Plugin',
            path: '/components/plugin/',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                '/components/plugin/',
                '/components/plugin/plugin-delete-project',
                '/components/plugin/plugin-new-project',
                '/components/plugin/plugin-sync-project',
                '/components/plugin/plugin-variables'
            ]
        },
        {
            title: 'Project Preparation',
            path: '/components/qgis/',
            collapsable: true,
            sidebarDepth: 2,
            children: [
                '/components/qgis/',
                '/components/qgis/enable_browsing',
                '/components/qgis/enable_digitizing',
                '/components/qgis/search_data',
                '/components/qgis/settingup_background_map',
                '/components/qgis/settingup_forms',
                '/components/qgis/settingup_forms_photo',
                '/components/qgis/settingup_forms_settings',
                '/components/qgis/setup_themes',
                '/components/qgis/working_with_nonspatial_data'
            ]
        }
    ],
    '/integrations/': [
        'commandline',
        'customapp',
        'postgresql',
        'webhooks'
    ],
    // fallback
    '/': [
        'quick-start/',
        'concepts',
        'faq',
        'resources',
        'support'
    ]
}
