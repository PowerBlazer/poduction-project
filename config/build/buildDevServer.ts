import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: false,
        historyApiFallback: true,
        hot: true,
        allowedHosts: ['81.200.153.117', 'power-messenger.ru'],
        host: '0.0.0.0'
    }
}
