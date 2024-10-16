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

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/some_database'),
    DivisionsModule,
    ClassesModule,
    StudentsModule,
    InvoicesModule,
    TeachersModule,
    DriversModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}