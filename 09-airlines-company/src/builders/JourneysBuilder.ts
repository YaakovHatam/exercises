import { Journey } from "../Journey";
import { FlightBuilder } from "./FlightBuilder";

export class JourneysBuilder {
   public Build(): Journey {
      var flight = new FlightBuilder().Build();

      return {
         departureDate: flight.departureDate,
         flight: flight,
         arriveStation: flight.arriveStation,
         departureStation: flight.departureStation,
         arriveDate: flight.arriveDate,
         description: "description",
         journeyKey: '' //Guid.NewGuid().ToString()
      } as Journey;
   }

   public BuildJourneys(): Journey[] {
      return [this.Build()] as Journey[];
   }
}
