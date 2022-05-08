// STARTS HERE
import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchDakkantalData = () => {
    const params = {
        TableName: tableName
    };

    docClient.scan(params, function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
}

const tableName = "dev-senegalese-family-names"
