module.exports = {
      '/': [
        ['', 'Home'], /* / */
        {
            title: 'Quick Start',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/tutorials/myfirststeps',
                '/tutorials/enhanceproject',
                '/tutorials/sharewithcollegues',
                '/tutorials/fieldwork',
                '/tutorials/analyzeresults'
            ]
        },
        {
            title: 'Guides',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
<<<<<<< HEAD
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
=======
                '/guides/howtosetuporganization',
                '/guides/multiplephotostopoint'
>>>>>>> c90c2e5 (try new left bar)
            ]
        },
        {
            title: 'Concepts',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/concepts/permissions',
                '/concepts/projections'
            ]
        },
        {
            title: 'Manage',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/management/install',
                '/management/register'
            ]
        },
        {
            title: 'Setup Project',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/project/setupforms',
                '/project/setupthemes'
            ]
        },
        {
            title: 'Work Outside',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/fieldwork/externalgps',
                '/fieldwork/reuselastvalues'
            ]
        },
        {
            title: 'Develop and Integrate',   // required
            collapsable: true, // optional, defaults to true
            sidebarDepth: 0,    // optional, defaults to 1
            children: [
                '/admin/customapp',
                '/admin/dbsync',
                '/admin/mergince'
            ]
        },
      ]
}
