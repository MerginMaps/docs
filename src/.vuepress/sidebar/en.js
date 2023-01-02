module.exports = {
      '/': [
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
            title: 'Install & Sign Up',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/setup/install-input/',
                '/setup/sign-up-to-mergin-maps/',
                '/setup/install-qgis/',
                '/setup/install-mergin-maps-plugin-for-qgis/',
                '/setup/working-with-organisations/',
                '/setup/subscriptions/'
            ]
        },
        
        {
            title: 'Manage Account & Project',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/manage/permissions',
                '/manage/synchronisation',
                '/manage/project/',
                '/manage/create-project/',
                '/manage/project-advanced',
                '/manage/delete-files/',
                '/manage/deploy-new-project/',
                '/manage/missing-data/',
                '/manage/plugin-multi-server-use/',
                '/manage/plugin-sync-project',
                '/manage/dashboard',
                '/manage/project-details',
                '/manage/selective_sync/'
            ]
        }, 
        {
            title: 'Setup GIS Project',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/gis/features',
                '/gis/search_data',
                '/gis/settingup_background_map',
                '/gis/setup_themes',
                '/gis/enable_digitising',
                '/gis/snapping/',
                '/gis/proj',
                '/gis/supported_formats'
            ]
        }, 
        {
            title: 'Configure Survey Layer',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/layer/best-practice/', 
                '/layer/settingup_forms',
                '/layer/settingup_forms_settings',
                '/layer/exif_metadata',
                '/layer/settingup_forms_photo',
                '/layer/attach-multiple-photos-to-features/',
                '/layer/one-to-n-relations/',
                '/layer/external-link/',
                '/layer/working_with_nonspatial_data',
                '/layer/position_variables',
                '/layer/plugin-variables'
            ]
        }, 
        
        {
            title: 'Fieldwork Tips',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/field/external_gps',
                '/field/gps_accuracy',
                '/field/autosync/',
                '/field/layers/',
                '/field/input_features',
                '/field/reuse-last-values/',
                '/field/stake-out/',
                '/field/broken-project/',
                '/field/input_ui',
            ]
        }, 
        {
            title: 'For Developers',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/dev/customapp',
                '/dev/mergince',
                '/dev/integration',
                '/dev/dbsync',
                '/dev/media-sync/',
                '/dev/work-packages/',
                '/dev/geodiff/'
            ]
        },
        {
            title: 'Support & Legal',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/misc/licensing',
                '/misc/privacy',
                '/misc/troubleshoot',
                '/misc/contribute',
                '/misc/write-docs/'
            ]
        }
      ]
}
