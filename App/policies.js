/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
 const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_SUSI",
        forgotPassword: "B2C_1_reset_password",
        editProfile: "B2C_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://atriohppartnersb2c.b2clogin.com/atriohppartnersb2c.onmicrosoft.com/B2C_1_SUSI",
        },
        forgotPassword: {
            authority: "https://atriohppartnersb2c.b2clogin.com/atriohppartnersb2c.onmicrosoft.com/B2C_1_reset_password",
        },
        editProfile: {
            authority: "https://atriohppartnersb2c.b2clogin.com/atriohppartnersb2c.onmicrosoft.com/B2C_1_edit_profile"
        }
    },
    authorityDomain: "atriohppartnersb2c.b2clogin.com"

  
}