const jwt = require('jsonwebtoken');

const JwtService = {

    /**
     * Create new jsonwebtoken
     */
    createNewToken: ({
        id, email, role_id, first_name,last_name
    }) => jwt.sign(
        {
            sub: id,
            email:email,
            role:role_id,
            first_name:first_name,
            last_name:last_name
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '1d' }
    ),

    /**
     * Get the token with the user data
     */
    getJwtTokenWithUserData: async (user, deviceToken) => {
        const token = JwtService.createNewToken(user);
        
        // await UserService.updateUserById(user.id, {
        //   login_token: token,
        //   device_token: deviceToken
        // });
        return token;
        // return {
        //   token,
        //   user
        // };
    }

};

module.exports = JwtService;
