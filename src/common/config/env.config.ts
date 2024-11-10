import nodeConfig from 'config'

export interface IConfig {
    nodeEnv: string;
    app: {
        port: number;
        name: string;
    }
}

export const internalConfig: IConfig = {
    nodeEnv: nodeConfig.get('nodeEnv'),
    app: nodeConfig.get('app')
}