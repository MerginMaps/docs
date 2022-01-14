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
        
        /*
        {
            title: 'Guides',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [

            ]
        },
        */
        
        {
            title: 'Project Management',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/manage/sign-up-to-mergin-maps/',
                '/manage/install-qgis/',
                '/manage/install-mergin-maps-plugin-for-qgis/',
                '/manage/create-project/',
                '/manage/dashboard',
                '/manage/working-with-organisations',
                '/manage/project-advanced',
                '/manage/project-details',
                '/manage/subscriptions',
                '/manage/plugin-delete-project',
                '/manage/plugin-sync-project',
                '/manage/selective_sync/',
            ]
        }, 
        
        {
            title: 'Configure GIS Project',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/project/gps_accuracy',
                '/project/input_ui',
                '/project/external_gps',
                '/project/data_sync',
                '/project/proj',
                '/project/input_features',
                '/project/enable_digitising',
                '/project/search_data',
                '/project/enable_browsing',
                '/project/settingup_background_map',
                '/project/setup_themes',
                '/project/features',
                '/project/plugin-variables',
            ]
        }, 
                
        {
            title: 'Survey Forms Setup',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/forms/settingup_forms'
                '/forms/settingup_forms_settings',
                '/forms/exif_metadata',
                '/forms/working_with_nonspatial_data',
                '/forms/settingup_forms_photo',
                '/forms/reuse_last_values',
                '/forms/attach-multiple-photos-to-features/',
                '/forms/position_variables/',
            ]
        }, 
        
        {
            title: 'Mergin Maps Concepts',   // required
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
            title: 'For Developers',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/dev/customapp',
                '/dev/dbsync',
                '/dev/mergince',
                '/dev/integration',
            ]
        },
        
        {
            title: 'Support & Legal',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/misc/licensing',
                '/misc/privacy'
                '/misc/troubleshoot',
                '/misc/contribute',
            ]
        }
      ]
}
