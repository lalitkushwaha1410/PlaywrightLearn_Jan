interface AuthoringEnv {
    url_1: string;
    url_2: string;
}

interface EnvSettings {
    systest: AuthoringEnv,
    staging: AuthoringEnv,
    performance: AuthoringEnv,
    integration: AuthoringEnv,
}


export const env: EnvSettings = {
    systest: {
        url_1: "https://rahulshettyacademy.com/loginpagePractise/",
        url_2: "https://rahulshettyacademy.com/loginpagePractise/",
    },
    staging: {
        url_1: "https://rahulshettyacademy.staging.com/loginpagePractise/",
        url_2: "https://rahulshettyacademy.staging.com/loginpagePractise/",
    },
    performance: {
        url_1: "https://rahulshettyacademy.performance.com/loginpagePractise/",
        url_2: "https://rahulshettyacademy.performance.com/loginpagePractise/",
    },
    integration: {
        url_1: "https://authoring.integration.cha.rbxd.ds/mfe/table-entry/authoring",
        url_2: "https://authoring.integration.cha.rbxd.ds/content/pricing/",
    },
};

export const getEnv = (): AuthoringEnv => {
    // @ts-ignore
    const envName = process.env.ENV_NAME ?? 'staging';
    return env[`${envName}`]
}

export const getBrowser = () => {
    const browserName = process.env.BROWSER ?? 'chromium';
    return browserName;
};