module.exports = function(context) {

    const auth_settings = context.request.getEnvironmentVariable('auth_settings') || {};
    const auth = context.request.getEnvironmentVariable('auth') || {};


    Object.assign(auth_settings, auth);

    if (Object.keys(auth_settings).length  === 0) {
        return;
    }

    
    for (const name of Object.keys(auth_settings)) {
        const value = auth_settings[name];
        context.request.setAuthentication(name, value);
    }

    console.log('Authentication parameters', context.request.getAuthentication());
};
