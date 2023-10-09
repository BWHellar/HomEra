import gql from "graphql-tag";

export const personGql = gql`
  query Person {
    person {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ndbId
          firstName
          lastName
          dateOfBirth
          id
          firebaseId
          photoPath
          email
          bio
          phoneHome
          phoneMobile
          verificationType
          verificationNumber
          pointsBalance
          photoUrl
          addresses {
            street
            postcode
            city
            state
          }
          identification {
            number
            country
            stateIssued
            # identType
            # identCountry
          }
          residence {
            price
            relocationReason
            startDate
            endDate
            manager {
              name
              phone
            }
            address {
              street
              city
              state
              postcode
            }
          }
          employment {
            title
            supervisorName
            supervisorEmail
            supervisorPhone
            salary
            startDate
            endDate
            employerName
            address {
              street
              city
              state
              postcode
            }
          }
          criminalEviction {
            isEvicted
            isConvictedOfMisdemeanor
            isConvictedOfFelony
            # files {
            #   id
            #   url
            # }
          }
          reference {
            name
            title
            phone
            email
          }
        }
      }
    }
  }
`;

export const primaryLocations = gql`
  query locations($status: String) {
    locations(status: $status) {
      edges {
        node {
          totalOccupied
          name
          id
          slPrefixNum
          slLocationId
          templateId
          organizationId
          pointsBalance
          customId
          photos
          totalUnits
          addresses {
            streetOne
            streetTwo
            city
            state
            country
            zip
          }
          status
          depositRules
          esginType
        }
      }
    }
  }
`;