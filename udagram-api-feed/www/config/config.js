"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    aws_region: process.env.AWS_REGION,
    aws_profile: process.env.AWS_PROFILE,
    aws_media_bucket: process.env.AWS_BUCKET,
    aws_access_key_id: "AKIASTNO3K4OKCYWVBXD",
    aws_secret_access_key: "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",
    url: process.env.URL,
    jwt: {
        secret: process.env.JWT_SECRET,
    },
};
//# sourceMappingURL=config.js.map