export default {
  '/': [
    {
      text: 'Get Started',   // required
      collapsed: true,
      items: [
        { text: 'Capturing Your First Field Data', link: '/tutorials/capturing-first-data/' },
        { text: 'Opening Surveyed Data on Your Computer', link: '/tutorials/opening-surveyed-data-on-your-computer/' },
        { text: 'Creating a Project in QGIS', link: '/tutorials/creating-a-project-in-qgis/' },
        { text: 'Using Mergin Maps Mobile App', link: '/tutorials/mobile/' },
        { text: 'Further Project Customisation', link: '/tutorials/further-project-customisation/' },
        { text: 'Working Collaboratively', link: '/tutorials/working-collaboratively/' }
      ]
    },
    {
      text: 'Install & Sign Up',   // required
      collapsed: true,
      items: [
        { text: 'How to Install Mergin Maps Mobile App', link: '/setup/install-mobile-app/' },
        { text: 'How to Sign Up to Mergin Maps', link: '/setup/sign-up-to-mergin-maps/' },
        { text: 'How to Install QGIS', link: '/setup/install-qgis/' },
        { text: 'How to Install Mergin Maps Plugin for QGIS', link: '/setup/install-mergin-maps-plugin-for-qgis/' }
      ]
    },
    {
      text: 'Manage Account & Project',   // required
      collapsed: true,
      items: [
        { text: 'User Account', link: '/manage/account/' },
        { text: 'Workspaces', link: '/manage/workspaces/' },
        { text: 'Subscriptions and Invoicing', link: '/manage/subscriptions/' },
        { text: 'Member Roles and Permissions', link: '/manage/permissions/' },
        { text: 'Synchronisation', link: '/manage/synchronisation/' },
        { text: 'Mergin Maps Project', link: '/manage/project/' },
        { text: 'How to Create a New Project', link: '/manage/create-project/' },
        { text: 'How to Share, Transfer or Delete Projects', link: '/manage/project-advanced/' },
        { text: 'How to Delete Files', link: '/manage/delete-files/' },
        { text: 'How to Deploy Revised Projects', link: '/manage/deploy-new-project/' },
        { text: 'How to Recover Missing Data', link: '/manage/missing-data/' },
        { text: 'Mergin Maps QGIS Plugin Overview', link: '/manage/plugin/' },
        { text: 'Mergin Maps Dashboard', link: '/manage/dashboard/' },
        { text: 'Webmaps', link: '/manage/dashboard-maps/' },
        { text: 'Project History and Versions', link: '/manage/project-history/' },
        { text: 'Selective Synchronisation', link: '/manage/selective_sync/' }
      ]
    },
    {
      text: 'Setup GIS Project',   // required
      collapsed: true,
      items: [
        { text: 'QGIS Project Preparation', link: '/gis/features/' },
        { text: 'Sorting and Search Setup', link: '/gis/search_data/' },
        { text: 'Background Maps', link: '/gis/settingup_background_map/' },
        { text: 'Map Themes', link: '/gis/setup_themes/' },
        { text: 'How to Set Photo Names Format', link: '/gis/photo-names/' },
        { text: 'How to Enable Digitising', link: '/gis/enable_digitising/' },
        { text: 'How to Set Up Snapping for Mergin Maps Mobile App', link: '/gis/snapping/' },
        { text: 'How to Avoid Polygons Overlap', link: '/gis/avoid-overlap/' },
        { text: 'Custom Projections', link: '/gis/proj/' },
        { text: 'Supported Formats', link: '/gis/supported_formats/' }
      ]
    },
    {
      text: 'Configure Survey Layer',   // required
      collapsed: true,
      items: [
        { text: 'Best Practice Tips for Layers and Forms', link: '/layer/best-practice/' },
        { text: 'Setting Up Widgets in Attributes Form', link: '/layer/form-widgets/' },
        { text: 'Attributes Form Configuration', link: '/layer/form-configuration/' },
        { text: 'Attributes Form Layout', link: '/layer/form-layout/' },
        { text: 'Capturing Photos', link: '/layer/photos/' },
        { text: 'How to Attach Multiple Photos to Features', link: '/layer/attach-multiple-photos-to-features/' },
        { text: 'How to Link Multiple Records to One Feature (1-N Relations)', link: '/layer/one-to-n-relations/' },
        { text: 'Exif Metadata', link: '/layer/exif/' },
        { text: 'How to Use Hyperlinks', link: '/layer/external-link/' },
        { text: 'Working with Non-Spatial Tables', link: '/layer/non-spatial-data/' },
        { text: 'Extra Position Variables', link: '/layer/position_variables/' },
        { text: 'Extra QGIS Variables', link: '/layer/plugin-variables/' }
      ]
    },
    {
      text: 'Fieldwork Tips',   // required
      collapsed: true,
      items: [
        { text: 'Mergin Maps Mobile App Interface', link: '/field/mobile-app-ui/' },
        { text: 'Offline Use of Mergin Maps Mobile App', link: '/field/offline-use/' },
        { text: 'External GPS', link: '/field/external_gps/' },
        { text: 'GPS Accuracy', link: '/field/gps_accuracy/' },
        { text: 'Position Tracking', link: '/field/tracking/' },
        { text: 'Synchronisation in Mergin Maps Mobile App', link: '/field/autosync/' },
        { text: 'Measurement Tools', link: '/field/measure/' },
        { text: 'Layers in Mergin Maps Mobile App', link: '/field/layers/' },
        { text: 'How to Add, Edit, Delete Features', link: '/field/mobile-features/' },
        { text: 'How to Reuse Last Entered Values', link: '/field/reuse-last-values/' },
        { text: 'How to Stake Out Points', link: '/field/stake-out/' },
        { text: 'How to Fix a Broken Project', link: '/field/broken-project/' }
      ]
    },
    {
      text: 'For Developers',   // required
      collapsed: true,
      items: [
        { text: 'Custom Mobile App', link: '/dev/customapp/' },
        { text: 'Python API Client', link: '/dev/integration/' },
        { text: 'C++ API Client', link: '/dev/integration-cpp/' },
        { text: 'PostgreSQL DB Sync', link: '/dev/dbsync/' },
        { text: 'Media Sync', link: '/dev/media-sync/' },
        { text: 'Work Packages', link: '/dev/work-packages/' },
        { text: 'Geodiff Library', link: '/dev/geodiff/' }
      ]
    },
    {
      text: 'Custom Server',   // required
      collapsed: true,
      items: [
        { text: 'Overview', link: '/server/' },
        { text: 'Install', link: '/server/install/' },
        { text: 'Single Sign-On Deployment', link: '/server/sso-deployment/' },
        { text: 'Secure Mergin Maps Installation', link: '/server/security/' },
        { text: 'Upgrade', link: '/server/upgrade/' },
        { text: 'Administer', link: '/server/administer/' },
        { text: 'Administration Panel', link: '/server/dashboard/' },
        { text: 'Troubleshoot Custom Servers', link: '/server/troubleshoot/' },
        { text: 'Using Mergin Maps Mobile App and QGIS Plugin with a Custom Server', link: '/server/plugin-mobile-app/' }
      ]
    },
    {
      text: 'Migrate to Mergin Maps',   // required
      collapsed: true,
      items: [
        { text: 'Migrate from QField', link: '/migrate/qfield/' },
        { text: 'Migrate from ArcGIS', link: '/migrate/arcgis/' },
        { text: 'Migrate from FulcrumApp', link: '/migrate/fulcrumapp/' },
      ]
    },
    {
      text: 'Support & Legal',   // required
      collapsed: true,
      items: [
        { text: 'Licensing', link: '/misc/licensing/' },
        { text: 'Troubleshoot', link: '/misc/troubleshoot/' },
        { text: 'Contribute', link: '/misc/contribute/' },
        { text: 'Write Documentation', link: '/misc/write-docs/' }
      ]
    }
  ]
}
