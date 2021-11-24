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
                '/concepts/synchronization',
                '/concepts/projections/',
                '/concepts/home-page-and-dashboard/'
            ]
        },
        {
            title: 'How to',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/howto/sign-up-to-mergin-maps/',
                '/howto/install-qgis/',
                '/howto/install-mergin-maps-plugin-for-qgis/'
            ]
        },
        {
            title: 'For review',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/to-review/exif_metadata',
                '/to-review/customapp',
                '/to-review/manage/troubleshoot',
                '/to-review/manage/web/dashboard',
                '/to-review/manage/web/web-create-project',
                '/to-review/manage/web/register',
                '/to-review/manage/web/working-with-organisations',
                '/to-review/manage/web/project-advanced',
                '/to-review/manage/web/project-details',
                '/to-review/manage/web/subscriptions',
                '/to-review/manage/plugin/plugin-delete-project',
                '/to-review/manage/plugin/plugin-sync-project',
                '/to-review/manage/plugin/plugin-new-project',
                '/to-review/manage/plugin/plugin-variables',
                '/to-review/manage/plugin/install',
                '/to-review/integration',
                '/to-review/gps_accuracy',
                '/to-review/attach-multiple-photos-to-features/',
                '/to-review/input-tour/',
                '/to-review/create-an-organization/',
                '/to-review/mergin-tour/',
                '/to-review/position_variables',
                '/to-review/mergince',
                '/to-review/input_ui',
                '/to-review/external_gps',
                '/to-review/quick-start/',
                '/to-review/data_sync',
                '/to-review/contribute',
                '/to-review/proj',
                '/to-review/reuse_last_values',
                '/to-review/input_features',
                '/to-review/dbsync',
                '/to-review/project/settingup_forms_photo',
                '/to-review/project/enable_digitizing',
                '/to-review/project/search_data',
                '/to-review/project/enable_browsing',
                '/to-review/project/settingup_background_map',
                '/to-review/project/working_with_nonspatial_data',
                '/to-review/project/setup_themes',
                '/to-review/project/selective_sync',
                '/to-review/project/settingup_forms_settings',
                '/to-review/project/features',
                '/to-review/project/settingup_forms'
            ]
        },
        {
            title: 'Reference',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: []
        }
      ]
}
