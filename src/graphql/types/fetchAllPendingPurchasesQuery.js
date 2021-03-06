import graphql from 'babel-plugin-relay/macro';

export default graphql`
    query fetchAllPendingPurchasesQuery {
        fetchRecentlyPendingPurchases {
            _id
            status
            buyer
            items {
                _id
                amount
                product {
                    _id
                    category
                    description
                    name
                    price
                }
            }
        }
    }
`