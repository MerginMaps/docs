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
                '/manage/create-project/',
                '/manage/project-advanced',
                '/manage/modify-attribute-table/',
                '/manage/avoid-conflict-files/',
                '/manage/plugin-multi-server-use/',
                '/manage/plugin-sync-project',
                '/manage/dashboard',
                '/manage/project-details',
                '/manage/selective_sync/',
                '/manage/data_sync'
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
                '/gis/enable_browsing',
                '/gis/proj',
                '/gis/supported_formats'
            ]
        }, 
        {
            title: 'Configure Survey Layer',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/layer/settingup_forms',
                '/layer/settingup_forms_settings',
                '/layer/exif_metadata',
                '/layer/settingup_forms_photo',
                '/layer/attach-multiple-photos-to-features/',
                '/layer/position_variables',
                '/layer/plugin-variables',
                '/layer/working_with_nonspatial_data'
            ]
        }, 
        
        {
            title: 'Fieldwork Tips',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/field/gps_accuracy',
                '/field/external_gps',
                '/field/input_features',
                '/field/reuse-last-values/',
                '/field/input_ui',
                '/layer/working_with_nonspatial_data',
            ]
        }, 
        {
            title: 'For Developers',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/dev/customapp',
                '/dev/dbsync',
                '/dev/mergince',
                '/dev/integration'
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
