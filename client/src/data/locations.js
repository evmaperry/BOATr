const locations = [
  {
    id: 1,
    location: 'Lake Tahoe',
    annualVisitors: 15000000,
    zip: 96150,
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Tahoe_North_Shore_from_the_East_Shore.jpg',
    closeTo: [
      {
        city: 'Bay Area',
        population: 8000000,
        driveTime: 3
      },
      {
        city: 'Reno',
        population: 500000,
        driveTime: .75
      },
      {
        city: 'Sacramento',
        population: 2000000,
        driveTime: 2
      }
    ]
  },
  {
    id: 2,
    location: "Lake of the Ozarks",
    annualVisitors: 10000000,
    zip: 65049,
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Party-cove1.jpg',
    closeTo: [
      {
        city: 'St. Louis',
        population: 3000000,
        driveTime: 3
      },
      {
        city: 'Kansas City',
        population: 2000000,
        driveTime: 2.5
      }
    ]
  },
  {
    id: 3,
    location: "Lake Lanier",
    annualVisitors: 10000000,
    zip: 30506,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Lake_Sidney_Lanier.jpg/1600px-Lake_Sidney_Lanier.jpg?20181227214400',
    closeTo : [
      {
        city: 'Atlanta',
        population: 6000000,
        driveTime: 1
      }
    ]
  },
  {
    id: 4,
    location: "Big Bear Lake",
    annualVisitors: 1000000,
    zip: 92314,
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Big_Bear_Lake1.jpg',
    closeTo: [
      {
        city: 'Los Angeles',
        population: 13000000,
        driveTime: 2
      }
    ]
  },
  {
    id: 5,
    location: "Torch Lake",
    annualVisitors: 1000000,
    zip: 49648,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Michigan%27s_Torch_Lake.jpg/1600px-Michigan%27s_Torch_Lake.jpg?20060514015415',
    closeTo: [
      {
      city: 'Detroit',
      population: 4000000,
      driveTime: 4,
    }
   ]
  },
  {
    id: 6,
    location: 'Finger Lakes',
    annualVisitors: 4000000,
    zip: 14424,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Sunrise_overlooking_a_vineyard_in_the_Finger_Lakes.jpg/220px-Sunrise_overlooking_a_vineyard_in_the_Finger_Lakes.jpg',
    closeTo: [
      {
        city: 'New York City',
        population: 18000000,
        driveTime: 5,
      }
    ]
  }

]

export default locations