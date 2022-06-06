import { Aircraft, Flight } from "../Flight";

export class FlightBuilder {
   public Build(): Flight {
      const _arriveDate = new Date();
      _arriveDate.setDate(2);
      const _departureDate = new Date();
      _departureDate.setDate(1);

      return {
         aircraft: Aircraft.A320,
         arriveDate: _arriveDate,
         number: "100",
         price: 150,
         arriveStation: "SYD",
         departureDate: _departureDate,
         departureStation: "MEL",
         flightKey: ''//Guid.NewGuid().ToString()
      } as Flight;
   }
}
