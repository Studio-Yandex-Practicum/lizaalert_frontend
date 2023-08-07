import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import HtmlMinimizerPlugin from 'html-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

export const buildOptimizations = () => ({
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin(),
    new HtmlMinimizerPlugin(),
    new TerserPlugin(),
  ],
});
