module.exports = {
      '/': [
        ['', 'Home'], /* / */
        {
            title: 'Get started',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/tutorials/capturing-first-data/',
                '/tutorials/opening-surveyed-data-on-your-computer/',
                '/tutorials/creating-a-project-in-qgis/',
                '/tutorials/mobile/',
                '/tutorials/further-project-customisation/',
                '/tutorials/working-collaboratively/'
            ]
        },
        {
            title: 'Concepts',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/concepts/components',
                '/concepts/project',
                '/concepts/users-and-orgs',
                '/concepts/permissions',
                '/concepts/synchronisation',
                '/concepts/projections/'
            ]
        },
        {
            title: 'How to',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/howto/sign-up-to-mergin-maps/',
                '/howto/install-qgis/',
                '/howto/install-mergin-maps-plugin-for-qgis/',
		'/howto/create-project/',
                '/howto/exif_metadata',
                '/howto/customapp',
                '/howto/manage/troubleshoot',
                '/howto/manage/web/dashboard',
                '/howto/manage/web/working-with-organisations',
                '/howto/manage/web/project-advanced',
                '/howto/manage/web/project-details',
                '/howto/manage/web/subscriptions',
                '/howto/manage/plugin/plugin-delete-project',
                '/howto/manage/plugin/plugin-sync-project',
                '/howto/manage/plugin/plugin-variables',
                '/howto/integration',
                '/howto/gps_accuracy',
                '/howto/attach-multiple-photos-to-features/',
                '/howto/position_variables',
                '/howto/mergince',
                '/howto/input_ui',
                '/howto/external_gps',
                '/howto/data_sync',
                '/howto/contribute',
                '/howto/proj',
                '/howto/reuse_last_values',
                '/howto/input_features',
                '/howto/dbsync',
                '/howto/project/settingup_forms_photo',
                '/howto/project/enable_digitising',
                '/howto/project/search_data',
                '/howto/project/enable_browsing',
                '/howto/project/settingup_background_map',
                '/howto/project/working_with_nonspatial_data',
                '/howto/project/setup_themes',
                '/howto/project/selective_sync/',
                '/howto/project/settingup_forms_settings',
                '/howto/project/features',
                '/howto/project/settingup_forms'
            ]
        },
        {
            title: 'Reference',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/reference/licensing',
                '/reference/privacy'
            ]
        }
      ]
}
