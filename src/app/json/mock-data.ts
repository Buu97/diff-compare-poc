export const INITIAL_DATA = {
  creditAmount: 5000000,
  name: 'MADECK',
  firstName: 'Zuck',
  relations: [
    {
      id: 12001,
      "nom": "RAKOTO",
      "prenoms": "Bernard",
      "civilite": "M",
      "adresse": {"rue_1": "Lot ABC", "rue_2": "Andrefantsena"}
    },
    {
      id: 12002,
      "nom": "RASOA",
      "prenoms": "Jeanne",
      "civilite": "Mlle",
      "adresse": {"rue_1": "Lot EDF", "rue_2": null}
    },
    {
      id: 12100,
      "nom": "RANDRIA",
      "prenoms": "Clémentine",
      "civilite": "Mme",
      "adresse": {"rue_1": "Lot GHI", "rue_2": "Ambonivohitra"}
    },
    {
      id: 12101,
      "nom": "RABENANDRASANA",
      "prenoms": "Jean",
      "civilite": "M",
      "adresse": {"rue_1": "Lot IJK", "rue_2": "Talamaty"}
    },
    {
      id: 12104,
      "nom": "RAZAFY",
      "prenoms": "François",
      "civilite": "M",
      "adresse": {"rue_1": "Lot IJK", "rue_2": "Talamaty"}
    }
  ]
}

export const MODIFIED_DATA = {
  creditAmount: 5000000,
  name: 'MADECK',
  firstName: 'Zuck',
  relations: [
    {
      id: 12100,
      "nom": "RANDRIA",
      "prenoms": "Clémentine",
      "civilite": "Mme",
      "adresse": {"rue_1": "Lot GHI", "rue_2": "Ambonivohitra"}
    },
    {
      id: 12001,
      "nom": "RAKOTONANDRASANA",
      "prenoms": "Bernard",
      "civilite": "M",
      "adresse": {"rue_1": "Lot ABC Bis", "rue_2": "Andrefantsena"}
    },
    {
      id: 12002,
      "nom": "RASOA",
      "prenoms": "Jeanne",
      "civilite": "Mme",
      "adresse": {"rue_1": "Lot EDF", "rue_2": "Anjozorobe"}
    },
    {
      id: 12101,
      "nom": "RABE",
      "prenoms": "Jean-Luc",
      "civilite": "M",
      "adresse": {"rue_1": "Lot IJK", "rue_2": "Talamaty"}
    },
    {
      id: 12103,
      "nom": "RAHARIMANANA",
      "prenoms": "Patrick",
      "civilite": "M",
      "adresse": {"rue_1": "Lot XYZ", "rue_2": "Behenjy"}
    }
  ]
}

export const CHANGE_FLAGS = {
  changeFlags: {
    add: {},
    replace: {relations: '*'},
    remove: {}
  },
  relations: {
    changeFlags: {
      "add": {12103: "*"},
      "remove": {12104: "*"},
      "replace": {12001: "*", 12002: "*", 12101: "*"}
    },
    12001: {
      "changeFlags": {
        "replace": {
          "nom": "RAKOTO", "adresse": "*"
        }
      },
      "adresse": {
        "changeFlags": {
          "replace": {"rue_1": "Lot ABC"}
        }
      }
    },
    12002: {
      "changeFlags": {
        "replace": {
          "civilite": "Mlle",
          "adresse": "*"
        }
      },
      "adresse": {
        "changeFlags": {
          "replace": {"rue_2": null}
        }
      }
    },
    12101: {
      "changeFlags": {
        "replace": {"nom": "RABENANDRASANA", "prenoms": "Jean"}
      }
    }
  }
}
