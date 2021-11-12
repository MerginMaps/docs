module.exports = {
      '/': [
        ['', 'Home'], /* / */
        {
            title: 'Quick Start',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/tutorials/capturing-first-data/',
                '/tutorials/opening-surveyed-data-on-your-computer/',
                '/tutorials/creating-a-project-in-qgis/',
                '/tutorials/quick-start/',
                '/tutorials/mergin-tour/',
                '/tutorials/sharewithcollegues',
                '/tutorials/input-tour/',
                '/tutorials/analyzeresults'
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
            title: 'Guides',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/guides/howtosetuporganization',
                '/guides/multiplephotostopoint'
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
                '/concepts/projections/'
            ]
        },
        {
            title: 'Manage',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/manage/web/dashboard',
                '/manage/web/project-advanced',
                '/manage/web/project-details',
                '/manage/web/register',
                '/manage/web/subscriptions',
                '/manage/web/web-create-project',
                '/manage/web/working-with-organisations',
                '/manage/plugin/install',
                '/manage/plugin/plugin-delete-project',
                '/manage/plugin/plugin-new-project',
                '/manage/plugin/plugin-sync-project',
                '/manage/plugin/plugin-variables',
                '/manage/troubleshoot'
            ]
        },
        {
            title: 'Setup Project',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/project/features',
                '/project/enable_browsing',
                '/project/enable_digitizing',
                '/project/search_data',
                '/project/selective_sync',
                '/project/settingup_background_map',
                '/project/settingup_forms',
                '/project/settingup_forms_photo',
                '/project/settingup_forms_settings',
                '/project/setup_themes',
                '/project/working_with_nonspatial_data'
            ]
        },
        {
            title: 'Work Outside',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/fieldwork/input_ui',
                '/fieldwork/input_features',
                '/fieldwork/data_sync',
                '/fieldwork/exif_metadata',
                '/fieldwork/external_gps',
                '/fieldwork/gps_accuracy',
                '/fieldwork/position_variables',
                '/fieldwork/proj',
                '/fieldwork/reuse_last_values'
            ]
        },
        {
            title: 'Develop and Integrate',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/admin/customapp',
                '/admin/dbsync',
                '/admin/mergince',
                '/admin/integration',
                '/admin/contribute'
            ]
        },
      ]
}
