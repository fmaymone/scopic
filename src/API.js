export function getList() {
    var isOk = true;
    
      return new Promise(
        function (resolve, reject) {
            if (isOk) {
                const mock = {
                    stadiums: [
                      {
                        id: 1,
                        name: "Luzhniki Stadium",
                        city: "Moscow"
                      },
                      {
                        id: 2,
                        name: "Otkrytiye Arena",
                        city: "Moscow"
                      },
                      {
                        id: 3,
                        name: "Krestovsky Stadium",
                        city: "Saint Petersburg"
                      }
                    ]
                  };
                resolve(mock); 
            } else {
                var reason = new Error('Error');
                reject(reason); 
            }
    
        }
    )
 
}