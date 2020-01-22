exports.seed = function(knex, Promise) {
  return knex("cars")
    .truncate()
    .then(function() {
      return knex("cars").insert([
        {
          id: 1,
          make: "Ford",
          model: "f-150",
          vin: "2G1WB5EK0A1221785",
          mileage: 12,
          transmission_type: "",
          status_of_title: ""
        },
        {
          id: 2,
          make: "KIA",
          model: "Forte",
          vin: "4A3AE35G41E007631",
          mileage: 1344,
          transmission_type: "automatic",
          status_of_title: "clean"
        },
        {
          id: 3,
          make: "Chevy",
          model: "Sonic",
          vin: "KNALD124045017362",
          mileage: 122,
          transmission_type: "",
          status_of_title: ""
        },
        {
          id: 4,
          make: "Dodge",
          model: "Ram 1500",
          vin: "JN8AS58V19W431666",
          mileage: 12445,
          transmission_type: "",
          status_of_title: ""
        }
      ]);
    });
};
