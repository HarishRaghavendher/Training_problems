const csv = require('csvtojson');

const csvToJson = async (filePath) => {
  const jsonArray = await csv().fromFile(filePath);
  return jsonArray;
};

const sync = async () => {
  const distances = await csvToJson('./distances.csv');
  const routes = await csvToJson('./routes.csv');

 const Nroutes = routes.map(route => {
    route.stops = route.stops.split(',');
   return route;
  });
  const getTotalDistance = (stops) => {
    return stops.reduce((totalDistance, stop, index) => {
      const nextStop = stops[index + 1];
      const stopDistance = nextStop && distances.find(
        (distance) => distance.start == stop  && distance.end == nextStop) || distances.find((distance)=>distance.start == nextStop && distance.end == stop);
/* const alterDistance = nextStop && distances.find((distance) => distance.start == nextStop  && distance.end == stop); */
      totalDistance = stopDistance  ? totalDistance + Number(stopDistance.distance) : totalDistance;
      return totalDistance;
    }, 0); //try to call as individual function 
  };

  const main = routes.map((route) => {
    const dist = getTotalDistance(route.stops);
    return {
      ...route,
      distances: dist,
    };
  });

  console.log(main);
};

sync();