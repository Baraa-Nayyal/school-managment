import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DivisionsModule } from './divisions/divisions.module';
import { ClassesModule } from './classes/classes.module';
import { StudentsModule } from './students/students.module';
import { InvoicesModule } from './invoices/invoices.module';
import { TeachersModule } from './teachers/teachers.module';
import { DriversModule } from './drivers/drivers.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),

    
    MongooseModule.forRoot(process.env.MONGO_URL),
    DivisionsModule,
    ClassesModule,
    StudentsModule,
    InvoicesModule,
    TeachersModule,
    DriversModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
