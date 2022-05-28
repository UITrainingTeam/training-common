import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';


// webviz-common named export sorted Alphabetically
// Please maintan the order
let webviz_common_exports = [
  // common/core/color 
  'Color', 'ColorMapFactory', 'ColorMapName', 'IColorMap',

  // common/core/math
  'Matrix4', 'Point2', 'Point3', 'Vector2', 'Vector3',

  // common/core
  'AbstractPropertyModel', 'BroadcastedEvent', 'Error', 'ErrorLevel', 'EventBroadcaster', 'IBroadcastedEventListener',
  'IErrorHandler', 'IPropertyChangeListener', 'IPropertyModel', 'ViewerType',

  // data/proto
  // skipped

  // common/data
  /*'DataAccessorOptions',*/'DataPropertyConstants', /*'DataType',*/ 'DataUnits', /*'ICurveData',*/ /*'IDirectionalSurveyData',*/ /*'ISeismic2D',*/
  /*'ISeismic2DQueryParams',*/ /*'ISeismic2DQueryResult',*/ /*'IVolumeData',*/ 'IWellboreData', 'IWellData',
  /*'Seismic2DQueryResult',*/  /*'SeismicHeader',*/ 'SubVolume', 'SubVolumeParams', 'SurveyTransformHeader',
  'VolumeDataConverter',

  // common/data - generated
  'lcm',

  // ui
  'AbstractAction', 'AbstractActionsProvider', 'AbstractButtonAction', 'AbstractCheckboxAction', 'AbstractColormapPickerAction',
  'AbstractColorpickerAction', 'AbstractDropdownAction', 'AbstractInputAction', 'AbstractLabelAction', 'AbstractSliderAction', 'AbstractSpinnerAction',
  'AbstractToggleButtonAction', 'AbstractInputGroupAction', 'Action', 'ActionCategory', 'ActionContext', 'ActionGroup', 'ContextMenu', 'ContextMenuAction',
  'IComponentObserver', 'Toolbar', 'ToolbarStyle', 'ToolbarTheme', /*ViewAllContextMenuAction',*/

  // remote/core
  'UniqueIdentifierGenerator'
];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'build/bundle.js',
      format: 'umd',
      name: 'G3JS',
      indent: '\t',
    },
  ],
  plugins: [
    resolve({
      mainFields: ['module'],
      //preferBuiltins: true,
    }),
    commonjs({
      include: [
        'node_modules/**',
      ],
      namedExports: {
        'node_modules/protobufjs/minimal.js': ['BufferReader', 'util', 'roots', 'Reader', 'Writer'],
        'node_modules/@nextgengraphics/webviz-common/webviz-common.js': webviz_common_exports,
      }
    }),
    typescript({
      typescript: require('typescript'),
      clean: true //NOTE rollup-plugin-typescript2 has problems with its cache if other plugins use async/await, like rollup-plugin-copy. Current fix is to clean cache.
    }),
    json({
      // All JSON files will be parsed by default,
      // but you can also specifically include/exclude files
      //include: 'node_modules/**',
      //exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true,
      // specify indentation for the generated default export —
      // defaults to '\t'
      indent: '  ',
      // ignores indent and generates the smallest code
      compact: true,
      // generate a named export for every property of the JSON object
      namedExports: true
    })
  ]
}
