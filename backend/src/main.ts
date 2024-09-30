import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(); // Enable CORS for all routes

    const config = new DocumentBuilder()
        .setTitle('Task Manager API')
        .setDescription('API documentation for Task Manager project')
        .setVersion('1.0')
        .addBearerAuth() // Adds support for JWT bearer token
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
    await app.listen(3000);   // Ensure the port is correct
}
bootstrap();
