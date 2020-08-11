const response = {
  'levels':[
    [
      ['O','I','E'],
      ['I','I','X'],
      ['E','X','E']
    ],
    [
      ['E','I','O','I','E','I','O','E','I','O']
    ],
    [
      ['E','A','E','A','E'],
      ['A','I','I','I','A'],
      ['E','I','O','I','E'],
      ['A','I','I','I','A'],
      ['E','A','E','A','E']
    ],
    [
      ['O','X'],
      ['I','O'],
      ['E','X'],
      ['I','I'],
      ['O','X'],
      ['I','E'],
      ['E','X']
    ]
  ],
  'word': 'OIE',
};

export default (req, res) => {
  res.statusCode = 200;
  res.json(response);
};
