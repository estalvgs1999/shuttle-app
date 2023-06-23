import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Reservation, ReservationSchema } from './schemas';
import {
  ReservationsMongoRepository,
  RESERVATIONS_REPOSITORY,
} from './repositories';
import { ReservationPostController } from './controllers';
import { CreateReservationService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Reservation.name,
        schema: ReservationSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: RESERVATIONS_REPOSITORY,
      useClass: ReservationsMongoRepository,
    },
    CreateReservationService,
  ],
  controllers: [ReservationPostController],
})
export class ReservationsModule {}
