"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwtSecret: process.env.JWT_SECRET || 'tokensecret',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/dbDraketech',
        USER: process.env.MONGODB_USER,
        PASSWORD: process.env.MONGODB_PASSWORD
    }
};
