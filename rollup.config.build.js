import cjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    name: 'apicase-core',
    file: 'dist/index.js',
    format: 'es'
  },
  plugins: [
    cjs(),
    resolve({ jsnext: true }),
    babel(),
    uglify()
  ]
}
