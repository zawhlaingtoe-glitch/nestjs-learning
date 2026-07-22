"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = process.env.PORT || 3001;
    const HOST = process.env.HOST || "localhost";
    await app.listen(PORT, HOST, () => console.log(`Your server is running at http://${HOST}:${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map